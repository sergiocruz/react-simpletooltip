import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { topPosition, leftPosition } from './lib/positionCalc';

export class OnClickTooltip extends Component {

  static propTypes = {
    tooltip: PropTypes.node.isRequired,
  }

  constructor() {
    super();

    this.state = {
      isShowing: false,
      top: 0,
      left: 0,
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  positionTooltip() {
    const el = findDOMNode(this);

    this.setState({
      top: topPosition(el),
      left: leftPosition(el),
    });
  }

  toggleTooltip() {
    this.setState(
      { isShowing: !this.state.isShowing },
      () => this.positionTooltip()
    );
  }

  render() {

    const tooltip = React.cloneElement(this.props.tooltip, {
      dynamicPositioning: true,
      top: this.state.top,
      left: this.state.left,
      isShowing: this.state.isShowing,
    });

    const clickable = React.cloneElement(this.props.children, {
      onClick: this.toggleTooltip,
    });

    return (
      <span>
        {
          this.state.isShowing
            ? tooltip
            : null
        }

        {clickable}
      </span>
    );
  }
}
