import React from 'react';
import { ShrinkInView } from '../utils/components/framerComponents/ShrinkInView';

export const ContactPage = () => {
  const HandleSubmit = () => {};
  return (
    <section className="bg-accent">
      <ShrinkInView className="page__container">
        <div className="font-montserrat font-bold text-3xl text-white">
          <h1 className="text-center">
            ¿Do you want to
            <span className="text-accent"> contact </span> Me?
          </h1>
        </div>
        <div className="bg-green-500">
          <form action="Submit"></form>
        </div>
      </ShrinkInView>
    </section>
  );
};
