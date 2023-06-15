import React from 'react';
import Navigationbar from './component/Navigationbar';
import Hero from './component/Hero'
import About from './component/About';
import FeatureImage from './component/FeatureImage';
import FeatureVis from './component/FeatureVis';
import AboutUs from './component/AboutUs';
import Footers from './component/Footers';
import News from './component/News';

function App() {
  return (
    <div>
      <Navigationbar />
      <Hero />
      <About />
      <FeatureImage />
      <FeatureVis />
      <News />
      <AboutUs />
      <Footers />
    </div>   
  );
}

export default App;

