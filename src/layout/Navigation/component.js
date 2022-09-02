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
      <h4 id="nav-logo">HandymanInNewcastle</h4>
      <ul className={isHidden ? 'nav-items active' : 'nav-items'}>
        <li><Link to="/">Work</Link></li>
        <li><Link to="/">Get in Touch</Link></li>
      </ul>
      <button className="nav-burger" type="button" onClick={() => setIsHidden(!isHidden)}>
        <img src={burgerIcon} alt="toggle menu icon" />
      </button>
    </nav>
  );
}

export default Navigation;
