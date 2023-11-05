import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimation } from '../utils/components/framerComponents/TextAnimation';

export const HomePage = () => {
  const placeholderText = [
    { type: 'heading1', text: 'LUCAS', padding: '0', color: 'accent' },
    { type: 'heading1', text: 'AGÜERO', padding: '20', color: 'white' },
    { type: 'heading1', text: 'FULL-STACK', padding: '60', color: 'accent' },
    {
      type: 'heading1',
      text: 'WEB DEVELOPER',
      padding: '80',
      color: 'white',
    },
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
      className="flex-between flex-col md:px-80 py-1 bg-black min-h-screen"
    >
      <motion.div
        className="App"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div className=" text-8xl flex-col flex gap-4  font-bold ">
          {placeholderText.map((item, index) => (
            <TextAnimation {...item} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
