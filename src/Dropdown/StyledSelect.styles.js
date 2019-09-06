export default {
  wrapper: {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    borderRadius: 2,
    height: 34,
    position: 'relative',
    width: 75,
    border: `1px solid ${'#CCCCCC'}`,
    '& select': {
      position: 'relative',
      zIndex: 1,
      '-moz-appearance': 'none',
      '-webkit-appearance': 'none',
      appearance: 'none',
      borderRadius: 0,
      background: 'transparent',
      border: 0,
      padding: [0, 8],
      boxSizing: 'border-box',
      lineHeight: '28px',
      fontSize: 14,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      width: '100%',
      height: '100%',
      '&::-moz-focus-inner': {
        border: 0
      },
      '&::-ms-expand': {
        display: 'none'
      },
      option: {
        fontWeight: 'normal'
      }
    }
  },
  caret: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 34,
    '& svg': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: [-8, 0, 0, -7],
      fill: '#bdbdbd'
    }
  }
};
