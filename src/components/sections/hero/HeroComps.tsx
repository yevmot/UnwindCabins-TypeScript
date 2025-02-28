import { JSX } from 'react';
import HeroBg from './hero-bg/HeroBg';
import HeroContent from './hero-content/HeroContent';
import SearchForm from './search-form/SearchForm';

import './heroComps.css';

export default function HeroComps(): JSX.Element {
  return (
    <section className="hero-container">
      <div className="big-container">
        <HeroBg />
        <HeroContent />
        <SearchForm />
      </div>
    </section>
  );
}
