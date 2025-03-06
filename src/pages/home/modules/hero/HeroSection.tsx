import { ReactElement } from 'react';
import { HeroBackground } from './components/HeroBackground';
import { HeroContent } from './components/HeroContent';
import { SearchForm } from './SearchForm';

import './styles/heroComps.css';

export const HeroSection = (): ReactElement => {
  return (
    <section className="hero-container">
      <div className="big-container">
        <HeroBackground />
        <HeroContent />
        <SearchForm />
      </div>
    </section>
  );
};
