import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DynamicPositionTooltip from './DynamicPositionTooltip';
import TooltipWrapper from './TooltipWrapper';
import { getCoordinates } from './lib/positionElement';

export class OnClickTooltip extends Component {

  static propTypes = {
    tooltip: PropTypes.node.isRequired,
    position: PropTypes.string.isRequired,
  }

  static defaultProps = {
    position: 'top',
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
    const coordinates = getCoordinates(el, this.props.position);

    this.setState({
      top: coordinates.top,
      left: coordinates.left,
    });
  }

  toggleTooltip() {
    this.setState(
      { isShowing: !this.state.isShowing },
      () => this.state.isShowing && this.positionTooltip()
    );
  }

  render() {
    const { top, left, isShowing } = this.state;
    const clickableComponent = React.cloneElement(this.props.children, {
      onClick: this.toggleTooltip,
    });

    return (
      <TooltipWrapper>
        {
          isShowing
            ? <DynamicPositionTooltip top={top} left={left} {...this.props} />
            : null
        }

        {clickableComponent}
      </TooltipWrapper>
    );
  }
}
