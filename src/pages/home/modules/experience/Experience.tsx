import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { createTextAnimation } from '../../../../types/textAnimation';
import './styles/experience.css';

import { star } from './constants/experienceImages';
import { bgImg } from './constants/experienceImages';

const starCount = [1, 2, 3, 4, 5];
const textAnimation = createTextAnimation({ x: 100 });

export const Experience = (): ReactElement => {
  return (
    <section className="experience">
      <div className="big-container">
        <img src={bgImg} alt="bg-img" />
        <motion.div
          initial='hidden'
          whileInView='visible'
          className="exp-content">
          <motion.div
            variants={textAnimation}
            custom={1}
            className="title">A truly wonderful experience</motion.div>
          <motion.p
            variants={textAnimation}
            custom={2}
          >
            Brilliant for anyone looking to get away from the hustle and bustle
            of city life or detox from their tech for a few days. I could have
            stayed another week!
          </motion.p>
          <motion.p
            variants={textAnimation}
            custom={3}
          >
            'They really have thought about everything here down to the finest
            details.'
          </motion.p>
          <motion.div
            variants={textAnimation}
            custom={4}
            className="review-stars">
            <div className="stars">
              {starCount.map((_, index) => (
                <div className="star" key={index}>
                  <img src={star} alt="star" />
                </div>
              ))}
            </div>
            <span className="points">01 Jan 2023</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
