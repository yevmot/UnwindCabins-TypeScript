import { ReactElement } from 'react';
import { heroBackground } from '../constants/images/heroBackground';

import '../styles/heroBackground.css';

export const HeroBackground = (): ReactElement => {
  return (
    <div className="img-gradient">
      <div className="header-gradient"></div>
      <img src={heroBackground} alt="header-img" className="header-img no-select" />
    </div>
  );
};

