import { JSX } from 'react';
import { HeaderBg } from './header-bg/HeaderBg';
import HeaderContent from './header-content/HeaderContent';
import { HeaderSearch } from './header-search/HeaderSearch';

import './headerComps.css';

export const HeaderComps = (): JSX.Element => {
  return (
    <div className="big-container">
      <div className="header-container">
        <HeaderBg />
        <HeaderContent />
        <HeaderSearch />
      </div>
    </div>
  );
};
