import { JSX } from 'react';
import { Routes, Route } from 'react-router-dom';

import LayOut from './Layout';

import { HomePage } from './pages/home/HomePage';
import CabinsPage from './pages/cabins/CabinsPage';
import InspiredPage from './pages/inspired/InspiredPage';
import StayPage from './pages/stay/StayPage';
import AboutPage from './pages/about/AboutPage';

import './styles/reset.css';
import './styles/main.css';
import ScrollToAnchor from './helpers/ScrollToAnchor';

const App = (): JSX.Element => {
  return (
    <div className="App">

      <ScrollToAnchor/>
      <Routes>
        <Route path='/' element={<LayOut/>}>
          <Route index element={<HomePage />}/>
          <Route path='cabins' element={<CabinsPage />}/>
          <Route path='inspired' element={<InspiredPage />}/>
          <Route path='stay' element={<StayPage />}/>
          <Route path='about' element={<AboutPage />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
