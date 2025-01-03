import { JSX, useState } from 'react';
import { Logo } from './../../logo/Logo';
import LoginButton from './../../buttons/LoginButton';
import './headerNav.css';
import './headerNavMedia.css';

export const HeaderNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container navbar">
      <Logo/>
      <div
        className={`header-burger ${isOpen ? 'active' : ''}`}
        onClick={handleMenu}
      >
        <span></span>
      </div>

      {/* Слой для затемнения */}
      {isOpen && <div className="overlay" onClick={handleMenu}></div>}

      <div className={`menu ${isOpen ? 'menu-open' : 'menu-closed'}`}>
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
