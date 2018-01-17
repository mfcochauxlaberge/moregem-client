import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Assets
import Help from '../img/icons/help.png';
import Map from '../img/icons/map.png';
import Plus from '../img/icons/plus.png';
import Rankings from '../img/icons/rankings.png';
import Stats from '../img/icons/stats.png';
import World from '../img/icons/world.png';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header id="Header">
        <nav>
          <ul>
            <li><NavLink to="/map"><img src={Map} alt="Map" /></NavLink></li>
            <li><NavLink to="/info"><img src={Stats} alt="Stats" /></NavLink></li>
            <li><NavLink to="/upgrades"><img src={Plus} alt="Upgrades" /></NavLink></li>
            <li><NavLink to="/rankings"><img src={Rankings} alt="Rankings" /></NavLink></li>
            <li><NavLink to="/world"><img src={World} alt="World" /></NavLink></li>
            <li><NavLink to="/help"><img src={Help} alt="Help" /></NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;