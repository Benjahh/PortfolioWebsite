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
      <div
        id="contact"
        className="flex-between gap-10 relative  flex-row grow  "
      >
        <div className="text-white    flex-col flex gap-10 ">
          <h1 className="page__title  ">
            ¿Do you want to
            <span className="text-accent"> contact </span> Me?
          </h1>
          <div className="text-center  font-bold gap-2 text-2xl flex flex-col">
            <h1>¿Have any ideas, doubts or questions?</h1>
            <h1>¡Send me an email!</h1>
          </div>
        </div>
        <div className="grow ">
          <form
            ref={form}
            className="flex flex-col gap-8 grow text-white"
            onSubmit={sendEmail}
          >
            <input
              className="contact__input "
              placeholder="Name"
              type="text"
              name="user_name"
            />

            <input
              className="contact__input"
              placeholder="Email"
              type="email"
              name="user_email"
            />

            <textarea
              className="contact__input h-52"
              placeholder="Message"
              name="message"
            />
            <input
              className="bg-accent hover:cursor-pointer hover:bg-white hover:text-accent font-bold  p-4 rounded-md"
              type="submit"
              value="SEND"
            />
          </form>
        </div>
      </div>
    </ShrinkInView>
  );
};
