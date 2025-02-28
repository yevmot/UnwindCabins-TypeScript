import { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './../navigation/Navigation';
import Footer from './..//footer/Footer';

export default function LayOut(): JSX.Element {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
