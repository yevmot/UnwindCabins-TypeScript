import HeroImg from './../../../../img/header.jpg';
import { JSX } from 'react';
import './heroBg.css';

export default function HeroBg(): JSX.Element {
  return (
    <div className="img-gradient">
      <div className="header-gradient"></div>
      <img src={HeroImg} alt="header-img" className="header-img no-select" />
    </div>
  );
}

