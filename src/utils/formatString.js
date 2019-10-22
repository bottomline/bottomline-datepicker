import moment from 'moment';

export const meridiemTo24Hour = (hr, mer) => {
  if (mer === 'pm') {
    if (hr === 12) {
      return 12;
    }
    return hr + 12;
  }
  if (mer === 'am' && hr === 12) {
    return 0;
  }
  return hr;
};

export const twentyFourToMeridiem = hr => {
  if (hr === 0) {
    return 12;
  }
  if (hr > 12) {
    return hr - 12;
  }
  return hr;
};

export const meridiemLabelFromHour = hr => {
  if (hr === 24) {
    return 'am';
  }
  if (hr > 11) {
    return 'pm';
  }
  return 'am';
};

export const stringToDates = (string, rangeDelimiter, format) => {
  const dateStrings = rangeDelimiter ? string.split(rangeDelimiter) : [string, string];
  return (dateStrings.length === 2 ? dateStrings : [string, string]).map(s => moment(s, format && typeof format === 'function' ? undefined : format));
};

export const formatTime = (time, timePicker24Hour, timePickerSeconds) => {
  if (timePicker24Hour) {
    if (timePickerSeconds) return time.format('HH:mm:ss');
    return time.format('HH:mm');
  }
  if (timePickerSeconds) return time.format('h:mm:ssa');
  return time.format('h:mma');
};

export const datesToString = (date, endDate, { format, rangeDelimiter }) => {
  /** Allows the user to provide any format they want */
  if (format && typeof format === 'function') {
    return format(date, endDate);
  }
  if ((date && !endDate) || (endDate && endDate.isSame(date, 'day'))) {
    /**
     * if date has time you can use moment to format it
     * @example format = 'MM/DD/YYYY h:mmA';
     */
    return date.format(format);
  }
  if (date && endDate) {
    /** default prop for range delimiter is ' - ' */
    return `${date.format(format)}${rangeDelimiter}${endDate.format(format)}`;
  }
  return '';
};
