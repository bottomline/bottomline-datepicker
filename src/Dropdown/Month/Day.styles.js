export default ({ datepickerReact }) => ({
  cellButton: {
    boxSizing: 'border-box',
    background: 'transparent',
    border: 0,
    color: datepickerReact.text,
    cursor: 'pointer',
    fontFamily: datepickerReact.fontFamily,
    padding: 0,
    margin: 0,
    width: 40,
    height: 40,
    position: 'relative',
    overflow: 'visible',
    '& span': {
      boxSizing: 'border-box',
      display: 'block',
      borderRadius: datepickerReact.dayBorderRadius,
      margin: '0 auto',
      textAlign: 'center',
      ...datepickerReact.cellButtonSpan
    },
    '&:hover span': {
      background: datepickerReact.dayHoverBackground,
      borderRadius: datepickerReact.dayBorderRadius
    }
  },
  isToday: {
    position: 'relative',
    fontWeight: 'bold',
    ...datepickerReact.isToday
  },
  selected: {
    '& span, &:hover span': {
      background: datepickerReact.selected,
      borderRadius: datepickerReact.dayBorderRadius,
      color: datepickerReact.selectedText
    }
  },
  selectStart: {
    position: 'relative',
    '&::before': {
      zIndex: -1
    },
    '& span, &:hover span': {
      borderRadius: [datepickerReact.dayBorderRadius, 0, 0, datepickerReact.dayBorderRadius],
      width: 34,
      marginLeft: 6,
      paddingRight: 6
    }
  },
  selectEnd: {
    position: 'relative',
    '&::before': {
      zIndex: -1
    },
    '& span, &:hover span': {
      borderRadius: [0, datepickerReact.dayBorderRadius, datepickerReact.dayBorderRadius, 0],
      width: 34,
      marginRight: 6,
      paddingLeft: 6
    }
  },
  inRange: {
    '& span, &:hover span': {
      borderRadius: 0,
      width: '100%',
      background: datepickerReact.inRangeBackground,
      ...datepickerReact.period
    }
  },
  disabled: {
    cursor: 'default',
    '& span': {
      color: datepickerReact.disabledDate
    }
  },
  hidden: {
    '& span': {
      color: 'transparent'
    },
    '&:hover span': {
      background: 'transparent'
    }
  }
});
