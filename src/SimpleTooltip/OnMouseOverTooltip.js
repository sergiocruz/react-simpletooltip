import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { topPosition, leftPosition } from './lib/positionCalc';
import { DynamicPositionTooltip } from './DynamicPositionTooltip';

let showTimer = null;
let hideTimer = null;

export class OnMouseOverTooltip extends Component {

  static propTypes = {
    tooltip: PropTypes.node.isRequired,
    showDelay: PropTypes.number.isRequired,
    hideDelay: PropTypes.number.isRequired,
  }

  static defaultProps = {
    showDelay: 150,
    hideDelay: 400,
  }

  constructor() {
    super();

    this.state = {
      isShowing: false,
      top: 0,
      left: 0,
    };

    this.onOverlay = this.onOverlay.bind(this);
    this.offOverlay = this.offOverlay.bind(this);
  }

  positionTooltip() {
    const el = findDOMNode(this);

    this.setState({
      top: topPosition(el),
      left: leftPosition(el),
    });
  }

  onOverlay() {
    showTimer = setTimeout(
      () => {
        this.setState(
          { isShowing: true },
          () => this.positionTooltip()
        )
      },
      this.props.showDelay
    );

    clearTimeout(hideTimer);
  }

  offOverlay() {
    hideTimer = setTimeout(
      () => this.setState({isShowing: false}),
      this.props.hideDelay
    );

    clearTimeout(showTimer);
  }

  render() {
    const { top, left, isShowing } = this.state;

    const overlayableComponent = React.cloneElement(this.props.children, {
      onMouseEnter: this.onOverlay,
      onMouseLeave: this.offOverlay,
    });

    return (
      <span>
        {
          isShowing
            ? <DynamicPositionTooltip top={top} left={left} {...this.props} />
            : null
        }

        {overlayableComponent}
      </span>
    );
  }
}
