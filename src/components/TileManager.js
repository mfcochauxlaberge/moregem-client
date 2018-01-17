import React, { Component } from 'react';

// Assets
import Chapel from '../img/icons/chapel.png';
import '../styles/TileManager.css';

class TileManager extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.closeManager = this.closeManager.bind(this);
  }

  componentWillMount() {
  }

  closeManager() {
    document.getElementsByClassName('TileManager')[0].style.display = 'none';
  }

  render() {
    return (
      <div className="TileManager">
        <img src={Chapel} alt="Chapel" />
        <h2>Chapel</h2>
        <span onClick={this.closeManager}>🗙</span>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
}

export default TileManager;