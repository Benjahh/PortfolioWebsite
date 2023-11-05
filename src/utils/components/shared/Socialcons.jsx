import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const SocialIcons = () => {
  return (
    <section className=" text-black   fixed flex-col flex left-0 bottom-0 m-8">
      <FaGithubSquare
        className=" bg-accent hover:cursor-pointer hover:scale-125 hover:text-white rounded-md"
        size={40}
      />

      <div className="  self-center  h-10 bg-accent w-[2px]" />
      <FaLinkedin
        className=" bg-accent hover:text-white hover:scale-125 hover:cursor-pointer rounded-md shadow-lg "
        size={40}
      />
    </section>
  );
};
