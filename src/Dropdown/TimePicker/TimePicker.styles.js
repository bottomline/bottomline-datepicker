export default ({ datepickerReact }) => ({
  timepicker: {
    float: 'right'
  },
  timepickerLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: '16px',
    marginTop: 4,
    ...datepickerReact.timepickerLabel
  }
});
