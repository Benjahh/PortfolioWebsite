import React from 'react';
import { flexBetweeen } from '@/data';
import { SlideInOnScroll } from '../utils/components/shared/FadeInOnScroll';
export const AboutPage = () => {
  return (
    <div id="about" className="min-h-screen border border-red-400">
      <div className="">
        <section className="first-letter:">
          <h1 className="">ABOUT ME</h1>
          <div className="">
            <p>
              Hi, my name is Lucas. I'm a
              <span className="font-extrabold text-white">
                Computer Engineering
              </span>
              student with a passion for
              <span className="font-extrabold font-white">
                Software Engineering
              </span>
              .
            </p>
            <p>
              I'm currently pursuing
              <span className="font-extrabold text-white">
                Computer Engineering
              </span>
              at <span className="font-extrabold text-white">UA </span>
              (Universidad Americana), located in Asuncion, Paraguay.
            </p>
            <p>
              I'm a full-stack developer, specializing in the
              <span className="font-extrabold text-white">MERN</span> stack
              (MongoDB, Express, React, and Node), and I'm keen on building
              high-quality, scalable web applications.
            </p>
            <p>
              My approach to application development is based on several core
              principles. I prioritize creating
              <span className="font-extrabold text-white">modern</span> user
              interfaces that are visually
              <span className="font-extrabold  text-white">appealing</span> and
              easy to use. Additionally, I am committed to ensuring that every
              application I build performs
              <span className="font-extrabold  text-white">optimally </span>and
              is
              <span className="font-extrabold  text-white">user-friendly</span>.
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
            className={`${flexBetweeen} hover:text-white hover:cursor-pointer self-end flex-row rounded-2xl border-[2px] border-white p-2 bg-dimPrimaryColor text-white`}
          >
            Resume
          </a>
        </section>

        <section className="flex flex-col gap-2">
          <SlideInOnScroll className="bg-dimPrimaryColor p-6 rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta
            ipsa neque. Rerum dicta eaque eius assumenda. Itaque voluptatum
            commodi dignissimos alias nemo consequuntur quis ipsum cupiditate!
            Totam, quia aliquam.
          </SlideInOnScroll>
          <SlideInOnScroll className="bg-dimPrimaryColor p-6 rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta
            ipsa neque. Rerum dicta eaque eius assumenda. Itaque voluptatum
            commodi dignissimos alias nemo consequuntur quis ipsum cupiditate!
            Totam, quia aliquam.
          </SlideInOnScroll>
          <SlideInOnScroll className="bg-dimPrimaryColor p-6 rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta
            ipsa neque. Rerum dicta eaque eius assumenda. Itaque voluptatum
            commodi dignissimos alias nemo consequuntur quis ipsum cupiditate!
            Totam, quia aliquam.
          </SlideInOnScroll>
        </section>
      </div>
    </div>
  );
};
