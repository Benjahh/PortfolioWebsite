import { motion } from 'framer-motion';

export const ShrinkInView = ({ children, className }) => {
  return (
    <motion.section
      className={className}
      transition={{ duration: 1 }}
      whileInView={{ scale: 0.95 }}
    >
      {children}
    </motion.section>
  );
};
