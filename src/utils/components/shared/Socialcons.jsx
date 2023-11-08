import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

export const SocialIcons = () => {
  return (
    <section>
      <FadeInOnScroll className="text-accent fixed flex-col flex left-8 items-center gap-4 bottom-0 ">
        
        <RiGithubFill
          className="Social__Icons"
          size={30}
        />

        <RiLinkedinFill
          className="Social__Icons"
          size={30}
        />
        
        <div className='w-1 h-12 bg-accent'/>
      </FadeInOnScroll>
    </section>
  );
};
