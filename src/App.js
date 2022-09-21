// ROUTER
import { Routes, Route } from 'react-router-dom';
// COMPONENTS
import Navigation from './layout/Navigation';
import ActionButtons from './layout/ActionButtons';
// PAGES
import OurWork from './pages/OurWork/component';
import Contact from './pages/Contact/component';
import Banner from './layout/Banner';
// ASSETS
import bannerImg from './assets/images/paint-banner.jpg';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner bannerImg={bannerImg} altText="paint brush against white background">
        <h1 className="primary-text">
          We paint, we build, and we fix all your problems
        </h1>
        <h3 className="secondary-text">
          Affordable solutions for everyday households, to common problems, and with a
          unique customer experience
        </h3>
        <ActionButtons primaryLink="/our-work" secondaryLink="/contact" />
      </Banner>
      <Routes>
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
