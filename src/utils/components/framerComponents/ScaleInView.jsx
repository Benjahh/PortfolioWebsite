import { motion } from 'framer-motion';

export const ScaleInView = ({ children, className }) => {
  return (
    <section.div
      className={className}
      transition={{ duration: 1 }}
      whileInView={{ scale: 0.9 }}
    >
      {children}
    </section.div>
  );
};
