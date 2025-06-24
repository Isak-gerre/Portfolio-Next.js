import React from 'react';
import { LinkPreview } from './ui/link-preview';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import Image from 'next/image';

const aboutData = [
  {
    id: 1,
    title: 'About me',
    paragraphs: [
      <p className='leading-relaxed'>Curiosity has a way of opening doors to the unexpected. For me, it's led to exploring the complexities and beauty of programming, competitive dancing, diving into the art of tufting rugs and even taking 30 university credits of <LinkPreview isStatic url='/' imageSrc='/images/nihao.svg' className='text-custom-white font-bold underline'>Chinese</LinkPreview>. While I can't claim fluency in mandarin, those studies and my unusual hobbies taught me something more important: the joy of stepping into the unknown and learning along the way. It's that same mindset that drives everything I do, from solving complex technical problems to finding new ways to connect ideas and people.</p>,
      <p className='leading-relaxed'>As a web developer, I've honed my skills in building functional, user-friendly applications. At <LinkPreview url='https://www.solenergikvalitet.se/' className='text-custom-white font-bold underline'>IFSEK</LinkPreview>, I've mainly been involved in developing <LinkPreview url='https://www.solkoll.se/' className='text-custom-white font-bold underline'>Solkoll</LinkPreview>, a CRM and document management platform that helps solar panel installers deliver high-quality results. Working with tools like Next.js, TypeScript and AWS, I've contributed to a solution that's not only practical but meaningful—helping our customer build safe and high quality installations. Beyond the technical work, it's rewarding to know that what I build makes life easier and better for its users.</p>,
      <p className='leading-relaxed'>Before that chapter of my career, I co-founded HIVE Malmö - that focused on bringing students and businesses together to tackle real-world challenges. As project leader, I had the unforgettable experience of hosting several events and being invited to seminars to share our insights. It was one of those projects where preparation, creativity, and collaboration came together—a mix that continues to inspire my approach to work.</p>,
      <p className='leading-relaxed'>Outside the office, life keeps me on my toes in more ways than one. Whether dancing <LinkPreview isStatic url='/' imageSrc='/images/bugg.gif' className='text-custom-white font-bold underline'>bugg</LinkPreview> (a fast-paced Swedish partner dance), piloting <LinkPreview isStatic url='/' imageSrc='/images/drone.gif' className='text-custom-white font-bold underline'>FPV drones</LinkPreview>, or hosting a fiercely competitive music quiz, I find energy in staying curious and creative. And when it's time to slow down, I love spending time with my partner and daughter— a reminder of the importance of balancing creativity with connection.</p>,
    ] ,
  },
  {
    id: 2,
    title: 'My unusual hobbies',
    paragraphs: [
      <p className='leading-relaxed'>Outside of coding, I have a variety of hobbies that fuel my creativity and help me stay balanced. One of my long-standing passions is dancing and competing in <LinkPreview isStatic url='/' imageSrc='/images/bugg.gif' className='text-custom-white font-bold underline'>bugg</LinkPreview>, a Swedish dance style that is full of energy and precision. It's a dynamic, fast-paced dance that requires focus, coordination, and a sense of rhythm, and I love the challenge of mastering new moves and competing against others who share the same passion. It's a fun way to stay active while connecting with people outside of the tech world.</p>,
      <p className='leading-relaxed'>I also have a growing interest in flying <LinkPreview isStatic url='/' imageSrc='/images/drone.gif' className='text-custom-white font-bold underline'>FPV drones</LinkPreview>, which is my newest hobby. There's something incredibly exciting about the combination of piloting and filming, and I'm still learning the ins and outs of the craft. The freedom of flying through the air and capturing unique perspectives is both exhilarating and challenging. I'm excited to continue improving my skills, exploring new locations, and sharing my experiences through the lens of these high-tech drones.</p>,
      <p className='leading-relaxed'>In addition to these activities, I'm also enjoy making rugs with a tufting gun, a creative and hands-on process that allows me to design intricate patterns and bring them to life with yarn. It's a satisfying mix of artistry and craftsmanship, and I love how tangible the outcome is. Each rug is a piece of art that I can be proud of, and it's an excellent way for me to unwind while still engaging my creative side.</p>,
      <p className='leading-relaxed'>I also enjoy dabbling in 3D modeling, which is another way for me to express my creativity and push the boundaries of what's possible. Whether I'm modeling something for fun or learning new techniques, this hobby gives me a chance to experiment and think outside the box. I often find that the problem-solving skills I develop through 3D modeling overlap with my work as a developer, so it's both a hobby and a way to enhance my professional skills.</p>,
      <p className='leading-relaxed'>Each of these hobbies allows me to tap into different creative outlets and keeps me energized and inspired. They provide a balance to my work and help me maintain a fresh perspective in everything I do.</p>,
    ],
  },
];

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-full text-white p-4 sm:p-8 md:p-12 lg:p-24 max-h-screen overflow-y-auto opacity-0 animate-fadeIn ease-in-out">
      <div className="max-w-2xl mx-auto">
        {aboutData.map((section, index) => (
          <div key={section.id} className="mb-16 last:mb-0">
            <h1 className="lg:text-[128px] md:text-[96px] sm:text-[64px] text-[64px] font-bold text-custom-white mb-12">

              {section.title}
            </h1>
            {index === 0 && !isMobile && (
              <p className="text-lg text-custom-white opacity-50">
                Hover the underlined words 😉
              </p>
            )}
            <hr className="my-8 border-custom-white" />
            <div className="space-y-6 text-lg text-custom-white">
              {section.paragraphs.map((paragraph, index) => (
                paragraph
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              {isMobile && (
                <>
                  {index === 0 && <Image src="/images/bugg.gif" alt="bugg" width={60} height={60} className="w-1/2 mx-auto h-full object-cover rounded-lg mt-12" />}
                  {index === 0 && <p className="text-md text-custom-white opacity-50 mx-auto">
                    Me dancing bugg
                  </p>}
                  {index === 1 && <Image src="/images/drone.gif" alt="drone" width={60} height={60} className="w-1/2 mx-auto h-full object-cover rounded-lg mt-12" />}
                  {index === 1 && <p className="text-md text-custom-white opacity-50 mx-auto">
                    Me flying drones
                  </p>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
