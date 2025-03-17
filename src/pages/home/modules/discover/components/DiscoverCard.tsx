import { ReactElement } from 'react';
import { discoverCardsInterface } from '../types/discoverCardsInterface';
import { renderStars } from './RenderStars';
import { Link } from 'react-router-dom';

export const DiscoverCard = (
  {
    id,
    img,
    location,
    title,
    price,
    text,
    review,
    rating,
  }:discoverCardsInterface): ReactElement => {
  return (
    <div className="card" id={String(id)}>
      <Link to={`/cabins/${id}`} className="card-link">
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
              {renderStars(rating)}
            </div>
            <span>
              <span id="reviewCount">{review}</span> reviews
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
