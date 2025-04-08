import { ReactElement } from 'react';
import { HeroSection } from './modules/hero/HeroSection';
import { Discover } from '../home/modules/discover/Discover';
import { Inspiration } from '../home/modules/inspiration/Inspiration';
import { Experience } from './modules/experience/Experience';
import { VideoSection } from './modules/video-section/videoSection';
import { Find } from './modules/find/Find';
import { About } from './modules/about/About';
// import PreFooter from '../../components/sections/pre-footer/PreFooter';

export const HomePage = (): ReactElement => {
  return (
    <>
      <HeroSection/>
      <Discover />
      <Inspiration />
      <Experience />
      <VideoSection />
      <Find />
      <About />
      {/* <PreFooter /> */}
    </>
  );
};
