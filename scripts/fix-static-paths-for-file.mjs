/**
 * After `next build`, asset URLs are root-absolute (/ _next/..., /images/...).
 * Opening build/index.html via file:// makes the browser resolve "/" as the
 * filesystem root, so CSS/JS/fonts fail. This rewrites paths so the export works
 * when opened from disk (and still works behind a static server at /).
 */
import fs from 'fs'
import path from 'path'

const buildDir = path.join(process.cwd(), 'build')

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name)
    if (name.isDirectory()) walk(full, callback)
    else callback(full)
  }
}

function patchHtml(content) {
  return content
    .replaceAll('href="/_next', 'href="./_next')
    .replaceAll('src="/_next', 'src="./_next')
    .replaceAll('href="/favicon', 'href="./favicon')
}

function patchWebpackRuntime(content) {
  return content.replaceAll('c.p="/_next/"', 'c.p="./_next/"')
}

/** Root-relative public/ paths in JS (img src, next/image, JSON) break on file:// */
function patchJsPublicImages(content) {
  return content.replaceAll('"/images/', '"./images/')
}

/** CSS lives at build/_next/static/css/*.css */
function patchCss(content) {
  return content
    .replaceAll('url(/_next/static/media/', 'url(../media/')
    .replaceAll('url(/images/', 'url(../../../images/')
}

if (!fs.existsSync(buildDir)) {
  console.error('Missing build/ — run `npm run build` first.')
  process.exit(1)
}

let htmlCount = 0
let cssCount = 0
let webpackCount = 0
let jsImagesCount = 0

walk(buildDir, (file) => {
  if (file.endsWith('.html')) {
    const before = fs.readFileSync(file, 'utf8')
    const after = patchHtml(before)
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8')
      htmlCount++
    }
    return
  }

  const normalized = file.replace(/\\/g, '/')
  if (normalized.includes('/_next/static/css/') && file.endsWith('.css')) {
    const before = fs.readFileSync(file, 'utf8')
    const after = patchCss(before)
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8')
      cssCount++
    }
    return
  }

  if (file.endsWith('.js') && normalized.includes('/_next/')) {
    const before = fs.readFileSync(file, 'utf8')
    let after = before
    if (after.includes('c.p="/_next/"')) after = patchWebpackRuntime(after)
    if (after.includes('"/images/')) after = patchJsPublicImages(after)
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8')
      if (before.includes('c.p="/_next/"')) webpackCount++
      if (before.includes('"/images/')) jsImagesCount++
    }
  }
})

console.log(
  `fix-static-paths-for-file: ${htmlCount} html, ${cssCount} css, ${webpackCount} webpack runtime, ${jsImagesCount} js w/ images`,
)
