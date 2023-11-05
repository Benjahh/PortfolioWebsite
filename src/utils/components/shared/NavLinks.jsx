import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { element } from 'prop-types';

export const NavLinks = ({ className, link, name }) => {
  const navbarVariant = {
    hidden: {
      y: '300%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.4 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.3 },
    },
  };
  return (
    <>
      <AnchorLink href={link} className={className}>
        <motion.div
          initial="hidden"
          className="overflow-hidden  flex-between "
          animate="visible"
          variants={navbarVariant}
          key={link}
        >
          {name}
        </motion.div>
      </AnchorLink>
    </>
  );
};
