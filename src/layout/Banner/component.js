import { Link } from 'react-router-dom';
// ASSETS
import bannerImg from '../../assets/images/paint-banner.jpg';
// STYLES
import './style.scss';

function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-left">
        <h1 className="primary-text">
          We paint, we build, and we fix all your problems
        </h1>
        <h3 className="secondary-text">
          Affordable solutions for everyday households, to common problems, and with a
          unique customer experience
        </h3>
        <div className="action-buttons">
          <button className="btn primary" type="button">
            <Link to="/contact">Get in Touch</Link>
          </button>
          <button className="btn secondary" type="button">
            <Link to="/our-work">Check our Work</Link>
          </button>
        </div>
      </div>
      <div className="banner-right">
        <img src={bannerImg} alt="some text goes here" />
      </div>
    </section>
  );
}

export default Banner;
