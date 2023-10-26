import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const ShrinkInView = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      transition={{ duration: 1 }}
      whileInView={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
};
