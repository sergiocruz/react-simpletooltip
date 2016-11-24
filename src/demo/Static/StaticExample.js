import React from 'react';
import {Tooltip} from '../../SimpleTooltip';
import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';

let sampleCode = '';

export function StaticExample() {
  return (
    <div>
      <Tooltip><em><strong>Hey,</strong></em> I am a tooltip!</Tooltip>

      <h3>Customize Colors</h3>
      <Tooltip styleOptions={{bgColor: 'rgba(105, 10, 93, .8)'}}>Hey there</Tooltip>
      <Tooltip styleOptions={{bgColor: '#E9E9E9', textColor: '#636363', textShadow: ''}}>Dollar, dollar bill yall</Tooltip>

      <p className="sourcecode">Source Code:</p>
      <Highlight>{sampleCode}</Highlight>
    </div>
  );
}

sampleCode = `function StaticExample() {
  return (
    <div>
      <Tooltip>
        <em><strong>Hey,</strong></em> I am a tooltip!
      </Tooltip>

      <Tooltip styleOptions={{bgColor: 'rgba(105, 10, 93, .8)'}}>
        Hey there
      </Tooltip>

      <Tooltip styleOptions={{bgColor: '#E9E9E9', textColor: '#636363', textShadow: ''}}>
        Dollar, dollar bill yall
      </Tooltip>
    </div>
  );
}
`;
