import React from 'react';
import { ShrinkInView } from '../utils/components/framerComponents/ShrinkInView';

export const ContactPage = () => {
  const HandleSubmit = () => {};
  return (
    <section className="bg-accent">
      <ShrinkInView className="md:px-80 bg-secondary min-h-screen py-10 flex items-center flex-col ">
        <div className="font-montserrat bg-black font-bold  text-3xl text-white">
          <h1>
            ¿Do you want to <span className="text-accent"> contact </span> Me?
          </h1>
        </div>
        <div className="bg-green-500">
          <form action="Submit"></form>
        </div>
      </ShrinkInView>
    </section>
  );
};
