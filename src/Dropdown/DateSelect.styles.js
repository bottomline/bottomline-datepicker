export default ({ datepickerReact }) => ({
  dropdown: {
    ...datepickerReact.dropdown
  },
  weekNumbers: {
    padding: [20, 10]
  },
  calendars: {
    display: 'flex',
    margin: [0, -20, 0, 0]
  },
  calendar: {
    margin: [0, 20, 0, 0]
  },
  row: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: [16, 0, 0, 0]
  }
});
