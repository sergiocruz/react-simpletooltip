import React, { PropTypes } from 'react';

export function Tooltip(props) {
  const {
    children,
    dynamicPositioning,
    left,
    top,
  } = props;

  const classname = 'tooltip' + (
    dynamicPositioning
      ? ' tooltip--dynamic'
      : ''
  );

  return (
    <div className={classname} style={{top, left}}>
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  dynamicPositioning: PropTypes.bool.isRequired
};

Tooltip.defaultProps = {
  dynamicPositioning: false
};
