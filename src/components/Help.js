import React, { Component } from 'react';

// Assets
import Bank from '../img/icons/bank.png';
import Chapel from '../img/icons/chapel.png';
import Coins from '../img/icons/coins.png';
import Eye from '../img/icons/eye.png';
import Foundry from '../img/icons/foundry.png';
import Gem from '../img/icons/gem.png';
import Hand from '../img/icons/hand.png';
import Lab from '../img/icons/lab.png';
import Meteor from '../img/icons/meteor.png';
import Mine from '../img/icons/mine.png';
import Prayer from '../img/icons/prayer.png';
import Tower from '../img/icons/tower.png';
import Wish from '../img/icons/wish.png';
import '../styles/Help.css';

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h1>Help</h1>
        <p>Moregem is a very simple game. The goal is to have as many gems as possible.</p>
        <h2>Resources</h2>
        <p>Here is a list of all the different kinds of resources that you can have. Coins are the most important because there are used to buy buildings and upgrades, but gems are what is going to decide your rank.</p>
        <table>
          <tbody>
            <tr>
              {/* <td>abc</td> */}
              <td style={{width: '50px'}}><img src={Coins} alt="Coins" /></td>
              <td>
                <b>Coins</b>
                <p>Coins to produced in banks. The only way to improve is by buying buildings and upgrades. And those can only be bought with coins.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Gem} alt="Gems" /></td>
              <td>
                <b>Gems</b>
                <p>Your coin production is multiplied by the number of gems you have. The rankings is based on the amount of gems.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Wish} alt="Wish" /></td>
              <td>
                <b>Wishes</b>
                <p>Wishes can be used to perform actions such as sending a meteor on an opponent's tile or steal someone. Wishes can be obtained by praying.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Prayer} alt="Prayers" /></td>
              <td>
                <b>Prayers</b>
                <p>Prayers are done in chapels and are used to obtains wishes from the Gods.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Buildings</h2>
        Buildings appear on your map. Each level is also considered a building. So if you have a level 5 bank on a tile and a level 6 bank on another tile, they will produce the same as a level 11 bank.
        <table>
          <tbody>
            <tr>
              <td style={{width: '50px'}}><img src={Mine} alt="Mine" /></td>
              <td>
                <b>Mine</b>
                <p>Mines produce gold ore and feed foundries. By default it takes 10 mines to feed a foundry, but this can be improved through upgrades.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Foundry} alt="Foundry" /></td>
              <td>
                <b>Gems</b>
                <p>Foundries make ingots out of gold ore. By default it takes 10 foundries to feed a bank, but this can be improved through upgrades.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Bank} alt="Bank" /></td>
              <td>
                <b>Bank</b>
                <p>Banks sell the ingots to make coins. Productive banks is what you want the most to be powerful.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Tower} alt="Tower" /></td>
              <td>
                <b>Castle</b>
                <p>Castles protect the buildings directly around them. When a building is attacked, its defense increases if it's next to a tower.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Lab} alt="Lab" /></td>
              <td>
                <b>Labs</b>
                <p>Labs do research and bring upgrades that can be bought. More labs mean faster research.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Chapel} alt="Chapel" /></td>
              <td>
                <b>Chapel</b>
                <p>Chapels are where people pray. The more chapels you have, the more prayers are done.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Actions</h2>
        <p>You may uses your wishes to make the Gods do something for you.</p>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '50px' }}><img src={Eye} alt="Eye" /></td>
              <td>
                <b>Spy</b>
                <p>See what an opponent's tile contain. That information becomes public. All the players can see it.</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '50px' }}><img src={Meteor} alt="Meteor" /></td>
              <td>
                <b>Attack</b>
                <p>Send a meteor on an opponent's tile. If the tile contains a building, it will lose one level per meteor included in the attack minus the total number of towers around it.</p>
              </td>
            </tr>
            <tr>
              <td><img src={Hand} alt="Hand" /></td>
              <td>
                <b>Steal</b>
                <p>Steal 1% of the opponent's coins. You also have 1% chance of stealing a gem if the opponent has at least one. The theft will only work if there is no tower on the tile or around it.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Upgrades</h2>
        <p>Labs do research and bring you upgrades that can be pruchased with coins. Each upgrade offers a permanent bonus once bought.</p>
        <h2>Prices</h2>
        <h3>Buildings</h3>
        <p>Each building had its own base price to build a level 1. Then, each next level costs the price of the previous level plus 50%. Here is an example:</p>
        <table style={{width: '200px'}}>
          <tbody>
            <tr>
              <td>Level 1</td>
              <td>100 coins</td>
            </tr>
            <tr>
              <td>Level 2</td>
              <td>150 coins</td>
            </tr>
            <tr>
              <td>Level 3</td>
              <td>225 coins</td>
            </tr>
            <tr>
              <td>Level 4</td>
              <td>337 coins</td>
            </tr>
            <tr>
            <td>Level 4</td>
              <td>506 coins</td>
            </tr>
          </tbody>
        </table>
        <h3>Wishes</h3>
        <p>Prayers to the Gods are automatically converted to wishes. This is the formula that decides the price of the next wish.</p>
        <code>(10 ^ (Current number of wishes)) * Number of gems</code>
      </div>
    );
  }
}

export default Help;