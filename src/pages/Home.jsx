import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';

export const HomePage = () => {
  return (
    <section id="home" className="flex-between min-h-screen">
      <div className="m-12 flex-between flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="font-palanquin">
            Hi, Im <span className="text-accent"> Something Something.</span>
          </h1>
          <p className=" font-poppins">
            <span className="text-primary">Full-Stack </span> software developer
          </p>
        </div>

        <div className="border-2 right-0 bottom-0 flex-row flex gap-4 text-yellow-500">
          <a>
            <SiGithub size="20" />
          </a>
          <a>
            <SiLinkedin size="20" />
          </a>
        </div>
      </div>
    </section>
  );
};
