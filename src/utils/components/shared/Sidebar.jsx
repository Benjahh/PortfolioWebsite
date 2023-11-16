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
      clipPath: 'circle(30px at 50px 50px)',
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
      className="flex-between p-2 bg-white flex-col"
    >
      <motion.div
        className="fixed bottom-0 top-0 z-50 left-0 w-[200px] bg-accent"
        variants={variants}
      >
        {navbarLinks.map(({ link, linkName }) => (
          <NavLinks
            link={link}
            name={linkName}
            className="text-white w-full h-full border-2 bg-green-500 m-2 flex-col"
          />
        ))}
      </motion.div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed w-[50px] h-[50px] border-none flex-col z-50 flex-between  top-[25px] hover:cursor-pointer left-[25px] bg-transparent rounded-[50%]"
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
