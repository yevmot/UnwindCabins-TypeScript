import DiscoverCard from './DiscoverCard';
import discoverCardList from '../../../../../data/discoverCardList';
import { JSX } from 'react';
import './cards.css';

const Cards = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-container">
        {discoverCardList.map((card, index) => {
          return (
            <DiscoverCard
              key={index}
              img={card.img}
              location={card.location}
              title={card.title}
              price={card.price}
              text={card.text}
              review={card.review}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
