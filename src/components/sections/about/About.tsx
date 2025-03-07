import arrow from './../../../img/icons/arrow-right-circle.svg';
// import { BasicButton } from '../../buttons/BasicButton';
import Button from '@mui/material/Button';
import { JSX } from 'react';
import { motion } from 'framer-motion';
import { createTextAnimation } from './../../../types/textAnimation';
import './about.css';

import { aboutQuestions } from './../../../data/aboutQuestions';
import { Link } from 'react-router-dom';

const About = (): JSX.Element => {
  const textAnimation = createTextAnimation({ x: -100 });

  const Arrow = (): JSX.Element => {
    return <>
      <img src={arrow} alt='arrow'/>
    </>;
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      className="about-wrapper">
      <motion.div
        variants={textAnimation}
        custom={2}
        className="container">
        <div className="about-title">
          <h1>Frequently asked questions</h1>
        </div>

        {aboutQuestions.map((question, index) => (
          <div className="about-info" key={index}>
            <motion.div
              variants={textAnimation}
              custom={3}
              className="desc">
              <h1>{index + 1} {question.title}</h1>
              <ul>
                {question.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                  >{item}</li>
                ))}
              </ul>
            </motion.div>
            <Link to={`/about#question-${index + 1}`}>
              <motion.div
                variants={textAnimation}
                custom={4}
                className="btn">
                <Button
                  sx={{ fontWeight: '500', fontSize: '14px' }}
                >
                  {question.title}
                  <Arrow />
                </Button>
              </motion.div>
            </Link>
          </div>
        ))}

        <div className="live-chat">
          <h1>Still have a question?</h1>
          <p>
                        If you still have questions contact a member of the team
                        on <button type="button">live chat</button> and we’d be
                        more than happy to help.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
