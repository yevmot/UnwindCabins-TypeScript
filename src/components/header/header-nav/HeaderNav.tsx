import { JSX } from 'react';
import { Logo } from './../../logo/Logo';
import LoginButton from './../../buttons/LoginButton';
import './headerNav.css';

export const HeaderNav = (): JSX.Element => {
  return (
    <div className="container navbar">
      <Logo/>
      <div className="menu">
        <a href="/" className="menu-link">
          <span className="no-select">Our cabins</span>
        </a>
        <a href="/" className="menu-link">
          <span className="no-select">Get inspired</span>
        </a>
        <a href="/" className="menu-link">
          <span className="no-select">Gift a stay</span>
        </a>
        <a href="/" className="menu-link">
          <span className="no-select">About us</span>
        </a>
        <div className="login">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
