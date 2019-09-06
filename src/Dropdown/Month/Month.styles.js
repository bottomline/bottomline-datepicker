export default ({ datepickerReact }) => ({
  calendar: {
    borderCollapse: 'collapse',
    fontFamily: datepickerReact.fontFamily,
    margin: 0,
    ...datepickerReact.cellsWrap,
    '& td': {
      padding: 0,
      margin: 0,
      position: 'relative'
    }
  },
  headerCell: {
    color: datepickerReact.text,
    cursor: 'default',
    fontSize: 10,
    fontWeight: 'bold',
    height: 16,
    lineHeight: '16px',
    padding: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 27
  },
  weekHeader: {
    color: datepickerReact.weekHeader
  },
  weekCell: {
    background: 'transparent',
    border: 0,
    cursor: 'default',
    fontFamily: datepickerReact.fontFamily,
    padding: 4,
    width: '100%',
    '& span': {
      border: '1px solid transparent',
      display: 'block',
      height: 25,
      margin: '0 auto',
      textAlign: 'center',
      width: 25,
      ...datepickerReact.weekNumber
    }
  }
});
