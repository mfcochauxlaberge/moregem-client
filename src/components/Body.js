import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Help from './Help';
import Map from './Map';

// Assets
import '../styles/Body.css';

class Body extends Component {
  render() {
    return (
      <div id="Body">
        <Route exact path="/"         component={Map} />
        <Route exact path="/map"      component={Map} />
        <Route exact path="/info"     component={() => <p>Insert numbers here.</p>} />
        <Route exact path="/upgrades" component={() => <p>You're already the best you can be.</p>} />
        <Route exact path="/rankings" component={() => <p>You're not first.</p>} />
        <Route exact path="/world"    component={() => <p>There are other players.</p>} />
        <Route exact path="/profile"  component={() => <p>It is you.</p>} />
        <Route exact path="/help"     component={Help} />
      </div>
    );
  }
}

export default Body;