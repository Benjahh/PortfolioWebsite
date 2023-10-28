import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const ShrinkInView = ({ children, className }) => {
  return (
    <motion.section
      className={className}
      transition={{ duration: 1 }}
      whileInView={{ scale: 0.9 }}
    >
      {children}
    </motion.section>
  );
};
