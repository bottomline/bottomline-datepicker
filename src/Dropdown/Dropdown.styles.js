export default ({ datepickerReact }) => ({
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
    ...datepickerReact.dropdown
  },
  condensed: {
    position: 'absolute',
    right: 0,
    width: '60%',
    transition: 'all .3s ease-in-out',
    background: datepickerReact.rangePanelBackground,
    borderLeft: 'transparent'
  }
});
