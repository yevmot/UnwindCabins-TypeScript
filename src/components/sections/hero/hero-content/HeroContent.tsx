import { JSX } from 'react';
import { motion } from 'framer-motion';
import { createTextAnimation } from './../../../../types/textAnimation';

import Review1 from './../../../../img/revies/client-1.jpg';
import Review2 from './../../../../img/revies/client-2.jpg';
import Review3 from './../../../../img/revies/client-3.jpg';
import Review4 from './../../../../img/revies/client-4.jpg';
import Review5 from './../../../../img/revies/client-5.jpg';
import star from './../../../../img/icons/star.svg';
import Truspilot from './../../../../img/icons/trustpilot.svg';

import './heroContent.css';

const textAnimation = createTextAnimation({ x: -100 });

export default function HeroContent(): JSX.Element {
  const reviewImages = [Review1, Review2, Review3, Review4, Review5];
  const starCount = [1, 2, 3, 4, 5];

  return (
    <motion.div className="hero-content"
      initial = 'hidden'
      whileInView = 'visible'
    >
      <motion.h1
        variants={textAnimation}
        custom={1}
        className="title" id='hero-title'>
                Leave the office behind and{' '}
        <span className="highlight">unwind</span>
      </motion.h1>
      <motion.p
        custom={2}
        variants={textAnimation}
        className="hero-text"
      >
                Welcome to our cozy cabin nestled in the heart of the mountains!
                Our cabin is the perfect getaway for those seeking peace and
                relaxation in a natural setting.
      </motion.p>
      <motion.div
        custom={3}
        variants={textAnimation}
        className="hero-reviews">
        <div className="review-imgs">
          <div className="review-imgs">
            {reviewImages.map((image, index) => (
              <div key={index} className={`review-img review-${index + 1}`}>
                <img src={image} alt={`review-img-${index + 1}`} />
              </div>
            ))}
          </div>

        </div>
        <div className="review-stars">
          <img
            src={Truspilot}
            alt="Truspilot"
            className="truspilot"
          />
          <div className="stars">
            {starCount.map((_, index) => (
              <div className="star" key={index}>
                <img src={star} alt="star" />
              </div>
            ))}
          </div>
          <span className="points">4.5 / 5</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
