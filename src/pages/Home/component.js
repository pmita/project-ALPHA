// COMPONENTS
import Banner from '../../layout/Banner';
import ActionButtons from '../../layout/ActionButtons';
import WhatWeOffer from '../../layout/WhatWeOffer';
// STYLES
import './style.scss';
// ASSETS
import bannerImg from '../../assets/images/paint-banner.jpg';

function Home() {
  return (
    <div className="home">
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
      <WhatWeOffer />
    </div>
  );
}

export default Home;
