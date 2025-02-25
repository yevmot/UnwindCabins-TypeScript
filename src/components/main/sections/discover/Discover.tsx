import Cards from './cards/DiscoverCards';
import './discover.css';
import { JSX } from 'react';

const Discover = (): JSX.Element => {
  return (
    <div className="discover-wrapper">
      <div className="container">
        <div className="discover-text">
          <h1 className="discover-title">
            <span className="underline">Discover</span> our idyllic
                        countryside cabins
          </h1>
          <div className="discover-desc">
            <p className="desc">
                            Fully equipped kitchen and bathroom with plenty of
                            walking and cycling routes to explore.
            </p>
            <span className="view-all">View all cabins</span>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Discover;
