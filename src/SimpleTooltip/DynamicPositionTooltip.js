import React, { Component, PropTypes } from 'react';

class DynamicPositionTooltip extends Component {

  static propTypes = {
    tooltip: PropTypes.node.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired
  }

  static defaultProps = {
    position: 'top',
  }

  render() {
    const { top, left, position } = this.props;
    return React.cloneElement(this.props.tooltip, {
      dynamicPositioning: true,
      top,
      left,
      position
    });
  }
}

export {
  DynamicPositionTooltip,
  DynamicPositionTooltip as default
}
