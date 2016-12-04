import React, { Component, PropTypes } from 'react';

export class DynamicPositionTooltip extends Component {
  
  static propTypes = {
    tooltip: PropTypes.node.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }

  render() {
    return React.cloneElement(this.props.tooltip, {
      dynamicPositioning: true,
      top: this.props.top,
      left: this.props.left,
    });
  }
}
