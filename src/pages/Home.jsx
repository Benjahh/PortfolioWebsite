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
      className="flex-between flex-col md:px-80 py-10    min-h-screen"
    >
      <motion.div
        className="App"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          animate={{
            backgroundImage:
              'linear-gradient(to bottom, #ffffff, #000000 100%)',
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            repeatType: 'reverse',
          }}
          className=" text-8xl flex-col gap-2    flex font-bold "
        >
          {placeholderText.map((item, index) => (
            <TextAnimation {...item} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
