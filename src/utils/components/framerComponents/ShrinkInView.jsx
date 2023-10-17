import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const ShrinkInView = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      transition={{ duration: 0.5 }}
      whileInView={{ margin: 80 }}
    >
      {children}
    </motion.div>
  );
};
