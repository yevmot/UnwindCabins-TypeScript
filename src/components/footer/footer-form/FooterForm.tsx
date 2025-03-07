import { JSX } from 'react';
// import { BasicButton } from '../../buttons/BasicButton';
import Button from '@mui/material/Button';
import './footerForm.css';

const FooterForm = (): JSX.Element => {
  return (
    <div className="big-container">
      <div className="container">
        <div className="footer-form">
          <div className="footer-desc">
            <h1>Sign up to our Newsletter</h1>
            <p>
                For a weekly curated collection of 3 things you can
                watch, read or listen to switch off from the busy
                everyday.
            </p>
          </div>
          <div className="form-content">
            <input
              type="text"
              className="mail-form"
              placeholder="james@thegaintpeach.com"
            />
            <Button
              onClick={(): void => alert('Clicked footer button')}
              sx={{
                width: '195px',
                height: '54px',
                backgroundColor: '#F4BD4F',
                color: '#1F3D3E',
              }}
            >
                Join the mailing
            </Button>
          </div>
        </div>
        <span className="footer-line"></span>
      </div>
    </div>
  );
};

export default FooterForm;
