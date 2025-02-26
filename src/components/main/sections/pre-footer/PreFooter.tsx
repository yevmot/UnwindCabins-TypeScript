import BgImg from './../../../../img/pre-footer-bg.jpg';
import Shadow from './../../../../img/pre-footer-shadow.png';
import Button from '../../..//buttons/BasicButton';
import './preFooter.css';
import { JSX } from 'react';

const PreFooter = (): JSX.Element => {
  return (
    <div className="big-container">
      <div className="exp-container">
        <img src={BgImg} alt="BgImg" className="bg-footer" />
        <div className="pre-footer-content">
          <div className="title">Escape from endless Zoom calls</div>
          <p>
                        Discover the wonders of spending time offline and away
                        from the office with our 3 day weekend getaway cabin
                        retreats.
          </p>
          <Button
            onClick={(): void => alert('prefooter')}
            sx={{
              bgcolor: '#D4EEEC',
              color: '#173333',
              width: '205px',
              height: '40px',
              fontSize: '14px',
              fontWeight: '400',
            }}
          >
            Find the perfect getaway
          </Button>
        </div>
        <img className="shadow" src={Shadow} alt="shadow" />
      </div>
    </div>
  );
};

export default PreFooter;
