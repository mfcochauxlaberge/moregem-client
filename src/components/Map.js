import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { incrementAmountCoins } from '../actions/index';

// Components
import TileManager from './TileManager';

// Assets
import Bank from '../img/icons/bank.png';
import Chapel from '../img/icons/chapel.png';
import Coins from '../img/icons/coins.png';
import Empty from '../img/icons/empty.png';
import Foundry from '../img/icons/foundry.png';
import Gem from '../img/icons/gem.png';
import Lab from '../img/icons/lab.png';
import Mine from '../img/icons/mine.png';
import Tower from '../img/icons/tower.png';
import '../styles/Map.css';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.openTileManager = this.openTileManager.bind(this);
  }

  componentWillMount() {
    let tiles = [];
    for (let i = 0; i < 25; i++) {
      tiles.push({ n: i, icon: Empty });
    }

    tiles[1].icon = Mine
    tiles[2].icon = Tower
    tiles[3].icon = Bank
    tiles[4].icon = Foundry
    tiles[5].icon = Foundry
    tiles[7].icon = Chapel
    tiles[8].icon = Mine
    tiles[10].icon = Bank
    tiles[12].icon = Bank
    tiles[14].icon = Foundry
    tiles[16].icon = Chapel
    tiles[20].icon = Foundry
    tiles[21].icon = Tower
    tiles[23].icon = Lab
    tiles[24].icon = Bank

    this.setState({ tiles });
  }

  openTileManager() {
    document.getElementsByClassName('TileManager')[0].style.display = 'grid';
  }

  render() {
    return (
      <div>
        <div
          id="Coins"
          onClick={this.props.onClick}
        >
          <img src={Coins} alt="Number of coins" />
          <span>{this.props.coins}</span>
        </div>
        <div id="Gems">
          <img src={Gem} alt="Number of gems (number of avalaible gems)" />
          <span>{this.props.gems}</span>
        </div>
        <div id="Map">
          { this.state.tiles.map(tile => {
              return <div key={'tile-'+tile.n} className="Tile" onClick={this.openTileManager}><img src={tile.icon} alt="Tile" /></div>
            }) }
          <TileManager />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.player.coins,
    gems: state.player.gems,
    wishes: state.player.wishes,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(incrementAmountCoins(1));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);