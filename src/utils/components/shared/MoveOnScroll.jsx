import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../customHooks/userInstersectionObserver';
import {
  useAnimation,
  useScroll,
  motion,
  useInView,
  inView,
  useTransform,
} from 'framer-motion';
export const MoveOnScroll = ({ children, className }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.8 0.8', '0.4 0.2'],
  });
  console.log(scrollYProgress);

  const translateY = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <motion.div
      className={className}
      style={{
        translateY: translateY,
        opacity: 'unset',
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
