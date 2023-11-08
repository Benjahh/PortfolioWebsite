import React from 'react';
import { motion } from 'framer-motion';

export const TextAnimation = (props) => {
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.4 },
    },
    visible: {
      y: 0,

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.3 },
    },
  };

  const splitWords = props.text.split(' ');

  const padding = props.padding;

  const color = props.color;

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  words.map((word) => {
    return word.push('\u00A0');
  });

  return (
    <div className="flex flex-row"
    style={{paddingLeft: `${padding}rem` }}>
      {words.map((word, index) => {
        return (
          <div className="flex" key={index}>
            {words[index].flat().map((element, index) => (
              <motion.span
                className={`text-${color} block overflow-hidden `}
                key={index}
                transition={{
                  staggerChildren: 4,
                }}
              >
                <motion.div
                  variants={item}
                  className={`block bg-clip-text text-${color}  `}
                >
                  {element}
                </motion.div>
              </motion.span>
            ))}
          </div>
        );
      })}
      {/* {} */}
    </div>
  );
};
