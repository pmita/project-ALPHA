// COMPONENTS
import ServiceCard from '../../components/ServiceCard';
// STYLES
import './style.scss';
// ASSETS
import { allServices } from '../../utilities/allServices';

function WhatWeOffer() {
  return (
    <div className="services-section">
      <h2>What we provide</h2>
      <p>
        Bring your dream home to life wiht one-on-one consultation,
        help, and catered to you solutions.
      </p>
      <section className="services">
        {allServices && allServices.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            altText={service.altText}
            title={service.title}
            description={service.description}
            learnMore={service.learnMore}
          />
        ))}
      </section>
    </div>
  );
}

export default WhatWeOffer;
