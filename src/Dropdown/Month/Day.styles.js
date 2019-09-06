export default {
  cellButton: {
    boxSizing: 'border-box',
    background: 'transparent',
    border: 0,
    color: '#333333',
    cursor: 'pointer',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    padding: 0,
    margin: 0,
    width: 40,
    height: 40,
    position: 'relative',
    overflow: 'visible',
    '& span': {
      boxSizing: 'border-box',
      display: 'block',
      borderRadius: 100,
      margin: '0 auto',
      textAlign: 'center',
      width: 26,
      height: 26,
      lineHeight: '28px',
      fontSize: 16
    },
    '&:hover span': {
      background: '#f5f5f5',
      borderRadius: 100
    }
  },
  isToday: {
    position: 'relative',
    fontWeight: 'bold',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 24,
      height: 24,
      boxShadow: `0 0 0 1px ${'#0070B9'}`,
      borderRadius: '50%'
    }
  },
  selected: {
    '& span, &:hover span': {
      background: '#0070B9',
      borderRadius: 100,
      color: '#FFFFFF'
    }
  },
  selectStart: {
    position: 'relative',
    '&::before': {
      zIndex: -1
    },
    '& span, &:hover span': {
      borderRadius: [100, 0, 0, 100],
      width: 34,
      marginLeft: 6,
      paddingRight: 6
    }
  },
  selectEnd: {
    position: 'relative',
    '&::before': {
      zIndex: -1
    },
    '& span, &:hover span': {
      borderRadius: [0, 100, 100, 0],
      width: 34,
      marginRight: 6,
      paddingLeft: 6
    }
  },
  inRange: {
    '& span, &:hover span': {
      borderRadius: 0,
      width: '100%',
      background: '#cbe4ff',
      margin: [4, 'auto']
    }
  },
  disabled: {
    cursor: 'default',
    '& span': {
      color: 'rgba(0,0,0,0.1)'
    }
  },
  hidden: {
    '& span': {
      color: 'transparent'
    },
    '&:hover span': {
      background: 'transparent'
    }
  }
};
