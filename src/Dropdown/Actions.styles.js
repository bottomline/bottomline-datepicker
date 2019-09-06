export default ({ datepickerReact }) => ({
  actions: {
    fontFamily: datepickerReact.fontFamily
  },
  cancelButton: {
    background: 'transparent',
    border: 'none',
    color: datepickerReact.cancelButtonColor,
    cursor: 'pointer',
    fontFamily: `"Roboto Condensed", ${datepickerReact.fontFamily}`,
    fontSize: 16,
    height: 22,
    lineHeight: '22px',
    margin: [0, 0, 0, 10],
    padding: [0, 10],
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:disabled': {
      background: datepickerReact.cancelButtonColorDisabled
    },
    '&:disabled:hover': {
      background: datepickerReact.cancelButtonColorDisabled,
      cursor: 'default'
    }
  }
});
