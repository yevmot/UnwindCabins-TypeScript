import { JSX } from 'react';
import Discover from './sections/discover/Discover';
import Inspiration from './sections/inspiration/Inspiration';
import Experience from './sections/experience/Experience';
import VideoSection from './sections/video-section/videoSection';
import Find from './sections/find/Find';
import About from './sections/about/About';
import PreFooter from './sections/pre-footer/PreFooter';

const Main = (): JSX.Element => {
  return (
    <main>
      <Discover />
      <Inspiration />
      <Experience />
      <VideoSection />
      <Find />
      <About />
      <PreFooter />
    </main>
  );
};

export default Main;
