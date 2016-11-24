import React, { Component } from 'react';
import {Tooltip, OnMouseOverTooltip} from '../../SimpleTooltip';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';

let sampleCode = '';

export class OnMouseOverExample extends Component {
  render() {
    const tooltip = (
      <Tooltip>
        Hello <strong>from</strong> Tooltip
      </Tooltip>
    );

    return (
      <div>
        You can access the tooltip by hovering {' '}

        <OnMouseOverTooltip tooltip={tooltip}>
          <a href="#">right here</a>
        </OnMouseOverTooltip>

        ... let me know how you like it.

        <p className="sourcecode">Source Code:</p>
        <Highlight>{sampleCode}</Highlight>
      </div>
    );
  }
}

sampleCode = `function OnMouseOverExample() {
  const tooltip = (
    <Tooltip>Hello from Tooltip</Tooltip>
  );

  return (
    <OnMouseOverTooltip tooltip={tooltip}>
      <a href="#">hover me!</a>
    </OnMouseOverTooltip>
  );
}
`;
