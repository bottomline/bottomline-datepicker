export default function (palette, typography) {
  return ({
    border: palette.form.border,
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
    dayBorderRadius: 100,
    inputBorderRadius: 2,
    inRange: palette.text.dark,
    inRangeBackground: '#cbe4ff',
    disabledDate: 'rgba(0,0,0,0.1)',
    selected: palette.primary.normal,
    selectedText: palette.text.light,
    todayBorder: palette.primary.normal,
    weekHeader: palette.grey.G300,

    // Dropdown Icon
    dropdownIcon: {
      right: 8,
      top: 10,
      '& svg': {
        fill: palette.text.dark
      }
    },
    // Month and Year dropdown
    monthYearDropdown: {
      border: `1px solid ${palette.form.border}`
    },
    monthYearDropdownCaret: {
      top: '50%',
      left: '50%'
    },
    // Calendar wrapper
    dropdown: {
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
      padding: 20,
      background: palette.background
    },
    // Calendar wrapper chevron
    dropdownChevron: {},
    dropdownChevronUp: {},
    dropdownChevronCenter: {},
    dropdownChevronLeft: {},
    dropdownChevronRight: {},
    // Cells Wrap
    cellsWrap: {},
    dayNames: {
      fontSize: 10
    },
    // Week numbers
    weekNumber: {
      fontSize: 16,
      color: palette.grey.G300,
      lineHeight: '26px'
    },
    // Select month
    monthSelectTitle: {
      color: palette.text.dark,
      fontFamily: `"Roboto Condensed", ${typography.fontFamily}`,
      fontSize: 20,
      lineHeight: '28px',
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    monthSelectButton: {},
    monthSelectIcon: {},
    // Select day/period
    isToday: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 24,
        height: 24,
        boxShadow: `0 0 0 1px ${palette.primary.normal}`,
        borderRadius: '50%'
      }
    },
    cellButtonSpan: {
      width: 26,
      height: 26,
      lineHeight: '28px',
      fontSize: 16
    },
    period: {
      margin: [4, 'auto']
    },
    // Select time
    timepickerLabel: {
      color: palette.grey.G600,
      textTransform: 'uppercase'
    },
    timepickerWrapper: {
      border: `1px solid ${palette.form.border}`,
      backgroundColor: palette.background
    }
  });
}
