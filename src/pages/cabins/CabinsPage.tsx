import { DiscoverCard } from '../home/modules/discover/components/DiscoverCard';
import { discoverCardList } from '../home//modules/discover/mock-data/discoverCardList';
import { ReactElement } from 'react';
import '../home/modules/discover/styles/cards.css';
import './cabinsPageStyle.css';

export const CabinsPage = (): ReactElement => {
  return (
    <section className='container'>
      <h1 className='mainTitle'>Find Your Perfect Cabin for a Getaway</h1>
      <div className="container card-container">
        {discoverCardList.map((card) => (
          <DiscoverCard
            rating={card.rating}
            id={card.id}
            img={card.img}
            location={card.location}
            title={card.title}
            price={card.price}
            text={card.text}
            review={card.review}
          />
        ))}
      </div>
    </section>
  );
};

