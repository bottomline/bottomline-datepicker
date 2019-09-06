export default {
  rangesLayout: {
    position: 'relative'
  },
  layout: {
    display: 'flex'
  },
  dateSelect: {
    position: 'absolute',
    right: 0
  },
  offset: {
    opacity: 0,
    position: 'absolute',
    right: '55%',
    top: 0,
    transition: 'all .3s ease-in-out'
  },
  visible: {
    opacity: 1
  },
  rangeSelect: {
    right: 0,
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-in-out',
    width: '100%',
    zIndex: -1,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
    padding: 20,
    background: '#FFFFFF'
  },
  condensed: {
    position: 'absolute',
    right: 0,
    width: '60%',
    transition: 'all .3s ease-in-out',
    background: '#F2F2F2',
    borderLeft: 'transparent'
  }
};
