import PropTypes from 'prop-types';
// ROUTER
import { Link } from 'react-router-dom';
// STYLES
import './style.scss';

function ActionButtons({ primaryLink, secondaryLink }) {
  return (
    <div className="action-buttons">
      <button className="btn primary" type="button">
        <Link to={primaryLink}>Get in Touch</Link>
      </button>
      <button className="btn secondary" type="button">
        <Link to={secondaryLink}>Check our Work</Link>
      </button>
    </div>
  );
}

// PROP VALIDATION
ActionButtons.propTypes = {
  primaryLink: PropTypes.string,
  secondaryLink: PropTypes.string
};

ActionButtons.defaultProps = {
  primaryLink: '#',
  secondaryLink: '#'
};

export default ActionButtons;
