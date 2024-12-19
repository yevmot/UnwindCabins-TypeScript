import { JSX } from 'react';
import { Logo } from './../../logo/Logo';
import LoginButton from './../../buttons/LoginButton';
import './headerNav.css';

export const HeaderNav = (): JSX.Element => {
  return (
    <div className="container">
      <div className="navbar">
        <Logo/>
        <div className="menu">
          <a href="/" className="menu-link">
            <span>Our cabins</span>
          </a>
          <a href="/" className="menu-link">
            <span>Get inspired</span>
          </a>
          <a href="/" className="menu-link">
            <span>Gift a stay</span>
          </a>
          <a href="/" className="menu-link">
            <span>About us</span>
          </a>
          <div className="login">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};
