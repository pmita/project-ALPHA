import { useState } from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// ASSETS
import burgerIcon from '../../assets/images/svg/burger.svg';
// STYLES
import './style.scss';

function Navigation() {
  // STATE & VARIABLES
  const [isHidden, setIsHidden] = useState(false);

  return (
    <nav>
      <h4 id="nav-logo">
        <Link to="/">
          Handyman in Newcastle
        </Link>
      </h4>
      <ul className={isHidden ? 'nav-items active' : 'nav-items'}>
        <li><Link to="/our-work">Work</Link></li>
        <button className="btn secondary" type="button"><Link to="/contact">Contact Us</Link></button>
      </ul>
      <button className="nav-burger" type="button" onClick={() => setIsHidden(!isHidden)}>
        <img src={burgerIcon} alt="toggle menu icon" />
      </button>
    </nav>
  );
}

export default Navigation;
