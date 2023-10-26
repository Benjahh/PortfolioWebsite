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
      <div className="flex-row  flex gap-2  ">
        <div className="bg-primary rounded-md p-8">
          <div className="gap-8 flex-col   text-white flex text-left ">
            <p>
              Hi, my name is Lucas. I'm a
              <span className="font-extrabold text-white">
                {' '}
                Computer Engineering{' '}
              </span>
              student with a passion for
              <span className="font-extrabold"> Software Engineering </span>.
            </p>
            <p>
              I'm currently pursuing
              <span className="font-extrabold text-white">
                {' '}
                Computer Engineering{' '}
              </span>
              at <span className="font-extrabold text-white"> UA </span>
              (Universidad Americana), located in Asuncion, Paraguay.
            </p>
            <p>
              I'm a full-stack developer, specializing in the
              <span className="font-extrabold text-white"> MERN </span> stack
              (MongoDB, Express, React, and Node), and I'm keen on building
              high-quality, scalable web applications.
            </p>
            <p>
              My approach to application development is based on several core
              principles. I prioritize creating
              <span className="font-extrabold text-white"> modern </span> user
              interfaces that are visually
              <span className="font-extrabold  text-white"> appealing </span>
              and easy to use. Additionally, I am committed to ensuring that
              every application I build performs
              <span className="font-extrabold  text-white"> optimally </span>
              and is
              <span className="font-extrabold  text-white"> user-friendly</span>
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
            className=" hidden absolute bottom-4 right-4 border p-2 "
          >
            Resume
          </a>
        </div>
        <div className="skill__container">
          {techStack.map(({ stack, stackName, id }) => (
            <SkillCard key={id} stack={stack} stackName={stackName}>
              {console.log(techStack)}
            </SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
};
