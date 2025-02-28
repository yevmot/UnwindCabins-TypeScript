import { JSX } from 'react';
import HeaderNav from './components/header/header-nav/HeaderNav';
import HeaderComps from './components/header/header-comps/HeaderComps';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

import './styles/reset.css';
import './styles/main.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header>
        <HeaderNav />
        <HeaderComps />
      </header>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
