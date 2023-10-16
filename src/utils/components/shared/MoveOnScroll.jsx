import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../customHooks/userInstersectionObserver';
import {
  useAnimation,
  useScroll,
  motion,
  useInView,
  inView,
} from 'framer-motion';
export const MoveOnScroll = ({ children, className }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  const MoveOnVariant = {
    initial: { translateY: -50 },
    final: { translateY: 50 },
  };

  return (
    <motion.div
      variants={MoveOnVariant}
      animate={isInView ? 'initial' : 'final'}
      className={className}
      ref={ref}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
