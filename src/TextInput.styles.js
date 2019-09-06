export default ({ datepickerReact }) => ({
  input: {
    borderRadius: datepickerReact.inputBorderRadius,
    border: `1px solid ${datepickerReact.border}`,
    boxSizing: 'border-box',
    color: datepickerReact.text,
    fontFamily: datepickerReact.fontFamily,
    fontSize: 14,
    height: 34,
    padding: [5, 30, 5, 10],
    width: '100%'
  },
  inputWrapper: {
    '& input': {
      boxSizing: 'border-box'
    }
  },
  inputIcon: {
    position: 'absolute',
    ...datepickerReact.dropdownIcon
  },
  toggle: {
    border: '0',
    background: 'transparent',
    width: 34,
    height: 34,
    position: 'absolute',
    top: 19,
    right: 3
  },
  screenReaderLabel: {
    top: -1
  }

});
