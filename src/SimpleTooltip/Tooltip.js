import React, { PropTypes } from 'react';
import Radium from 'radium';
import { getStyles } from './styles';

function Tooltip(props) {
  const {
    children,
    dynamicPositioning,
    styleOptions,
    left,
    top,
  } = props;

  const styles = getStyles(styleOptions);
  const tooltipStyles = [
    styles.tooltip,
    dynamicPositioning
      ? { ...styles.tooltip.dynamicPositioning, top, left }
      : null
  ];

  return (
    <div className="react-simpletooltip" style={tooltipStyles}>
      {children}
      <i style={styles.caret}></i>
    </div>
  );
}

Tooltip.propTypes = {
  dynamicPositioning: PropTypes.bool.isRequired,
  styleOptions: PropTypes.object.isRequired,
};

Tooltip.defaultProps = {
  dynamicPositioning: false,

  // Want to override tooltip colors? Simply pass in this prop:
  styleOptions: {
    bgColor: 'rgba(0, 0, 0, .8)',
    textColor: '#FFFFFF',
    textShadow: '1px 1px 1px black',
  }
};

const StyledComponent = Radium(Tooltip);

export {
  StyledComponent as Tooltip
}
