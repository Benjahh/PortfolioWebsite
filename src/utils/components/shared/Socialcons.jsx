import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

export const SocialIcons = () => {
  return (
    <section>
      <FadeInOnScroll className=" fixed flex-col items-center flex left-8 gap-4 bottom-0 ">
        <RiGithubFill className="social__icon" size={35} />

        <RiLinkedinFill className="social__icon" size={35} />
        <div className="h-16 w-1 bg-white" />
      </FadeInOnScroll>
    </section>
  );
};
