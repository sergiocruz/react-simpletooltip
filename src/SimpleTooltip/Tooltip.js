import React, { PropTypes } from 'react';
import Radium from 'radium';
import { getStyles } from './styles';

Tooltip.propTypes = {
  dynamicPositioning: PropTypes.bool.isRequired,
  styleOptions: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  dynamicPositioning: false,
  position: 'top',

  // Want to override tooltip colors? Simply pass in this prop:
  styleOptions: {
    bgColor: 'rgba(0, 0, 0, .8)',
    textColor: '#FFFFFF',
    textShadow: '1px 1px 1px black',
  }
};

function Tooltip(props) {
  const {
    children,
    dynamicPositioning,
    styleOptions,
    left,
    top,
    position,
  } = props;

  const cssClasses = `react-simpletooltip react-simpletooltip--${position}`;
  const styles = getStyles(styleOptions);
  
  const tooltipStyles = [
    styles.tooltip,
    dynamicPositioning
      ? { ...styles.tooltip.dynamicPositioning, top, left }
      : null
  ];

  const caretStyles = [
    styles.caret,
    styles.caret[`${position}Tooltip`]
  ];

  return (
    <div className={cssClasses} style={tooltipStyles}>
      {children}
      <i style={caretStyles}></i>
    </div>
  );
}

const StyledComponent = Radium(Tooltip);

export {
  StyledComponent as Tooltip
}
