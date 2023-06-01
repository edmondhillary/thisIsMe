import React from 'react';
import Header from '../Header/Header';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// import emailjs from 'emailjs-com';

const ContactForm = () => {
const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <>
 
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" name="firstName" placeholder="First name" />
            <input type="text" name="lastName" placeholder="Last name" />
          </div>
          <div className="input-container">
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="phoneNumber" placeholder="Phone number" />
          </div>
          <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
          <button className="btn btn-primary" type="submit">Submit now</button>
        </form>
      </div>
    </section>
    </>
  );
};

export default ContactForm;
