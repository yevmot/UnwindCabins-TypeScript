import InspirationCard from './InspirationCard';
import InspirationCardList from './../../../../data/InspirationCardList';
import { JSX } from 'react';

const InspirationCards = (): JSX.Element => {
  return (
    <div className="container card-container">
      {InspirationCardList.map((card, index) => {
        return (
          <InspirationCard
            key={index}
            img={card.img}
            slogan={card.slogan}
            title={card.title}
            text={card.text}
          />
        );
      })}
    </div>
  );
};

export default InspirationCards;
