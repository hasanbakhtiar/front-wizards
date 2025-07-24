import { useRef } from 'react';

const ContactForm = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(surnameRef.current.value);
    console.log(phoneRef.current.value);
    console.log(emailRef.current.value);
    console.log(messageRef.current.value);
  };
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5">Contact Page</h1>
        <div className="col-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                ref={nameRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                name="surname"
                type="text"
                className="form-control"
                ref={surnameRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                ref={emailRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                name="phone"
                type="tel"
                className="form-control"
                ref={phoneRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <input
                name="message"
                type="text"
                className="form-control"
                ref={messageRef}
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Send
            </button>
          </form>
    
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
