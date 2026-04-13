import React from 'react';
import Link from 'next/link';
import { LinkPreview } from './ui/link-preview';

const cvData = [
  {
    id: 1,
    title: 'Work Experience',
    workExperience: [
      {
        id: 1,
        title: 'Full stack developer',
        company: 'Nimt.ai',
        date: 'Aug 2025 - present',
        projectSlug: 'nimt',
        description: 'Led the frontend development of an AI search analytics platform that helps brands track their visibility, sentiment, and citations across major LLMs like ChatGPT, Perplexity, and Gemini. Took initiative to restructure the existing codebase upon joining, improving maintainability and laying a stronger foundation for future development. Drove a strong focus on user experience, ensuring complex AI-driven data - such as brand sentiment scores, source tracking, and cross-model visibility rankings - was presented in a clear and intuitive way. Spearheaded the full rebrand and rebuilt the marketing site from the ground up using Framer.',
      },
      {
        id: 2,
        title: 'Software Developer',
        company: 'Savery.ai',
        date: 'Jan 2025 - Aug 2025',
        projectSlug: 'savery',
        description: 'Spearheaded the development of an interactive AI Agent Network Creator with drag-and-drop UI for connecting and configuring AI agents. Enabled agent customization with model selection, user instructions, and integrated tools like Web Search, Terminal Access, and Task Manager. Led the frontend architecture, ensuring a visually engaging and highly maintainable interface. Collaborated with backend developers to ensure seamless system integration and smooth performance.',
      },
      {
        id: 3,
        title: 'Frontend Developer',
        company: 'Institutet för solenergikvalitet',
        date: '2023-2025',
        projectSlug: 'solkoll',
        description: 'As a Frontend Developer at IFSEK, I oversee the development and maintenance of a sophisticated in-house Customer Relationship Management (CRM) and document management application. This role allows me to leverage my expertise in frontend development to craft user-centric and visually engaging web applications that meet and exceed client expectations. As the sole developer and maintainer of the application, I am responsible for designing and implementing intuitive user interfaces and innovative features, including interactive document functionality, a string layout builder, and PDF generation capabilities. Collaboration with the backend development team is a critical aspect of my role, ensuring seamless integration of frontend components with backend services and databases. This position has been instrumental in refining my skills in frontend development, problem-solving, and cross-functional collaboration. It has also provided opportunities to expand my expertise into backend development, enhancing my technical versatility. Through my contributions, I strive to deliver high-quality solutions that align with IFSEK’s mission of creating exceptional digital tools for its clients.',
      },
      {
        id: 4,
        title: 'Internship',
        company: 'Sjöbergska Huset AB - Malmö',
        date: 'Jan 2023 - Jun 2023',
        description: 'During my internship at Sjöbergska, I had the valuable opportunity to engage directly with customers under the guidance and mentorship of Jens Grip. This experience not only honed my interpersonal and customer service skills but also deepened my understanding of effective client communication. Moreover, I had the privilege of developing an application using SvelteKit and Firebase. This project allowed me to leverage my technical expertise while gaining hands-on experience in modern web development frameworks and cloud-based technologies. By working on this application, I enhanced my proficiency in building robust and user-friendly web solutions.In addition, I contributed to the enhancement and redesign of Björn Lomborg\'s website using Drupal. Furthermore, I took on the responsibility of organizing and facilitating workshops to define and refine our project objectives. Through these workshops, I demonstrated my leadership abilities, effective communication skills, and the capacity to collaborate and guide a team towards achieving shared goals.',
      },
      {
        id: 5,
        title: 'Project Manager and Web Developer',
        company: 'HIVE Malmö - Malmö',
        date: 'Jun 2022 - Jun 2023',
        projectSlug: 'hivemalmo',
        description: 'As a Project Manager and Lead Web Developer for HIVE Malmö, I have been actively involved in developing and driving forward the HIVE Malmö project, in collaboration with my peers. The project\'s mission is to establish a stronger connection between students and the business community, and I have played a key role in its success. My responsibilities include overseeing project activities, coordinating with team members, and managing web development tasks to ensure the project\'s objectives are met. Through HIVE Malmö, we aim to create a vibrant platform that bridges the gap between academia and industry.',
      },
      {
        id: 6,
        title: 'Amanuens - Teacher assistant',
        company: 'Malmö University - Malmö',
        date: 'Jan 2021 - Jun 2021 & Jan 2022 - Jun 2022',
        description: 'Throughout two semesters of my academic journey, I successfully secured the role of a teaching assistant for two distinct programming courses. In this esteemed position, I had the opportunity to deliver informative lectures on various programming concepts, assist students in resolving queries, and meticulously evaluate examinations. Additionally, I actively engaged in and taught two comprehensive day-long lectures on the fascinating realm of 3D animation within Blender.',
      },
    ] ,
  },
  {
    id: 2,
    title: 'Education',
    education: [
      {
        id: 1,
        title: 'Media Production and Process Design',
        company: 'Malmö University',
        date: '2020-2023',
        description: 'Media Production and Process Design is a three-year bachelor\'s program focused on the development of web channels and media production. The program offers a wide range of knowledge and the opportunity to specialize in a chosen area. In the core part of the program, students learn to create their own web-based channels, including interactive and dynamic content, as well as produce original material for print, web, and mobile platforms. The program encompasses theoretical foundations in design, programming, management, marketing, and storytelling, which are applied in various aspects of media development, such as front-end development, advertising, and print production. Students gain practical skills in media production and are equipped with a comprehensive understanding of the media landscape.',
      },
    ],
  },
  {
    id: 3,
    title: 'Feats',
    feats: [
      {
        id: 1,
        title: 'Speaker at seminar about talent retention in Malmö',
        company: 'HIVE Malmö',
        date: "March 2024",
        description: 'In my role as the founder and project manager of HIVE Malmö, I had the privilege of gathering valuable experience and insights from both students and the workforce regarding the student-workforce relationship in the city of Malmö. This enriching journey led to a remarkable opportunity where I was graciously invited by Malmö Tillväxtkommisionen and Studentklåren Malmö to share my knowledge at a seminar focused on talent retention in Malmö.',
      },
    ],
  },
];


const otherData = [
  {
    id: 1,
    title: 'Skills',
    skills: [
      {
        id: 1,
        title: 'Design',
        list: ['Photography', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Lightroom', 'Adobe After Effects', 'Adobe InDesign', 'Adobe Premiere Pro', 'Blender'],
      },
      {
        id: 2,
        title: 'Development',
        list: ['Next.js', 'TypeScript', 'AWS', 'Vercel', 'SST', 'React', 'SvelteKit', 'JavaScript', 'Figma', 'HTML', 'CSS/SCSS', 'Node.js', 'Express', 'REST APIs', 'PHP', 'Firebase', 'MongoDB'],
      },
      {
        id: 3,
        title: 'Languages',
        list: ['Swedish - Mother tongue', 'Danish - Good understanding', 'English - Fluent'],
      },
    ],
  },
];

const CV = () => {
  return (
    <div className="w-full text-white p-4 sm:p-8 md:p-12 lg:p-24 max-h-screen overflow-y-auto opacity-0 animate-fadeIn ease-in-out">
      <div className="max-w-2xl mx-auto">
        {cvData.map((section) => (
          <div key={section.id} className="mb-16 last:mb-0">
            <h1 className="lg:text-[128px] md:text-[96px] sm:text-[64px] text-[64px] font-bold text-custom-white mb-12">

              {section.title}
            </h1>
            <hr className="my-8 border-custom-white" />
            <div className="space-y-12 text-lg text-custom-white">
              {section.workExperience && section.workExperience.map((workExperience) => (
                <Description key={workExperience.id} {...workExperience} />
              ))}
            </div>
            <div className="space-y-12 text-lg text-custom-white">
              {section.education && section.education.map((education) => (
                <Description key={education.id} {...education} />
              ))}
            </div>
            <div className="space-y-12 text-lg text-custom-white">
              {section.feats && section.feats.map((feats) => (
                <Description key={feats.id} {...feats} />
              ))}
            </div>
          </div>
        ))}
        {otherData.map((section) => (
          <div key={section.id} className="mb-16 last:mb-0">
            <h1 className="text-[128px] font-bold text-custom-white mb-12">
              {section.title}
            </h1>
            <hr className="my-8 border-custom-white" />
            <div className="space-y-12 text-lg text-custom-white">
              {section.skills && section.skills.map((skills) => (
                <div key={skills.id}>
                  <h2 className="text-xl font-bold">{skills.title}</h2>
                  <div className="flex flex-row gap-2">
                    <p className="text-md font-medium text-custom-white opacity-80">{skills.list.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Description = ({ title, company, date, description, projectSlug }: { title: string, company: string, date: string, description: string, projectSlug?: string }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex flex-row gap-2">
        <p className="text-md font-medium text-custom-white opacity-80">{company}</p>
        <p className="text-md font-medium text-custom-white opacity-80">|</p>
        <p className="text-md font-medium text-custom-white opacity-80">{date}</p>
        </div>
      <p className="!text-md text-custom-white !leading-relaxed">{description}</p>
      {projectSlug && (
        <Link href={`/projects/${projectSlug}`} className="text-custom-white font-bold underline text-sm mt-2 inline-block">
          View project →
        </Link>
      )}
    </div>
  );
};

export default CV;
