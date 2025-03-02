import { JSX } from 'react';
import { motion } from 'framer-motion';
import { createTextAnimation } from './../../../types/textAnimation';
import ReactPlayer from 'react-player/youtube';
import Play from './../../../img/icons/play.svg';
import Details from './../../../img/bg-detail.svg';
import './videoSection.css';

const textAnimation = createTextAnimation({ x: -100 });

const VideoSrc = 'https://youtu.be/bjlUhtXSi5w?si=tC7Zs9ONwNWb5lho';

const VideoSection = (): JSX.Element => {
  return (
    <section className="section-wrapper">
      <div className="big-container">
        <div className="container wrapper">
          <motion.div
            initial='hidden'
            whileInView='visible'
            className="video-content">
            <motion.div
              variants={textAnimation}
              custom={2}
              className="title">
              <span className="underline">Get ready</span> to
                            unwind
            </motion.div>
            <div className="video-desc">
              <motion.p
                variants={textAnimation}
                custom={3}
              >
                                A cabin getaway can be a wonderful way to relax
                                and reconnect with nature. Many cabin rentals
                                are located in beautiful, secluded areas,
                                surrounded by trees and other natural beauty.
              </motion.p>
              <motion.p
                variants={textAnimation}
                custom={4}
              >
                                A cabin getaway can be a wonderful way to escape
                                the hustle and bustle of daily life and
                                reconnect with nature.
              </motion.p>
            </div>
            <motion.span
              variants={textAnimation}
              custom={5}
              className="view-all ">
                            Learn more{' '}
              <span className="greater-than">&gt;</span>
            </motion.span>
          </motion.div>
          <motion.div
            initial = 'hidden'
            whileInView = 'visible'
            className="video-wrapper">
            <div className="video">
              <ReactPlayer
                light
                url={VideoSrc}
                playIcon={<img src={Play} alt="Play" />}
                height="375px"
                width="615px"
                playing
              />
            </div>
            <div className="details">
              <img src={Details} alt="details" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
