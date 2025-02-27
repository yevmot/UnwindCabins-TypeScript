import { JSX } from 'react';
import star from './../../../img/icons/star.svg';
import bgImg from './../../../img/exp-igm.jpg';
import './experience.css';

const Experience = (): JSX.Element => {
  const starCount = [1, 2, 3, 4, 5];

  return (
    <section className="experience">
      <div className="big-container">
        <img src={bgImg} alt="bg-img" />
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
              {starCount.map((_, index) => (
                <div className="star" key={index}>
                  <img src={star} alt="star" />
                </div>
              ))}
            </div>
            <span className="points">01 Jan 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
