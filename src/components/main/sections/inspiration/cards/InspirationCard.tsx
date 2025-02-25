import { JSX } from 'react';
import { IInspirationCards } from '../../../../../types/cards';

const InspirationCard = ({ img, slogan, title, text }: IInspirationCards): JSX.Element => {
  return (
    <div className="card insp-card">
      <img src={img} alt="card" className="card-img" />
      <div className="card-desc">
        <span className="slogan">{slogan}</span>
        <div className="card-title">
          <span>{title}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InspirationCard;
