import './style.scss';
// ASSETS
import poundSymbol from '../../assets/images/svg/pound-symbol.svg';
import cancelSymbol from '../../assets/images/svg/cancel-symbol.svg';

function WhatWeOffer() {
  return (
    <div className="services-section">
      <h2>What we provide</h2>
      <p>
        Bring your dream home to life wiht one-on-one consultation,
        help, and catered to you solutions.
      </p>
      <section className="services">
        <div className="wrapper">
          <div className="service-item">
            <img src={poundSymbol} alt="" />
            <h2>Luxury Facilities</h2>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable services
            </p>
            <button type="button" className="learn-more">LEARN MORE</button>
          </div>
          <div className="service-item-details">
            <p>
              This is some dummy text for our service for now
            </p>
            <img src={cancelSymbol} alt="" />
          </div>
        </div>
        <div className="wrapper">
          <div className="service-item">
            <img src={poundSymbol} alt="" />
            <h2>Luxury Facilities</h2>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable services
            </p>
            <button type="button" className="learn-more">LEARN MORE</button>
          </div>
          <div className="service-item-details">
            <p>
              This is some dummy text for our service for now
            </p>
            <img src={cancelSymbol} alt="" />
          </div>
        </div>
        <div className="wrapper">
          <div className="service-item">
            <img src={poundSymbol} alt="" />
            <h2>Luxury Facilities</h2>
            <p>
              The advantage of hiring a workspace with us is that gives you
              comfortable services
            </p>
            <button type="button" className="learn-more">LEARN MORE</button>
          </div>
          <div className="service-item-details">
            <p>
              This is some dummy text for our service for now
            </p>
            <img src={cancelSymbol} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeOffer;
