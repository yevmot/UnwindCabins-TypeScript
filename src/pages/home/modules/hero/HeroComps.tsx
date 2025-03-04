import { JSX } from 'react';
import { HeroBackground } from './components/HeroBackground';
import { HeroContent } from './components/HeroContent';
import SearchForm from './components/SearchForm';

import './styles/heroComps.css';

export default function HeroComps(): JSX.Element {
  return (
    <section className="hero-container">
      <div className="big-container">
        <HeroBackground />
        <HeroContent />
        <SearchForm />
      </div>
    </section>
  );
}
