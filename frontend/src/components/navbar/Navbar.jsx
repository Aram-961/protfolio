import {motion} from 'framer-motion'
import image from "../../constants/images";
import { CgMenu } from "react-icons/cg";
import { HiX } from "react-icons/hi";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // BEM CSS ClassName
    // Desktop Menu
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className='app__navbar-text'>A</h1>
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "contact", "skills"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className='app__navbar-menu'>
        <CgMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeIn" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul className='app__navbar-links'>
              {["home", "about", "work", "contact", "skills"].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
