import { JSX } from 'react';
import { motion } from 'framer-motion';
import { createTextAnimation } from './../../../types/textAnimation';
// import { BasicButton } from '../../buttons/BasicButton';
import Button from '@mui/material/Button';
import imgBg from './../../../img/find-img-bg.jpg';
import './find.css';
import { Link } from 'react-router-dom';

const Find = (): JSX.Element => {
  const textAnimation = createTextAnimation({ y: 100 });

  return (
    <motion.section
      initial = 'hidden'
      whileInView = 'visible'
      className="find-wrapper">
      <div className="find-container big-container">
        <div className="find-gradient-bg">
          <div className="find-gradient"></div>
        </div>
        <img className="find-bg" alt="find-bg" src={imgBg} />
      </div>
      <div
        className="find-content">
        <motion.div
          variants={textAnimation}
          custom={2}
          className="title">Nourish the mind, body, and spirit.</motion.div>
        <motion.p
          variants={textAnimation}
          custom={3}
        >
          Many people find that the combination of being in a
          peaceful natural setting and engaging in activities that
          nourish the mind, body, and spirit leave them feeling
          rejuvenated and refreshed.
        </motion.p>
        <Link to='/cabins'>
          <motion.div
            variants={textAnimation}
            custom={4}
            className="btn">
            <Button
              sx={{
                backgroundColor: '#f5b963',
                color: 'black',
                width: '236px',
                height: '54px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '400',
              }}
            >{'Find available cabins'}
            </Button>
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
};

export default Find;
