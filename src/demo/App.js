import React, { Component } from 'react';
import { Tooltip, OnMouseOverTooltip, OnClickTooltip } from '../Tooltip';
import OnMouseOverExample from './OnMouseOver';
import OnClickExample from './OnClick';
import './App.css';

class App extends Component {
  render() {
    const tooltip = (
      <Tooltip>Do you even compose?</Tooltip>
    );

    return (
      <div className="App">
        <div className="App-header">
          <h1>React Tooltip</h1>
          <div className="App-intro"></div>
        </div>

        <div className="container">
          <div>
            <h2>Static</h2>
            <Tooltip><em><strong>Hey,</strong></em> I am a tooltip!</Tooltip>

            <hr />

            <h2>Mouseover</h2>
            <OnMouseOverExample />

            <hr />

            <h2>Click</h2>
            <OnClickExample />

            <hr />

            <h2>Compose all the things!</h2>

            <OnMouseOverTooltip tooltip={tooltip}>
              <OnClickTooltip tooltip={tooltip}>
                <button className="sample-btn">Trigger Tooltip</button>
              </OnClickTooltip>
            </OnMouseOverTooltip>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
