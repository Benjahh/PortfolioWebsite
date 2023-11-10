import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ShrinkInView = ({ children, className }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1 1', '0 1'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [1, -1.0]);

  console.log(scrollYProgress);
  return (
    <motion.section
      className={className}
      ref={ref}
      transition={{ duration: 1 }}
      whileInView={{ scale: 0.9 }}
      style={{
        margin: scaleY,
        opacity: 'unset',
      }}
    >
      {children}
    </motion.section>
  );
};
