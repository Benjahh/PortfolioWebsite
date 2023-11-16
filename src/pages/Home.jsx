import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimation } from '../utils/components/framerComponents/TextAnimation';

export const HomePage = () => {
  const placeholderText = [
    { text: 'LUCAS', padding: '0', color: 'accent' },
    { text: 'AGÜERO', padding: '5rem', color: 'white' },
    { text: 'FULL-STACK', padding: '10rem', color: 'accent' },
    { text: 'WEB DEVELOPER', padding: '15rem', color: 'white' },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <section
      id="home"
      className="flex-between flex-col md:px-80 py-1 font-bebasNeue bg-primary min-h-screen"
    >
      <motion.div
        className="App"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div className=" text-[100px] flex flex-col tracking-wider font-bold ">
          {placeholderText.map((item, index) => (
            <TextAnimation {...item} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
