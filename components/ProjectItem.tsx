import React from 'react';
import Image from 'next/image';
import { Project } from '../types';
import { LinkPreview } from './ui/link-preview';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, category, description, headerImage, tags, layoutStyle, imageAlignment, url, altImage } = project;

  const imageContent = (
    <div className="bg-custom-white rounded-2xl h-[375px] w-full flex items-center justify-center px-12">
      <Image src={headerImage} alt={title} width={1000} height={1000} className="rounded-2xl h-full" />
    </div>
  );

  const textContent = (
    <div className="flex flex-col gap-2">
      {category && <p className="text-sm font-bold text-custom-white">{category}</p>}
      {altImage ? (
      <LinkPreview
          url={url}
          imageSrc={altImage || headerImage}
          isStatic
          className="font-bold flex flex-row items-center gap-4"
        >
        <h2 className="text-[48px] font-bold text-custom-white underline">{title}</h2>
         <Image src={"/images/arrow.svg"} alt={title} width={60} height={60} className="" />
        </LinkPreview>

      ) : <LinkPreview
            url={url}
          className="font-bold flex flex-row items-center gap-4"
        >
        <h2 className="text-[48px] font-bold text-custom-white underline">{title}</h2>
        <Image src={"/images/arrow.svg"} alt={title} width={60} height={60} className="" />
        </LinkPreview>}
      
      <p className="text-custom-white !font-medium !text-[16px]">{description}</p>
      <hr className="my-4 border-custom-white" />
        <div className="flex flex-wrap gap-2 ">
            {tags.map((tag) => (
                <span key={tag} className="bg-transparent border-2 border-custom-white text-custom-white text-xs !font-bold px-2 py-1 rounded-full">
                {tag}
                </span>
            ))}
        </div>
    </div>
  );

  if (layoutStyle === 'col') {
    return (
        <div className="flex flex-col gap-4">
            {imageContent}
            {textContent}
        </div>
    )
  }

  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center ${imageAlignment === 'right' ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2">
            {imageContent}
        </div>
        <div className="md:w-1/2">
            {textContent}
        </div>
    </div>
  );
};

export default ProjectItem; 