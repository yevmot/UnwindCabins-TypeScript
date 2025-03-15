import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import { LoginButton } from './LoginButton';
import { navLinksData } from './data/navLinksData';
import './styles/navigation.css';
import './styles/headerNavMedia.css';

export const Navigation = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="container navbar">
      <Logo/>

      <div
        className={`header-burger ${isOpen ? 'active' : ''}`}
        onClick={handleMenu}
      >
        <span></span>
      </div>

      <ul className={`menu ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        {navLinksData.map(({ to, text }) => (
          <li key={text} className='menu-item'>
            <NavLink to={to} className='menu-link'>
              <span className='no-select'>{text}</span>
            </NavLink>
          </li>
        ))}

        <div className="login">
          <LoginButton />
        </div>
      </ul>

      {isOpen && <div className="overlay" onClick={handleMenu}></div>}
    </nav>
  );
};
