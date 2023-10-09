import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { flexBetweeen } from '../../../data';
import { NavLinks } from './NavLinks';

/* TODO: REFACTOR MORE */
export const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-[0.5px] border-secondary backdrop-blur-sm z-30 w-full py-4">
      <section className=" items-center w-5/6 hidden md:flex justify-between flex-row mx-auto">
        <div>Favicon</div>
        <div className=" flex-row gap-6 text-accent font-monsterrat font-bold flex-between">
          <NavLinks className="hover:scale-110" />
        </div>
      </section>

      <section className=" bg-blue-200 w-5/6 md:hidden justify-between flex flex-row mx-auto">
        <div>Favicon</div>
        <HamburgerMenu />
      </section>
    </nav>
  );
};
