import React from 'react';
import projectsData from '../data/projects.json';
import { Project } from '../types';
import ProjectItem from './ProjectItem';

const projects = projectsData as Project[];

const Projects = () => {
  const rowProjects = projects.filter(p => p.layoutStyle === 'row');
  const colProjects = projects.filter(p => p.layoutStyle === 'col');

  return (
    <main className="bg-[#FF4B3A] h-screen p-8 md:p-12 animate-fadeIn opacity-0 overflow-y-scroll">
      <h1 className="lg:text-[128px] md:text-[96px] sm:text-[64px] text-[64px] font-bold text-custom-white mb-12">Projects</h1>
      
      <div className="flex flex-col gap-24">
        {rowProjects.map((project: Project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-24">
        {colProjects.map((project: Project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
