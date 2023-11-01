import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';

export const HomePage = () => {
  return (
    <section
      id="home"
      className="flex-between flex-col md:px-80 py-10 bg-black  min-h-screen"
    >
      <div className="flex-col    flex-between font-medium text-center w-full items-start     text-accent  text-8xl ">
        <div className="pl-20  ">
          <h1>LUCAS</h1>
        </div>
        <div className="text-white pl-40    ">
          <h1>AGÜERO</h1>
        </div>
        <div className="pl-60 ">
          <h1>FULL-STACK</h1>
        </div>
        <div className="text-white pl-80 ">
          <h1>WEB DEVELOPER</h1>
        </div>
      </div>
    </section>
  );
};
