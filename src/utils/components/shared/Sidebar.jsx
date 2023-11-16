import { useState } from 'react';
import { motion } from 'framer-motion';
import { navbarLinks } from '../../../data';
import { NavLinks } from './NavLinks';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(20px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      initial={closed}
      className="flex-between flex-col "
    >
      <motion.div
        className="fixed  -top-[18px] z-50 h-screen flex-between flex-col left-[7px] w-[200px] bg-accent"
        variants={variants}
      >
        {navbarLinks.map(({ link, linkName }) => (
          <NavLinks
            link={link}
            name={linkName}
            className="hover:scale-110  text-primary font-monsterrat font-extrabold hover:text-white overflow-hidden text-lg"
          />
        ))}
      </motion.div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed  border-none  flex-col z-50 left-[46px] top-[22px]  flex-between  hover:cursor-pointer  "
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
};
