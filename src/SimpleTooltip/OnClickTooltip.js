import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { topPosition, leftPosition } from './lib/positionCalc';
import { DynamicPositionTooltip } from './DynamicPositionTooltip';

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
    const { top, left, isShowing } = this.state;

    const clickableComponent = React.cloneElement(this.props.children, {
      onClick: this.toggleTooltip,
    });

    return (
      <span>
        {
          isShowing
            ? <DynamicPositionTooltip top={top} left={left} {...this.props} />
            : null
        }

        {clickableComponent}
      </span>
    );
  }
}
