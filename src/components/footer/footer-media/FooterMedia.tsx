import { JSX } from 'react';
import { socialMedia } from './../../../data/socialMedia';

import './footerMedia.css';

const FooterSoc = (): JSX.Element => {
  return (
    <div className="big-container">
      <div className="container footer-soc">
        <div className="logo no-select">
          <a href="#">
            <label className="logo__first-half">Unwind</label>
            <label className="logo__second-half">Cabins</label>
          </a>
        </div>

        <div className="copyright">© 2023 UnwindCabins</div>

        <div className="media">
          {
            socialMedia.map(({ name, src, href }) => (
              <a
                key={name}
                href={href}
                target='_blank'
                rel="noopener"
              >
                <img className='media-img' alt={name} src={src}/>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FooterSoc;
