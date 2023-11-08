import React from 'react';

import { BsArrowUpSquare  } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className="bottom-0 h-[100px] w-full justify-between p-6 bg-black text-white flex-row flex">
      <section className={`flex-col`}>Copyright @2023 </section>
      <section className="flex-betweeen gap-4">
        
      <a href="#home" className='flex-betweeen'><BsArrowUpSquare/></a>
      </section>
    </div>
  );
};
