/* eslint-disable react-refresh/only-export-components */
import "./Testimonial.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";

import { AnimateWrap, AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Testimonial = () => {
  const [brands, setBrand] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // Fetching
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrand(data);
    });
  }, []);

  const test = testimonials[currentIndex];
  return (
    <div>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imgurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='bold-text'>{test.company}</h5>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }>
              <HiChevronDoubleLeft />
            </div>

            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }>
              <HiChevronDoubleRight />
            </div>
          </div>
        </>
      )}
      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}>
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  AnimateWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
