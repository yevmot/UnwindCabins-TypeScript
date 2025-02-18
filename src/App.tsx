import { JSX } from 'react';
import HeaderNav from './components/header/header-nav/HeaderNav';
import { HeaderComps } from './components/header/header-comps/HeaderComps';

import './styles/reset.css';
import './styles/main.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      {/* <FormModal /> */}
      <header>
        <HeaderNav />
        <HeaderComps />
      </header>
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
