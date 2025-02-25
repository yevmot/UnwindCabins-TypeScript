import { JSX } from 'react';
import InspirationCards from './cards/InspirationCards';
import './inspiration.css';

const Inspiration = (): JSX.Element => {
  return (
    <div className="container">
      <div className="inspiration-text">
        <h1 className="inspiration-title">
          <span className="underline">Inspiration</span> for your next
                    getaway
        </h1>
        <div className="inspiration-desc">
          <p className="desc">
                        We’ve curated some amazing experiences to help you find
                        your next getaway.
          </p>
          <span className="view-all">View all experiences</span>
        </div>
      </div>
      <InspirationCards />
    </div>
  );
};

export default Inspiration;
