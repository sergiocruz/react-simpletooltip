import React, { Component } from 'react';
import { getStyles } from './styles';

class TooltipWrapper extends Component {
  render() {
    const { tooltipWrapper } = getStyles();

    return (
      <div style={tooltipWrapper}>
        {this.props.children}
      </div>
    )
  }
}

export {
  TooltipWrapper as default,
  TooltipWrapper,
}
