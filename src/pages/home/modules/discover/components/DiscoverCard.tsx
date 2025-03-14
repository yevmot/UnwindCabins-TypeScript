import { JSX } from 'react';
import { discoverCardsInterface } from '../types/discoverCardsInterface';

const FullStar = '/img/cards/full-star.svg';
const CleanStar = '/img/cards/clean-star.svg';

export const DiscoverCard = ({ img, location, title, price, text, review }:discoverCardsInterface): JSX.Element => {
  return (
    <div className="card">
      <img src={img} alt="card-img" className="card-img" />
      <div className="card-desc">
        <span className="loc">{location}</span>
        <div className="card-title">
          <span>{title}</span>
          <span className="price">
            {price}
            <span className="superscript">pp</span>
          </span>
        </div>
        <p>{text}</p>
        <div className="card-review">
          <div className="stars">
            <img src={FullStar} alt="star-img" />
            <img src={FullStar} alt="star-img" />
            <img src={FullStar} alt="star-img" />
            <img src={FullStar} alt="star-img" />
            <img src={CleanStar} alt="clean-star-img" />
          </div>
          <span>
            <span id="reviewCount">{review}</span> reviews
          </span>
        </div>
      </div>
    </div>
  );
};
