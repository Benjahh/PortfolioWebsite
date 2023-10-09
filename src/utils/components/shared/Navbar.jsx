import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { flexBetweeen } from '../../../data';
import { NavLinks } from './NavLinks';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-[0.5px] border-secondary backdrop-blur-sm z-30 w-full py-6">
      <section className=" items-center w-5/6 hidden md:flex justify-between flex-row mx-auto">
        <div>Favicon</div>
        <div className=" flex-row gap-6 text-accent font-montserrat flex-between">
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
