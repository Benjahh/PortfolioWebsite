import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '../../customHooks/userInstersectionObserver';

export const FadeInOnScroll = ({ children, className }) => {
  const ref = useRef();
  const controls = useAnimation();
  const threshold = 1;
  useIntersectionObserver(ref, controls, threshold);

  const fadeInVariants = {
    initial: { opacity: 0 },
    final: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInVariants}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInOnScroll = ({ children, className }) => {
  const ref = useRef();
  const controls = useAnimation();
  const threshold = 0.1;
  useIntersectionObserver(ref, controls, threshold);

  const SlideInVariants = {
    initial: {
      x: 400,
      opacity: 0,
    },
    final: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={SlideInVariants}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
