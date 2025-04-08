import { ReactElement } from 'react';
import InspirationCards from './components/InspirationCards';
import './styles/inspiration.css';
import { Link } from 'react-router-dom';

export const Inspiration = (): ReactElement => {
  return (
    <section className="inspiration-wrapper">
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
            <Link to='/inspired'>
              <span className="view-all">View all experiences</span>
            </Link>
          </div>
        </div>
        <InspirationCards />
      </div>
    </section>
  );
};
