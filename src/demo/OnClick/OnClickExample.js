import React, { Component } from 'react';
import {Tooltip, OnClickTooltip, OnMouseOverTooltip} from '../../Tooltip';

export class OnClickExample extends Component {
  render() {

    const tooltip = (
      <Tooltip>
        You have <strong>summuned</strong> me?
      </Tooltip>
    );

    return (
      <div>
        You can also trigger the tooltip by clicking: {' '}

        <OnMouseOverTooltip tooltip={tooltip}>
          <OnClickTooltip tooltip={tooltip}>
            <button className="sample-btn">Trigger Tooltip</button>
          </OnClickTooltip>
        </OnMouseOverTooltip>

      </div>
    );
  }
}
