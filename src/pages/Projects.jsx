import React from 'react';
import { projects } from '../data';

import ProjectCard from '../utils/components/Cards/ProjectCard';

export const ProjectPage = () => {
  return (
    <section id="projects" className="page__container">
      <div className="page__title ">
        <h1>
          Some <span className="text-secondAccent"> Projects </span> i've built,
          honing my skills.
        </h1>
      </div>
      <div className=" relative mt-4">
        <div className="gap-40 p-8  flex-between flex-col ">
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
