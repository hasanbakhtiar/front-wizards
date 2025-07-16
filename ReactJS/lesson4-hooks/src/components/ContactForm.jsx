import { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    // setTimeout(() => {
      Swal.fire({
        title: 'Welcome to my web app',
        icon: 'info',
      });
    // }, 2000);
  },[]);

  const formSubmited = (e) => {
    e.preventDefault();
    if (!name && !surname && !email && !phone && !message) {
      Swal.fire({
        title: 'Please, fill inputs',
        icon: 'warning',
      });
    } else {
      emailjs
        .sendForm('service_a0zlmlh', 'template_djhmafn', formRef.current, {
          publicKey: 'cVBf7nQwR9JgBlZoL',
        })
        .then(
          () => {
            Swal.fire({
              title: 'Your message send successfully',
              icon: 'success',
            });

            console.log('SUCCESS!');
          },
          (error) => {
            Swal.fire({
              title: 'Something is wrong!',
              icon: 'error',
            });

            console.log('FAILED...', error.text);
          }
        );
    }
  };
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5">Contact Page</h1>
        <div className="col-5">
          <form ref={formRef} onSubmit={formSubmited}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                name="surname"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                name="phone"
                type="tel"
                className="form-control"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <input
                name="message"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Send
            </button>
          </form>
          <ul className="list-group mt-5">
            <li className="list-group-item">Name:{name}</li>
            <li className="list-group-item">Surname:{surname}</li>
            <li className="list-group-item">Email:{email} </li>
            <li className="list-group-item">Phone:{phone}</li>
            <li className="list-group-item">Message:{message}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
