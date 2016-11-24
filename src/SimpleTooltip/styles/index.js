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
      borderTopColor: bgColor,
      borderWidth: '5px 5px 0',
      bottom: '-5px',
      content: '\\00a0',
      display: 'block',
      height: 0,
      left: '.8em',
      marginLeft: '-5px',
      position: 'absolute',
      width: 0,
    },
  };
}
