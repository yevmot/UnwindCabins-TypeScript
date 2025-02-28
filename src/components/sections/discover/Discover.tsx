import { JSX } from 'react';
import DiscoverCards from './cards/DiscoverCards';
import './discover.css';
import { Link } from 'react-router-dom';

const Discover = (): JSX.Element => {
  return (
    <section className="discover-wrapper">
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
            <Link to='/cabins'>
              <span className="view-all">View all cabins</span>
            </Link>
          </div>
        </div>
        <DiscoverCards />
      </div>
    </section>
  );
};

export default Discover;
