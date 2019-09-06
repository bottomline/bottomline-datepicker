export default function (palette, typography) {
  return ({
    border: palette.accent,
    background: palette.background,
    cancelButtonColor: palette.primary.normal,
    cancelButtonColorDisabled: palette.grey.G300,
    cancelButtonColorHover: palette.primary.light,
    fontFamily: typography.fontFamily,
    iconFill: palette.text.dark,
    iconFillHover: palette.text.midGray,
    text: palette.text.dark,
    // Range Panel
    rangePanelBackground: palette.highlightBackground,
    rangePanelBorder: palette.form.border,
    // Calendar Days
    dayHoverBackground: palette.grey.G100,
    dayBorderRadius: 4,
    inputBorderRadius: 4,
    inRange: palette.text.dark,
    inRangeBackground: '#cbe4ff',
    disabledDate: 'rgba(0,0,0,0.1)',
    selected: palette.primary.normal,
    selectedText: palette.text.light,
    todayBorder: palette.primary.normal,
    weekHeader: palette.grey.G300,

    // Dropdown Icon
    dropdownIcon: {
      top: 10,
      right: -30
    },
    // Month and Year dropdown
    monthYearDropdown: {
      border: `1px solid ${palette.accent}`,
      borderRadius: 4
    },
    monthYearDropdownCaret: {
      top: 19,
      left: 19,
      width: 13,
      height: 13
    },
    // Calendar wrapper
    dropdown: {
      padding: 10,
      marginTop: 6,
      background: palette.background,
      border: `1px solid ${palette.accent}`,
      borderRadius: 4
    },
    // Calendar wrapper chevron
    dropdownChevron: {
      '&::before': {
        content: '""',
        display: 'block',
        transform: 'rotate(45deg)',
        width: 8,
        height: 8,
        border: `solid ${palette.accent}`,
        borderWidth: '1px 0 0 1px',
        position: 'absolute',
        left: 12,
        top: 2,
        bottom: 'auto',
        right: 'auto',
        background: palette.background,
        zIndex: 1
      }
    },
    dropdownChevronUp: {
      '&::before': {
        transform: 'rotate(-135deg)',
        left: 12,
        bottom: -4,
        top: 'auto',
        right: 'auto'
      }
    },
    dropdownChevronCenter: {
      '&::before': {
        display: 'none'
      }
    },
    dropdownChevronLeft: {
      '&::before': {
        display: 'none'
      }
    },
    dropdownChevronRight: {
      '&::before': {
        display: 'none'
      }
    },
    // Cells Wrap
    cellsWrap: {
      '& thead tr:first-child td': {
        paddingBottom: 15
      }
    },
    dayNames: {
      fontSize: 12
    },
    // Week numbers
    weekNumber: {
      fontSize: 12,
      color: palette.grey.G300,
      lineHeight: '19px'
    },
    // Select month
    monthSelectTitle: {
      fontSize: 14,
      lineHeight: '28px',
      textAlign: 'center',
      textTransform: 'initial',
      fontWeight: 'bold'
    },
    monthSelectButton: {
      '&:hover': {
        backgroundColor: palette.grey.G200,
        borderRadius: 4
      }
    },
    monthSelectIcon: {
      width: 12,
      height: 12,
      marginTop: -6
    },
    // Select day/period
    isToday: {
      '&::before': {
        content: '""',
        position: 'absolute',
        height: 40,
        width: 40,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: `0 0 0 1px ${palette.primary.normal}`,
        borderRadius: 4
      }
    },
    cellButtonSpan: {
      bottom: 0,
      margin: '0 auto',
      height: 40,
      width: 40,
      lineHeight: '36px',
      fontSize: 12,
      borderRadius: 4,
      position: 'absolute'
    },
    period: {
      margin: 0
    },
    // Select time
    selectBorder: 'none',
    borderRadius: 4,
    timepickerLabel: {},
    timepickerWrapper: {
      border: 'none',
      backgroundColor: palette.grey.G200,
      '& select option': {
        backgroundColor: palette.grey.G200
      }
    }
  });
}
