export default ({ datepickerReact }) => ({
  root: {
    padding: [10, 0]
  },
  option: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: [8, 14],
    fontSize: 14,
    lineHeight: '16px',
    fontFamily: datepickerReact.fontFamily,
    color: datepickerReact.text,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});
