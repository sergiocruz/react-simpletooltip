import React, { Component } from 'react';
import StaticExample from './Static';
import OnMouseOverExample from './OnMouseOver';
import OnClickExample from './OnClick';
import './App.css';

const repoUrl = 'https://github.com/sergiocruz/react-simpletooltip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React SimpleTooltip</h1>
          <div className="App-intro">
            <a href={repoUrl}>{repoUrl}</a>
          </div>
        </div>

        <div className="container">

          <p className="intro">
            This is a live demo for the <code><a href={repoUrl}>react-simpletooltip</a></code> project.
            If you would like to give it a try, run <code>npm install react-simpletooltip</code> to get started.
          </p>

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
