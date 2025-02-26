import { JSX } from 'react';
import Button from './../../../buttons/BasicButton';
import imgBg from './../../../../img/find-img-bg.jpg';
import './find.css';

const Find = (): JSX.Element => {
  return (
    <div className="big-container">
      <div className="find-wrapper">
        <div className="find-container">
          <div className="find-gradient-bg">
            <div className="find-gradient"></div>
          </div>
          <img className="find-bg" alt="find-bg" src={imgBg} />
        </div>
        <div className="find-content">
          <div className="title">
                        Nourish the mind, body, and spirit.
          </div>
          <p>
                        Many people find that the combination of being in a
                        peaceful natural setting and engaging in activities that
                        nourish the mind, body, and spirit leave them feeling
                        rejuvenated and refreshed.
          </p>
          <Button
            sx={{
              backgroundColor: '#f5b963',
              color: 'black',
              width: '236px',
              height: '54px',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '400',
            }}
            onClick={(): void => alert('BTN CLICKED')}
          >{'Find available cabins'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Find;
