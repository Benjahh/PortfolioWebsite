import React from 'react';
import { projects } from '../data';
import { SiGithub } from 'react-icons/si';
import { SiLinktree } from 'react-icons/si';
import ProjectCard from '../utils/components/Cards/ProjectCard';

export const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="min-h-screen  bg-secondary flex-between flex-col"
    >
      <h1 className="mt-16  font-mono font-bold  text-3xl text-secondAccent">
        Projects
      </h1>
      <p className="text-xl font-openSans text-white">
        Software i've built, utilizing the mentioned technologies.
      </p>

      <div className="m-12 relative">
        <div className="gap-60 p-8  flex-between flex-col ">
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
