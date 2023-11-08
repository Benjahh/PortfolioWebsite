import { useRef, useEffect, useState } from 'react';

import { useScroll, motion, useTransform } from 'framer-motion';
export const MoveOnScroll = ({ children, className }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.2 0.8', '0.4 0.2'],
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
