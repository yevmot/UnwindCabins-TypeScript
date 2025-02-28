import { JSX } from 'react';
import FooterNav from './footer-nav/FooterNav';
import FooterForm from './footer-form/FooterForm';
import FooterMedia from './footer-media/FooterMedia';
import './footer.css';

const Footer = (): JSX.Element => {
  return (
    <section className='footer-layout'>
      <FooterNav />
      <FooterForm />
      <FooterMedia />
    </section>
  );
};

export default Footer;
