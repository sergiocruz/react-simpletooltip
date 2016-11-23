import React, { Component } from 'react';
import StaticExample from './Static';
import OnMouseOverExample from './OnMouseOver';
import OnClickExample from './OnClick';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React SimpleTooltip</h1>
          <div className="App-intro"></div>
        </div>

        <div className="container">
          <div>
            <h2>Static</h2>

            <StaticExample />

            <hr />

            <h2>Mouseover</h2>
            <OnMouseOverExample />

            <hr />

            <h2>Click</h2>
            <OnClickExample />

          </div>
        </div>

      </div>
    );
  }
}

export default App;
