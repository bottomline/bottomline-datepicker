export default {
  calendar: {
    borderCollapse: 'collapse',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    margin: 0,
    '& td': {
      padding: 0,
      margin: 0,
      position: 'relative'
    }
  },
  headerCell: {
    color: '#333333',
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
    color: '#e0e0e0'
  },
  weekCell: {
    background: 'transparent',
    border: 0,
    cursor: 'default',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    padding: 4,
    width: '100%',
    '& span': {
      border: '1px solid transparent',
      display: 'block',
      height: 25,
      margin: '0 auto',
      textAlign: 'center',
      width: 25,
      fontSize: 16,
      color: '#e0e0e0',
      lineHeight: '26px'
    }
  }
};
