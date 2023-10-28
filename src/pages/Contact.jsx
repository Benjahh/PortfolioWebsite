import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ShrinkInView } from '../utils/components/framerComponents/ShrinkInView';

export const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xggxubu',
        'template_4oal3yg',
        form.current,
        'KB4tWR5hEnlfv4QSZ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ShrinkInView className="page__container">
      <div className="font-montserrat font-bold text-3xl text-white">
        <h1 className="text-center">
          ¿Do you want to
          <span className="text-accent"> contact </span> Me?
        </h1>
      </div>

      <div className="flex-between grow ">
        <form
          ref={form}
          className="flex flex-col gap-2 bg-black p-28 text-white"
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input
            className="bg-accent hover:cursor-pointer hover:bg-yellow-700 self-end p-2 rounded-md"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </ShrinkInView>
  );
};
