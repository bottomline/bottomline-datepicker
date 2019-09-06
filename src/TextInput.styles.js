export default {
  input: {
    backgroundColor: 'inherit',
    backgroundImage: 'none',
    border: '1px solid #cccccc',
    borderRadius: 2,
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    boxSizing: 'border-box',
    color: '#333333',
    display: 'block',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    height: 34,
    padding: [5, 30, 5, 10],
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    width: '100%',
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#EDEDED',
      opacity: 1
    }
  },
  inputIcon: {
    position: 'absolute',
    right: 8,
    top: 10,
    '& svg': {
      fill: '#333333'
    }
  },
  toggle: {
    border: '0',
    background: 'transparent',
    width: 34,
    height: 34,
    position: 'absolute',
    top: -1,
    right: 3
  }
};
