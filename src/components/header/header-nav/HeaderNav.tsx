import { JSX, useState } from 'react';
import { Logo } from './../../logo/Logo';
import LoginButton from './../../buttons/LoginButton';
import './headerNav.css';
import './headerNavMedia.css';

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: '/', text: 'Our cabins' },
  { href: '/', text: 'Get inspired' },
  { href: '/', text: 'Gift a stay' },
  { href: '/', text: 'About us' },
];

export default function HeaderNav(): JSX.Element {
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
        {navLinks.map(({ href, text }) => (
          <li key={text} className='menu-item'>
            <a href={href} className='menu-link'>
              <span className='no-select'>{text}</span>
            </a>
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
