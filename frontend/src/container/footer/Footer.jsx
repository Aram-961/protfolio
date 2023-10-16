import "./Footer.scss";
import images from "../../constants/images";
import { AppWrap, AnimateWrap } from "../../wrapper";
import { client } from "../../client";
import { useState } from "react";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: email,
      message: message,
    };

    // using sanity client

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee and chat wit me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:aramistamboulian961@gmail.com' className='p-text'>
            aramistamboulian961@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+96171455206' className='p-text'>
            +961 71 455 206
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='name'
              value={name}
              onChange={handleChangeInput}
              name='name'
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='email'
              value={email}
              onChange={handleChangeInput}
              name='email'
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='message ...'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? "Sending.." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for your message !!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  AnimateWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
