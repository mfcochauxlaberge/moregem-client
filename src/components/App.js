import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Assets
import '../styles/App.css';

// Components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
