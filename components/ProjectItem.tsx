import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, category, tldr, description, headerImage, tags, layoutStyle, imageAlignment, slug } = project;

  const imageContent = (
    <div className="bg-custom-white rounded-2xl h-[375px] w-full flex items-center justify-center px-12">
      <Image src={headerImage} alt={title} width={1000} height={1000} className="rounded-2xl h-full" />
    </div>
  );

  const textContent = (
    <div className="flex flex-col gap-2">
      {category && <p className="text-sm font-bold text-custom-white">{category}</p>}
      <Link
        href={`/projects/${slug}`}
        className="font-bold flex flex-row items-center gap-4 group"
      >
        <h2 className="text-[48px] font-bold text-custom-white underline">{title}</h2>
        <Image src={"/images/arrow.svg"} alt={title} width={60} height={60} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>

      {tldr && <p className="text-custom-white !font-bold !text-[16px]">TL;DR — {tldr}</p>}
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
      <Link href={`/projects/${slug}`} className="block">
        <div className="flex flex-col gap-4 group">
            {imageContent}
            {textContent}
        </div>
      </Link>
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
