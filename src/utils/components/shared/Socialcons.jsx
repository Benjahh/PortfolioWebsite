import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

export const SocialIcons = () => {
  return (
    <section>
      <FadeInOnScroll className="text-accent fixed flex-col flex left-0 gap-4 bottom-0 m-8">
        <RiGithubFill
          className=" bg-black border-2 border-accent p-1  hover:cursor-pointer  hover:text-white rounded-full"
          size={40}
        />

        <RiLinkedinFill
          className=" bg-black border-2 border-accent p-1 hover:text-white hover:cursor-pointer rounded-full shadow-lg "
          size={40}
        />
      </FadeInOnScroll>
    </section>
  );
};
