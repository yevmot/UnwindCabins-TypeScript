import { JSX, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from '../logo/Logo';
import { LoginButton } from '../buttons/LoginButton';
import './navigation.css';
import './headerNavMedia.css';

interface NavLink {
  text: string;
  to: string;
}

const navLinks: NavLink[] = [
  { to: '/cabins', text: 'Our cabins' },
  { to: '/inspired', text: 'Get inspired' },
  { to: '/stay', text: 'Gift a stay' },
  { to: '/about', text: 'About us' },
];

export default function Navigation(): JSX.Element {
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
        {navLinks.map(({ to, text }) => (
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
}
