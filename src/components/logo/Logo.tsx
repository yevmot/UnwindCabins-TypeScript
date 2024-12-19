import { JSX } from 'react';

export const Logo = (): JSX.Element => {
  return (
    <div className="logo no-select">
      <label className="logo__first-half">Unwind</label>
      <label className="logo__second-half">Cabins</label>
    </div>
  );
};
