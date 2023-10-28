import React from 'react';
import { projects } from '../data';
import { SiGithub } from 'react-icons/si';
import { SiLinktree } from 'react-icons/si';
import ProjectCard from '../utils/components/Cards/ProjectCard';
import { FadeInOnScroll } from '../utils/components/framerComponents/FadeInOnScroll';

export const ProjectPage = () => {
  return (
    <section id="projects" className="page__container">
      <title className="flex-between flex-col gap-8 mb-16  mt-28">
        <h1 className=" font-montserrat font-bold text-center  text-3xl text-white">
          Some <span className="text-accent"> Projects </span> i've built,
          honing my skills.
        </h1>
      </title>
      <div className=" relative">
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
