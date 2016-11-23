import React, { Component } from 'react';
import {Tooltip, OnMouseOverTooltip} from '../../Tooltip';

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
      </div>
    );
  }
}
