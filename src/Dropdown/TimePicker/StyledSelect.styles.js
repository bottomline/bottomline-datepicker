export default {
  wrapper: {
    borderRadius: 2,
    boxSizing: 'border-box',
    display: 'inline-block',
    height: 28,
    marginRight: 1,
    position: 'relative',
    border: `1px solid ${'#CCCCCC'}`,
    backgroundColor: '#FFFFFF',
    '& select': {
      position: 'relative',
      zIndex: 1,
      '-moz-appearance': 'none',
      '-webkit-appearance': 'none',
      appearance: 'none',
      borderRadius: 0,
      background: 'transparent',
      border: 0,
      padding: [0, 6],
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
  }
};
