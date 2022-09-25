// COMPONENTS
import ServiceCard from '../../components/ServiceCard';
// STYLES
import './style.scss';

function WhatWeOffer() {
  // STATE & VARAIBLES
  const allServices = [
    {
      id: 1,
      img: '/assets/images/svg/pound-symbol.svg',
      altText: 'Pound symbol',
      title: 'Luxury Facilitates',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable services',
      learnMore: 'This is some dummy text for our service for now'
    },
    {
      id: 2,
      img: '/assets/images/svg/pound-symbol.svg',
      altText: 'Pound symbol',
      title: 'Luxury Facilitates',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable services',
      learnMore: 'This is some dummy text for our service for now'
    },
    {
      id: 3,
      img: '/assets/images/svg/pound-symbol.svg',
      altText: 'Pound symbol',
      title: 'Luxury Facilitates',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable services',
      learnMore: 'This is some dummy text for our service for now'
    }
  ];

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
