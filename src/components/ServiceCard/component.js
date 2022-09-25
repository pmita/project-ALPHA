/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
// PROP TYPES
import PropTypes from 'prop-types';
// STYLES
import './style.scss';
// ASSETS
import cancelSymbol from '../../assets/images/svg/cancel-symbol.svg';

function ServiceCard({
  img,
  altText,
  title,
  description,
  learnMore
}) {
  // STATE & VARIABLES
  const [showMore, setShowMore] = useState(false);

  // EVENTS
  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="wrapper">
      <div className="service-item">
        <img src={img} alt={altText} />
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <button type="button" className="learn-more" onClick={handleClick}>LEARN MORE</button>
      </div>
      <div className={showMore ? 'service-item-details active' : 'service-item-details'}>
        <p>
          {learnMore}
        </p>
        <img src={cancelSymbol} alt="Cancel button svg" onClick={handleClick} />
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  learnMore: PropTypes.string.isRequired
};

export default ServiceCard;
