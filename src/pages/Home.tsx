import { JSX } from 'react';
import Discover from '../components/sections/discover/Discover';
import Inspiration from '../components/sections/inspiration/Inspiration';
import Experience from '../components/sections/experience/Experience';
import VideoSection from '../components/sections/video-section/videoSection';
import Find from '../components/sections/find/Find';
import About from '../components/sections/about/About';
import PreFooter from '../components/sections/pre-footer/PreFooter';

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
