export function getStyles(opts = {}) {
  const {
    bgColor = 'rgba(0, 0, 0, .8)',
    textColor = '#FFFFFF',
    textShadow = '1px 1px 1px black',
  } = opts;

  return {
    tooltip: {
      backgroundColor: bgColor,
      borderRadius: '.4em',
      color: textColor,
      cursor: 'default',
      display: 'inline-block',
      fontSize: '.8em',
      lineHeight: 1.6,
      maxWidth: '20em',
      padding: '.4em .6em',
      position: 'relative',
      textShadow: textShadow,
      dynamicPositioning: {
        position: 'absolute',
        left: 0,
        top: 0,
      }
    },

    caret: {
      borderColor: 'transparent',
      borderStyle: 'solid',
      content: '\\00a0',
      display: 'block',
      height: 0,
      position: 'absolute',
      width: 0,
      topTooltip: {
        borderTopColor: bgColor,
        borderWidth: '.6em .6em 0 .6em',
        bottom: '-.5em',
        left: '.7em',
      },
      rightTooltip: {
        borderRightColor: bgColor,
        borderWidth: '.6em',
        bottom: 'calc(50% - 0.6em)',
        left: '-1.1em',
      },
      bottomTooltip: {
        borderBottomColor: bgColor,
        borderWidth: '.6em',
        top: '-1.1em',
        left: '.7em',
      },
      leftTooltip: {
        borderLeftColor: bgColor,
        borderWidth: '.6em',
        bottom: 'calc(50% - 0.6em)',
        right: '-1.1em',
      },
    },

    tooltipWrapper: {
      display: 'inline-block'
    }
  };
}
