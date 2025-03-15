import { JSX } from 'react';
import { Link } from 'react-router-dom';

export const Logo = (): JSX.Element => {
  return (
    <div className="logo no-select">
      <Link to="/">
        <label className="logo__first-half">Unwind</label>
        <label className="logo__second-half">Cabins</label>
      </Link>
    </div>
  );
};
