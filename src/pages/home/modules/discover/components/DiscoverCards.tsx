import DiscoverCard from './DiscoverCard';
import { discoverCardList } from '../mock-data/discoverCardList';
import { ReactElement } from 'react';
import '../styles/cards.css';

export const DiscoverCards = (): ReactElement => {
  return (
    <div className="container card-container">
      {discoverCardList.map((card, index) => (
        <DiscoverCard
          key={index}
          img={card.img}
          location={card.location}
          title={card.title}
          price={card.price}
          text={card.text}
          review={card.review}
        />
      ))}
    </div>
  );
};

