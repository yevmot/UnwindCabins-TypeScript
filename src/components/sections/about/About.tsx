import arrow from './../../../img/icons/arrow-right-circle.svg';
import Button from '../../buttons/BasicButton';
import { JSX } from 'react';
import './about.css';

import { aboutQuestions } from './../../../data/aboutQuestions';
import { Link } from 'react-router-dom';

const About = (): JSX.Element => {
  const Arrow = (): JSX.Element => {
    return <>
      <img src={arrow} alt='arrow'/>
    </>;
  };

  return (
    <section className="about-wrapper">
      <div className="container">
        <div className="about-title">
          <h1>Frequently asked questions</h1>
        </div>

        {aboutQuestions.map((question, index) => (
          <div className="about-info" key={index}>
            <div className="desc">
              <h1>{index + 1} {question.title}</h1>
              <ul>
                {question.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
            <Link to={`/about#question-${index + 1}`}>
              <div className="btn">
                <Button
                  onClick={(): void => console.log('ABOUT CLICKED')}
                  sx={{ fontWeight: '500', fontSize: '14px' }}
                >
                  {question.title}
                  <Arrow />
                </Button>
              </div>
            </Link>
          </div>
        ))}

        <div className="live-chat">
          <h1>Still have a question?</h1>
          <p>
                        If you still have questions contact a member of the team
                        on <button type="button">live chat</button> and we’d be
                        more than happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
