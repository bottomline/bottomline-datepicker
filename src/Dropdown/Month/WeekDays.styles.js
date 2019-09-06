export default ({ datepickerReact }) => ({
  headerCell: {
    color: datepickerReact.text,
    cursor: 'default',
    fontWeight: 'bold',
    height: 16,
    lineHeight: '16px',
    padding: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 27,
    ...datepickerReact.dayNames
  },
  weekHeader: {
    color: datepickerReact.weekNumber
  }
});
