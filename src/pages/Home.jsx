import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimation } from '../utils/components/framerComponents/TextAnimation';

export const HomePage = () => {
  const placeholderText = [
    { type: 'heading1', text: 'LUCAS', padding: '0' },
    { type: 'heading1', text: 'AGÜERO', padding: '20' },
    { type: 'heading1', text: 'FULL-STACK', padding: '40' },
    { type: 'heading1', text: 'WEB DEVELOPER', padding: '60' },
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
      className="flex-between flex-col md:px-80 py-10 bg-black  min-h-screen"
    >
      <motion.div
        className="App"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="">
          {placeholderText.map((item, index) => (
            <TextAnimation {...item} key={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
