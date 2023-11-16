import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { element } from 'prop-types';

export const NavLinks = ({ className, link, name }) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <>
      <AnchorLink href={link} className={className}>
        <motion.div
          key={link}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="m-2 "
        >
          {name}
        </motion.div>
      </AnchorLink>
    </>
  );
};
