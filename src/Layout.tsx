import { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from './core/components/navigation/Navigation';
import Footer from './components/footer/Footer';

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
