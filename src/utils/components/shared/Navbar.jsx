import React from 'react';
import { motion } from 'framer-motion';
import { HamburgerMenu } from './HamburgerMenu';
import { navbarLinks } from '../../../data';
import { NavLinks } from './NavLinks';
import ToggleComponent from './ToggleComponent';
import { Sidebar } from './Sidebar';

/* TODO: REFACTOR MORE */
export const Navbar = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const navbarVariant = {
    hidden: {
      x: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.4 },
    },
    visible: {
      x: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.3 },
    },
  };
  return (
    <nav className="fixed   top-0   bg-transparent backdrop-blur-sm z-30 w-full py-4">
      <section className=" items-center w-5/6 hidden md:flex justify-between flex-row mx-auto">
        <div className="text-accent font-bold">LA</div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navbarVariant}
          className=" flex-row gap-6 font-monsterrat font-extrabold flex-between"
        >
          {navbarLinks.map(({ link, linkName }) => (
            <NavLinks
              link={link}
              name={linkName}
              className="hover:scale-110  text-white hover:text-accent overflow-hidden text-lg"
            />
          ))}
        </motion.div>
      </section>

      <section className=" w-5/6 md:hidden  z-50 flex justify-between  mx-auto">
        <motion.div
          initial="hidden"
          className=" relative p-2"
          animate="visible"
          variants={container}
        >
          <Sidebar />
        </motion.div>
        <div className="self-end text-accent font-bold">Favicon</div>
      </section>
    </nav>
  );
};
