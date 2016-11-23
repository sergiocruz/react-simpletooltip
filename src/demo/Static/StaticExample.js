import React from 'react';

import {Tooltip} from '../../SimpleTooltip';
import '../../SimpleTooltip/Tooltip.css';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';

let sampleCode = '';

export function StaticExample() {
  return (
    <div>
      <Tooltip><em><strong>Hey,</strong></em> I am a tooltip!</Tooltip>

      <p className="sourcecode">Source Code:</p>
      <Highlight>{sampleCode}</Highlight>
    </div>
  );
}

sampleCode = `function StaticExample() {
  return (
    <Tooltip>
      <em><strong>Hey,</strong></em> I am a tooltip!
    </Tooltip>
  );
}
`;
