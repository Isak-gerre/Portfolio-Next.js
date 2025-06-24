import React, { useState } from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { LinkPreview } from './ui/link-preview';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

const funFacts = [
  'I dance competitively.',
  'I can solve a Rubik\'s Cube.',
  'I\'ve danced on danish live TV.',
  'My favorite food is pizza (but I\'m lactose intolerant).',
  'I have a longboard made out of glass.',
  'I\'ve spent way too much time in World of Warcraft.',
  'I was born with two birth defects. Cleft palate and clubfoot (both fixed with surgery).',
  'I\'ve been a vegetarian for 6 years.',
  'I\'ve photographed a wedding.',
  'My latest hobby is flying FPV drones.',
];

const Home = () => {
  const [factIndex, setFactIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const handleNewFact = () => {
    setFactIndex(prevIndex => (prevIndex + 1) % funFacts.length);
  };

  return (
    <div className="p-4 md:p-10 lg:p-20 lg:py-40 max-h-screen overflow-y-hidden animate-fadeIn opacity-0">
      <div className="max-w-4xl">
        <div className=" relative flex flex-row gap-20">
        <p className="text-gray-500 ">Welcome</p>
              {isMobile || <div className="speech-bubble-blue shadow-lg w-fit animate-periodic-shake transform !-translate-y-2 !rotate-12">Hover me!</div>}
            </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium !leading-tight">
          I'm <LinkPreview
            url="https://savery.ai/"
            isStatic
            imageSrc="/images/me.png"
          className="font-bold text-custom-blue "
        >
          Isak
        </LinkPreview>, a multi-disciplinary developer with 5-years experience in frontend development. Currently developing saas-solution for <LinkPreview
          url="https://savery.ai/"
          className="font-bold text-custom-red "
        >
          Savery.ai
        </LinkPreview>, previously at <LinkPreview
          url="https://www.solenergikvalitet.se/"
          className="font-bold text-custom-yellow "
        >
          Institutet för solenergikvalitet
        </LinkPreview>.
        </h2>
        <hr className="my-8" />
        {(() => {
          const skills = ["Next.js", "React", "TypeScript", "Tailwind", "UX/UI", "Design", "& much more..."];
          return (
            <div className="flex flex-wrap gap-2 text-sm">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          );
        })()}

        <div className="mt-16">
          <div className="flex items-center">
          <p className="text-gray-500 text-sm">Fun fact generator</p>
            <div className="ml-4 relative" onClick={handleNewFact}>
              <div className="speech-bubble-red shadow-lg w-fit animate-periodic-shake">Click for a new fun fact 🎉</div>
            </div>
          </div>
            <div className=" min-h-[56px] w-full" onClick={handleNewFact}>
            <TextGenerateEffect
              
                key={factIndex}
                words={funFacts[factIndex]}
                className="!text-2xl !font-bold !leading-snug"
              />
            </div>
        </div>
      </div>
      <footer className="absolute bottom-10 text-gray-400 w-full md:pr-[180px] flex flex-row justify-between">
        <p className="md:text-sm text-xs">Based in Malmö, Sweden</p>
        <p className="md:text-sm text-xs">Contact me at <a href="mailto:isak.gerre@gmail.com" className="text-custom-blue" target="_blank">isak.gerre@gmail.com</a></p>
        <p className="md:text-sm text-xs">LinkedIn: <a href="https://www.linkedin.com/in/isak-gerre-0754a5227/" className="text-custom-blue" target="_blank">Isak Gerre</a></p>
        <p className="md:text-sm text-xs">GitHub: <a href="https://github.com/Isak-gerre" className="text-custom-blue" target="_blank">isakgerre</a></p>
      </footer>
    </div>
  );
};

export default Home; 