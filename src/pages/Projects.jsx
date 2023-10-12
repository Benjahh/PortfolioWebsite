import React from 'react';
import { projects } from '../data';
import { SiGithub } from 'react-icons/si';
import { SiLinktree } from 'react-icons/si';
import ProjectCard from '../utils/components/Cards/ProjectCard';

export const ProjectPage = () => {
  return (
    <section id="projects" className="min-h-screen border-2 border-white">
      <h1> TITLE </h1>

      <div className="m-12 relative">
        <div className="border-2 border-rose-600 flex-between flex-col ">
          {projects.map(
            ({
              projectName,
              projectRepo,
              projectLink,
              projectType,
              projectDescription,
              projectImage,
              projectSkill,
              reverse,
            }) => (
              <ProjectCard
                key={projectName}
                projectLink={projectLink}
                projectImage={projectImage}
                projectRepo={projectRepo}
                projectName={projectName}
                projectType={projectType}
                projectDescription={projectDescription}
                projectSkill={projectSkill}
                reverse={reverse}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
