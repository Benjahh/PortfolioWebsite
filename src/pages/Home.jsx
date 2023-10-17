import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';

export const HomePage = () => {
  return (
    <section
      id="home"
      className="flex-between bg-gray-200 text-white min-h-screen"
    >
      <div className="m-12 flex-between text-4xl flex-col">
        <div className="flex-between flex-col gap-4">
          <h1 className="font-palanquin">
            Hello, I'm <span className=""> Lucas Agüero.</span>
          </h1>
          <p className=" font-poppins">
            I'm a <span className=""> Full-Stack </span> web developer.
          </p>
        </div>
      </div>
    </section>
  );
};
