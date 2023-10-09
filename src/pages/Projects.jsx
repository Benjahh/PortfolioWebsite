import React from 'react';
import { projects } from '../data';
import { SiGithub } from 'react-icons/si';
import { SiLinktree } from 'react-icons/si';
import ProjectCard from '../utils/components/Cards/ProjectCard';

export const ProjectPage = () => {
  return (
    <section id="projects" className="min-h-screen border-2 border-white">
      <h1> TITLE </h1>

      <div className="border-2 border-rose-600 w-5/6 h-auto grid grid-cols-2 gap-8 ">
        {projects.map(
          ({
            projectName,
            projectRepo,
            projectLink,
            projectDescription,
            projectImage,
            projectSkill,
          }) => (
            <ProjectCard
              key={projectName}
              projectLink={projectLink}
              projectImage={projectImage}
              projectRepo={projectRepo}
              projectName={projectName}
              projectDescription={projectDescription}
              projectSkill={projectSkill}
            />
          )
        )}
      </div>
    </section>
  );
};
