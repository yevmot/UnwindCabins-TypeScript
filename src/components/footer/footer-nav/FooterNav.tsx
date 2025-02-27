import { JSX } from 'react';
import './footerNav.css';

const FooterNav = (): JSX.Element => {
  return (
    <div className="big-container">
      <div className="container">
        <div className="footer-nav">
          <div className="nav-about">
            <h1>About us</h1>
            <span>Our story</span>
            <span>Why us</span>
            <span>How it works</span>
            <span>FAQ</span>
          </div>
          <div className="nav-cabins">
            <h1>Our cabins</h1>
            <div className="upper-unit">
              <h2>North of London</h2>
              <span>Golden Hideaway</span>
              <span>Oak Treehouse</span>
              <span>Acacia Retreat</span>
              <span>Blue Lagoon</span>
            </div>
            <div className="lower-unit">
              <h2>South of London</h2>
              <span>Lavender Retreat</span>
              <span>Butterfly Treehouse</span>
              <span>Mahogany Hideaway</span>
            </div>
          </div>
          <div className="nav-inspired">
            <h1>Get inspired</h1>
            <div className="inspired-wrapper">
              <div className="first-column">
                <div className="upper-unit">
                  <h2>Explore nature</h2>
                  <span>Hiking trails</span>
                  <span>Swimming</span>
                  <span>Fishing</span>
                  <span>Boating</span>
                  <span>Cycling</span>
                </div>
                <div className="lower-unit">
                  <h2>Rest, relax and re-set</h2>
                  <span>Spa treatments</span>
                  <span>Hot tubs</span>
                  <span>Nature Trails</span>
                </div>
              </div>
              <div className="second-column">
                <div className="upper-unit">
                  <h2>Great food and drinke</h2>
                  <span>Pubs</span>
                  <span>Restaurants</span>
                  <span>Food markets</span>
                  <span>Picnics</span>
                </div>

                <div className="lower-unit">
                  <h2>For you and yours</h2>
                  <span>Solo or a couple</span>
                  <span>Pet friendly</span>
                  <span>Accessible cabins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-support">
            <h1>Support</h1>
            <span>Help</span>
            <span>Contact us</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Complaints Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
