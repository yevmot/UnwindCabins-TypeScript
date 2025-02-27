import { JSX } from 'react';
import Star from './../../../../img/icons/star.svg';
import BgImg from './../../../../img/exp-igm.jpg';
import './experience.css';

const Experience = (): JSX.Element => {
  return (
    <section className="big-container exp-container">
      {/* <div className="exp-container"> */}
      <img src={BgImg} alt="bg-img" />
      <div className="exp-content">
        <div className="title">A truly wonderful experience</div>
        <p>
            Brilliant for anyone looking to get away from the hustle and bustle
            of city life or detox from their tech for a few days. I could have
            stayed another week!
        </p>
        <p>
            'They really have thought about everything here down to the finest
            details.'
        </p>
        <div className="review-stars">
          <div className="stars">
            <div className="star">
              <img src={Star} alt="star" />
            </div>
            <div className="star">
              <img src={Star} alt="star" />
            </div>
            <div className="star">
              <img src={Star} alt="star" />
            </div>
            <div className="star">
              <img src={Star} alt="star" />
            </div>
            <div className="star">
              <img src={Star} alt="star" />
            </div>
          </div>
          <span className="points">01 Jan 2023</span>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Experience;
