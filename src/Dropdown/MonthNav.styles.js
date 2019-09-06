export default ({ datepickerReact }) => ({
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
    ...datepickerReact.monthSelectTitle
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
    ...datepickerReact.monthSelectButton,
    '& svg': {
      fill: datepickerReact.iconFill,
      left: '50%',
      marginLeft: -9,
      marginTop: -8,
      position: 'absolute',
      top: '50%',
      ...datepickerReact.monthSelectIcon
    },
    '&:hover svg': {
      fill: datepickerReact.iconFillHover
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
});
