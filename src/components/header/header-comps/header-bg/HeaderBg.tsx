import HeaderImg from './../../../../img/header.jpg';
import { JSX } from 'react';
import './headerBg.css';

export const HeaderBg = (): JSX.Element => {
  return (
    <div className="img-gradient">
      <div className="header-gradient"></div>
      <img src={HeaderImg} alt="header-img" className="header-img no-select" />
    </div>
  );
};

