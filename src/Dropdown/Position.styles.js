export default ({ datepickerReact }) => ({
  dropdown: {
    position: 'absolute',
    width: '100%',
    right: 0,
    top: 55,
    zIndex: 1,
    ...datepickerReact.dropdownChevron
  },
  screenReaderLabel: {
    top: 36
  },
  dropdownRight: {
    right: 0,
    ...datepickerReact.dropdownChevronRight
  },
  dropdownLeft: {
    width: 'auto',
    ...datepickerReact.dropdownChevronLeft
  },
  dropdownCenter: {
    margin: [0, -160],
    right: '50%',
    ...datepickerReact.dropdownChevronCenter
  },
  dropdownUp: {
    bottom: 40,
    top: 'auto',
    ...datepickerReact.dropdownChevronUp
  }
});
