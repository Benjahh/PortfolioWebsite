import React from 'react';
import { techStack } from '../data';
import SkillCard from '../utils/components/Cards/SkillCard';

export const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen md:px-80 py-40 flex-between flex-col bg-secondary"
    >
      <title className="flex-between flex-col gap-8 mb-16  mt-2 text-white">
        <h1 className=" font-montserrat font-bold  text-3xl text-white">
          <span className="text-accent"> About </span> myself: My
          <span className="text-accent"> tech </span> stack
        </h1>
      </title>
      <div className="flex-between flex-row gap-2 ">
        <div className="flex flex-col relative  bg-primary rounded-md p-8">
          <div className="mt-6 gap-4 flex-col  flex text-left ">
            <p>
              Hi, my name is Lucas. I'm a
              <span className="font-extrabold text-secondary">
                {' '}
                Computer Engineering{' '}
              </span>
              student with a passion for
              <span className="font-extrabold"> Software Engineering </span>.
            </p>
            <p>
              I'm currently pursuing
              <span className="font-extrabold text-secondary">
                {' '}
                Computer Engineering{' '}
              </span>
              at <span className="font-extrabold text-secondary"> UA </span>
              (Universidad Americana), located in Asuncion, Paraguay.
            </p>
            <p>
              I'm a full-stack developer, specializing in the
              <span className="font-extrabold text-secondary"> MERN </span>{' '}
              stack (MongoDB, Express, React, and Node), and I'm keen on
              building high-quality, scalable web applications.
            </p>
            <p>
              My approach to application development is based on several core
              principles. I prioritize creating
              <span className="font-extrabold text-secondary">
                {' '}
                modern{' '}
              </span>{' '}
              user interfaces that are visually
              <span className="font-extrabold  text-secondary">
                {' '}
                appealing{' '}
              </span>
              and easy to use. Additionally, I am committed to ensuring that
              every application I build performs
              <span className="font-extrabold  text-secondary">
                {' '}
                optimally{' '}
              </span>
              and is
              <span className="font-extrabold  text-secondary">
                {' '}
                user-friendly
              </span>
              .
            </p>
            <p>
              I continuously improve my skills and knowledge by tackling complex
              challenges and collaborating with others to find creative
              solutions.
            </p>
          </div>
          <a
            download=""
            src=""
            className="absolute bottom-4 right-4 border p-2 "
          >
            Resume
          </a>
        </div>
        <div className="skill__container">
          {techStack.map(({ stack, stackName }) => (
            <SkillCard key={stackName} stack={stack} stackName={stackName} />
          ))}
        </div>
      </div>
    </section>
  );
};
