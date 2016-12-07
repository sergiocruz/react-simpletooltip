import React, { Component, PropTypes } from 'react';
import DynamicPositionTooltip from './DynamicPositionTooltip';
import TooltipWrapper from './TooltipWrapper';
import { findDOMNode } from 'react-dom';
import { getCoordinates } from './lib/positionElement';

let showTimer = null;
let hideTimer = null;

export class OnMouseOverTooltip extends Component {

  static propTypes = {
    tooltip: PropTypes.node.isRequired,
    showDelay: PropTypes.number.isRequired,
    hideDelay: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
  }

  static defaultProps = {
    showDelay: 150,
    hideDelay: 400,
    position: 'top',
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
    const coordinates = getCoordinates(el, this.props.position);

    this.setState({
      top: coordinates.top,
      left: coordinates.left,
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
      <TooltipWrapper>
        {
          isShowing
            ? <DynamicPositionTooltip top={top} left={left} {...this.props} />
            : null
        }

        {overlayableComponent}
      </TooltipWrapper>
    );
  }
}
