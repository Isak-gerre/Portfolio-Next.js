import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { Project } from '../../types';
import projectsData from '../../data/projects.json';
import fs from 'fs';
import path from 'path';

interface ProjectPageProps {
  project: Project;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = projectsData as Project[];
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.slug === params?.slug);
  if (!project) return { notFound: true };

  const mdPath = path.join(process.cwd(), 'data', 'projects', `${project.slug}.md`);
  let content = '';
  try {
    content = fs.readFileSync(mdPath, 'utf-8');
  } catch {
    content = project.description;
  }

  return { props: { project, content } };
};

export default function ProjectPage({ project, content }: ProjectPageProps) {
  const { title, category, description, headerImage, images, tags, url, slug } = project;
  const hasImages = images && images.length > 0;

  const metaDescription = description.length > 160
    ? description.slice(0, 157) + '...'
    : description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: description,
    url: url,
    author: {
      '@type': 'Person',
      name: 'Isak Gerre',
      jobTitle: 'Frontend Developer',
      url: 'https://isakgerre.com',
    },
    keywords: tags.join(', '),
    ...(category && { genre: category }),
    ...(headerImage && { image: headerImage }),
  };

  return (
    <>
      <Head>
        <title>{`${title} — Isak Gerre | Portfolio`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={tags.join(', ')} />
        <meta name="author" content="Isak Gerre" />

        {/* Open Graph */}
        <meta property="og:title" content={`${title} — Isak Gerre`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://isakgerre.com/projects/${slug}`} />
        {headerImage && <meta property="og:image" content={headerImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} — Isak Gerre`} />
        <meta name="twitter:description" content={metaDescription} />

        {/* Canonical */}
        <link rel="canonical" href={`https://isakgerre.com/projects/${slug}`} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-[#FF4B3A] overflow-y-auto">
        {/* Top nav */}
        <nav className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 py-6 opacity-0 animate-fadeIn" aria-label="Project navigation">
          <Link
            href="/?section=projects"
            className="flex items-center gap-2 text-custom-white font-semibold text-sm hover:opacity-70 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Projects
          </Link>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border-2 border-custom-white text-custom-white text-xs font-bold px-4 py-2 rounded-full hover:bg-custom-white hover:text-[#FF4B3A] transition-all duration-300"
          >
            Visit Project
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </nav>

        {/* Main content */}
        <main className="px-4 sm:px-8 md:px-12 lg:px-24 pb-24 opacity-0 animate-fadeIn">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <header>
              {category && (
                <p className="text-sm font-bold text-custom-white opacity-80 mb-2">{category}</p>
              )}
              <h1 className="lg:text-[128px] md:text-[96px] sm:text-[64px] text-[64px] font-bold text-custom-white mb-6 leading-none">
                {title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Technologies used">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="bg-transparent border-2 border-custom-white text-custom-white text-xs font-bold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Hero image */}
            <figure className="bg-custom-white rounded-2xl h-[375px] w-full flex items-center justify-center px-12 mb-12">
              <Image
                src={headerImage}
                alt={`${title} logo`}
                width={1000}
                height={1000}
                className="rounded-2xl h-full object-contain"
                priority
              />
            </figure>

            {/* TL;DR */}
            <div className="mb-8">
              <p className="text-custom-white font-bold text-lg mb-2">TL;DR</p>
              <p className="text-lg text-custom-white leading-relaxed">{description}</p>
            </div>

            <hr className="my-8 border-custom-white" />

            {/* Markdown content */}
            <article className="space-y-6 text-lg text-custom-white">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-custom-white mt-12 mb-4 first:mt-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-custom-white mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-lg text-custom-white leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-3 mb-6">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-lg text-custom-white leading-relaxed flex gap-3">
                      <span className="text-custom-white opacity-50 mt-0.5 shrink-0" aria-hidden="true">&#8226;</span>
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  hr: () => <hr className="my-8 border-custom-white" />,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-white font-bold underline"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>

            {/* Image gallery */}
            {hasImages && (
              <section aria-label="Project gallery">
                <hr className="my-8 border-custom-white" />
                <h2 className="text-2xl font-bold text-custom-white mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((img, i) => (
                    <figure key={i} className="rounded-2xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`${title} screenshot ${i + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* Footer */}
            <footer>
              <hr className="my-8 border-custom-white" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-12">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-custom-white text-[#FF4B3A] font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Visit {title}
                  <Image src="/images/arrow.svg" alt="" width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(37%) sepia(93%) saturate(3000%) hue-rotate(350deg)' }} />
                </a>
                <Link
                  href="/?section=projects"
                  className="text-custom-white font-medium text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Back to all projects
                </Link>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
