import React from 'react';
import { motion } from 'framer-motion';

const Wrapper = ({ children, className }) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span>{children}</span>;
};

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

// Map API "type" vaules to JSX tag names
export const TextAnimation = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: '200%',

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ');
  const padding = props.padding;

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    word.push('\u00A0');
  });

  const Tag = tagMap[props.type];

  return (
    <Tag
      className={`  bg-red-500 flex self-start gap-4 font-medium text-center  text-8xl text-yellow-50 pl-${padding}`}
    >
      {words.map((word, index) => (
        // Wrap each word in the Wrapper component
        <Wrapper className="" key={index}>
          {words[index].flat().map((element, index) => (
            <div className={'inline-flex '} key={index}>
              <motion.span variants={item}>{element}</motion.span>
            </div>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};
