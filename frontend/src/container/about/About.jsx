import { useState, useEffect } from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "web dev",
      description: "Im a creative web developer",
      imgUrl: images.about01,
    },
    {
      title: "web design",
      description: "Im a creative web developer",
      imgUrl: images.about02,
    },
    {
      title: "UI UX",
      description: "Im a creative web developer",
      imgUrl: images.about03,
    },
  ];
  return (
    <>
      <h2 className='head-text'>I know That <span> Good Development </span><br /> means <span> Good Business </span>
        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={about.title + index}
              className='app__profile-item'>
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className='p-text' style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </h2>
    </>
  );
};

export default About;
