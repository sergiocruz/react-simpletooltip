import React, { Component } from 'react';
import { Tooltip, OnClickTooltip } from '../../SimpleTooltip';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';

let sampleCode = '';

export class OnClickExample extends Component {
  render() {

    const tooltip = (
      <Tooltip styleOptions={{bgColor: 'rgba(105, 10, 93, .8)'}}>
        You have <strong>summuned</strong> me?
      </Tooltip>
    );

    return (
      <div>
        You can also trigger the tooltip by clicking: {' '}

        <OnClickTooltip tooltip={tooltip}>
          <button className="sample-btn">Trigger Tooltip</button>
        </OnClickTooltip>

        <p className="sourcecode">Source Code:</p>
        <Highlight>{sampleCode}</Highlight>
      </div>
    );
  }
}

sampleCode = `function OnMouseOverExample() {
  const tooltip = (
    <Tooltip styleOptions={{bgColor: 'rgba(105, 10, 93, .8)'}}>
      You have <strong>summuned</strong> me?
    </Tooltip>
  );

  return (
    <OnClickTooltip tooltip={tooltip}>
      <button className="sample-btn">Trigger Tooltip</button>
    </OnClickTooltip>
  );
}
`;
