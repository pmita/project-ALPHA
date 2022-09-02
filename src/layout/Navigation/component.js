import { Link } from 'react-router-dom';
// ASSETS
import burgerIcon from '../../assets/images/svg/burger.svg';
// STYLES
import './style.scss';

function Navigation() {
  return (
    <nav>
      <h4 id="nav-logo">HandymanInNewcastle</h4>
      <ul className="nav-items active">
        <li><Link to="/">Work</Link></li>
        <li><Link to="/">Get in Touch</Link></li>
      </ul>
      <img className="nav-burger" src={burgerIcon} alt="toggle menu icon" />
    </nav>
  );
}

export default Navigation;
