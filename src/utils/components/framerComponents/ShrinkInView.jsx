import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ShrinkInView = ({ children, className }) => {
  const ref = useRef()
  const { scrollYProgress, } = useScroll({
    target: ref,
    offset: ['1 1', '0 1'],
  })


  const scaleY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  console.log(scrollYProgress);
  return (
    <motion.section
      className={className}
      ref={ref}
      transition={{ duration: 1 }}
      style={{
       padding: scaleY,
        opacity: "unset"
      }}
    >
      {children}
      
    </motion.section>
  );
};
