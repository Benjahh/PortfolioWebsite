import React from 'react';
import { motion } from 'framer-motion';

const CustomButtonLink = ({ className, href, buttonText, children }) => {
  return (
    <motion.div
      whileHover={{ y: 6 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <a href={href} className={`project__button  ${className}`}>
        {buttonText} {children}
      </a>
    </motion.div>
  );
};

export default CustomButtonLink;
