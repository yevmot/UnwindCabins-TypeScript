import BgImg from './../../../img/pre-footer-bg.jpg';
import Shadow from './../../../img/pre-footer-shadow.png';
// import { BasicButton } from '../../buttons/BasicButton';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import './preFooter.css';
import { JSX } from 'react';
import { createTextAnimation } from './../../../types/textAnimation';

const textAnimation = createTextAnimation({ y: -100 });

const PreFooter = (): JSX.Element => {
  return (
    <section className='pre-footer-wrapper'>
      <div className="big-container">
        <div className="pre-footer-container">
          <img src={BgImg} alt="BgImg" className="bg-footer" />
          <motion.div
            initial = 'hidden'
            whileInView= 'visible'
            className="pre-footer-content">
            <motion.div
              variants={textAnimation}
              custom={2}
              className="title">Escape from endless Zoom calls</motion.div>
            <motion.p
              variants={textAnimation}
              custom={3}
            >
                        Discover the wonders of spending time offline and away
                        from the office with our 3 day weekend getaway cabin
                        retreats.
            </motion.p>
            <motion.a
              variants={textAnimation}
              custom={4}
              href='#hero-title'>
              <Button
                sx={{
                  bgcolor: '#D4EEEC',
                  color: '#173333',
                  width: '205px',
                  height: '40px',
                  fontSize: '14px',
                  fontWeight: '400',
                }}
              >
            Find the perfect getaway
              </Button>
            </motion.a>
          </motion.div>
          <img className="shadow" src={Shadow} alt="shadow" />
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
