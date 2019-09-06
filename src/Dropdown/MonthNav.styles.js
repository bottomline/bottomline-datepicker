export default {
  header: {
    margin: [4, 0, 20, 0],
    padding: [0, 20],
    position: 'relative'
  },
  screenReaderText: {
    border: 0,
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
    wordWrap: 'normal !important'
  },
  title: {
    color: '#333333',
    fontFamily: `"Roboto Condensed", ${'Roboto, Helvetica, Arial, sans-serif'}`,
    fontSize: 20,
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  button: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    height: 34,
    position: 'absolute',
    top: 0,
    width: '14%',
    '& svg': {
      fill: '#333333',
      left: '50%',
      marginLeft: -9,
      marginTop: -8,
      position: 'absolute',
      top: '50%'
    },
    '&:hover svg': {
      fill: '#6E6E6E'
    }
  },
  prev: {
    left: 0
  },
  next: {
    right: 0
  },
  select: {
    display: 'inline-block',
    margin: [0, 5],
    verticalAlign: 'middle'
  }
};
