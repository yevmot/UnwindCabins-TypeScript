import { JSX } from 'react';
import ReactPlayer from 'react-player/youtube';
import Play from './../../../img/icons/play.svg';
import Details from './../../../img/bg-detail.svg';
import './videoSection.css';

const VideoSrc = 'https://youtu.be/bjlUhtXSi5w?si=tC7Zs9ONwNWb5lho';

const VideoSection = (): JSX.Element => {
  return (
    <section className="section-wrapper">
      <div className="big-container">
        <div className="container wrapper">
          <div className="video-content">
            <div className="title">
              <span className="underline">Get ready</span> to
                            unwind
            </div>
            <div className="video-desc">
              <p>
                                A cabin getaway can be a wonderful way to relax
                                and reconnect with nature. Many cabin rentals
                                are located in beautiful, secluded areas,
                                surrounded by trees and other natural beauty.
              </p>
              <p>
                                A cabin getaway can be a wonderful way to escape
                                the hustle and bustle of daily life and
                                reconnect with nature.
              </p>
            </div>
            <span className="view-all ">
                            Learn more{' '}
              <span className="greater-than">&gt;</span>
            </span>
          </div>
          <div className="video-wrapper">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
