import arrow from './../../../../img/icons/arrow-right-circle.svg';
import Button from '../../../buttons/BasicButton';
import { JSX } from 'react';
import './about.css';

const About = (): JSX.Element => {
  const Arrow = (): JSX.Element => {
    return <>{
      <img src={arrow} alt='arrow'/>
    }</>;
  };

  return (
    <div className="container">
      <div className="about">
        <div className="about-title">
          <h1>Frequently asked questions</h1>
        </div>
        <div className="about-info">
          <div className="desc">
            <h1>1. About Unwind Cabins</h1>
            <ul>
              <li>How long have you been in business?</li>
              <li>Why did you start this journey?</li>
            </ul>
          </div>
          <div className="btn">
            <Button
              onClick={(): void => alert('ABOUT CLICKED')}
              sx={{
                fontWeight: '500',
                fontSize: '14px',
              }}
            >
                About our cabins
              {<Arrow/>}
            </Button>
          </div>
        </div>
        <div className="about-info">
          <div className="desc">
            <h1>2. Tell me more about the cabin</h1>
            <ul>
              <li>What do I need to bring?</li>
              <li>How do I get to the cabin?</li>
            </ul>
          </div>
          <div className="btn">
            <Button
              onClick={(): void => alert('ABOUT CLICKED')}
              sx={{
                fontWeight: '500',
                fontSize: '14px',
              }}
            >
                Tell me more about the cabin
              {<Arrow/>}
            </Button>
          </div>
        </div>
        <div className="about-info">
          <div className="desc">
            <h1>3. Pets, family & friends</h1>
            <ul>
              <li>Please tell me I can bring my dog</li>
              <li>How many people do you cabins sleep?</li>
            </ul>
          </div>
          <div className="btn">
            <Button
              onClick={(): void => alert('ABOUT CLICKED')}
              sx={{
                fontWeight: '500',
                fontSize: '14px',
              }}
            >
                Pets, family & friends
              {<Arrow/>}
            </Button>
          </div>
        </div>
        <div className="live-chat">
          <h1>Still have a question?</h1>
          <p>
                        If you still have questions contact a member of the team
                        on <button type="button">live chat</button> and we’d be
                        more than happy to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
