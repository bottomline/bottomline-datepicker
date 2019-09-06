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

export const twentyFourToMeridiem = (hr => {
  if (hr === 0) {
    return 12;
  }
  if (hr > 12) {
    return hr - 12;
  }
  return hr;
});

export const meridiemLabelFromHour = (hr => {
  if (hr === 24) {
    return 'am';
  }
  if (hr > 11) {
    return 'pm';
  }
  return 'am';
});

const timeFromString = (string) => {
  const match = string.match(/\((.*?)\)/);
  const timeStr = match ? match[1] : '';
  const subStr = timeStr.substr(-2);

  const meridiem = (subStr === 'pm' || subStr === 'am') ? subStr : undefined;
  const segStr = meridiem ? timeStr.substr(0, timeStr.length - 2) : timeStr;
  const segments = segStr.split(':').map(seg => parseInt(seg, 10));
  const hour = segments[0] ? meridiemTo24Hour(segments[0], meridiem) : undefined;
  return {
    hour,
    minute: segments[1],
    second: segments[2]
  };
};

const dateFromString = (string) => string.replace(string.match(/\(.*?\)/), '');

export const stringToDates = (string, rangeDelimiter) => {
  // NOTE: range delimiter is passed as part of a regex pattern, therefore
  // it wont work if it is a reserved symbol like $
  const rangePatterns = ['-', '–', 'to', rangeDelimiter].map(elem => `(?<start>.*) ${elem} (?<end>.*)`);
  const dateRange = rangePatterns
    .map(pattern => string.match(new RegExp(pattern)))
    .filter(match => match)[0];
  const singleDate = string.match(/.*/)[0];
  const startString = dateRange ? dateRange.groups.start : singleDate;
  const endString = dateRange ? dateRange.groups.end : singleDate;
  const startTime = timeFromString(startString);
  const endTime = timeFromString(endString);
  const startDate = moment(new Date(dateFromString(startString)));
  const endDate = moment(new Date(dateFromString(endString)));

  startDate
    .set('hour', startTime.hour || 12)
    .set('minute', startTime.minute || 0)
    .set('second', startTime.second || 0);
  endDate
    .set('hour', endTime.hour || 12)
    .set('minute', endTime.minute || 0)
    .set('second', endTime.second || 0);

  return [
    startDate,
    endDate
  ];
};

export const formatTime = (time, timePicker24Hour, timePickerSeconds) => {
  if (timePicker24Hour) {
    if (timePickerSeconds) return time.format('HH:mm:ss');
    return time.format('HH:mm');
  }
  if (timePickerSeconds) return time.format('h:mm:ssa');
  return time.format('h:mma');
};

export const datesToString = (
  date,
  endDate,
  {
    format,
    timePicker,
    timePickerRange,
    timePickerSeconds,
    timePicker24Hour,
    rangeDelimiter
  }
) => {
  if (date) {
    if (timePickerRange) {
      if (endDate) {
        if (endDate.isSame(date, 'day')) {
          return `${date.format(format)} (${formatTime(date, timePicker24Hour, timePickerSeconds)}) ${rangeDelimiter} (${formatTime(endDate, timePicker24Hour, timePickerSeconds)})`;
        }
        return `${date.format(format)} (${formatTime(date, timePicker24Hour, timePickerSeconds)}) ${rangeDelimiter} ${endDate.format(format)} (${formatTime(endDate, timePicker24Hour, timePickerSeconds)})`;
      }
      return `${date.format(format)} (${formatTime(date, timePicker24Hour, timePickerSeconds)})`;
    }

    if (timePicker) {
      if (endDate) {
        if (endDate.isSame(date, 'day')) {
          return `${date.format(format)} (${formatTime(date, timePicker24Hour, timePickerSeconds)})`;
        }
        return `${date.format(format)} ${rangeDelimiter} ${endDate.format(format)} (${formatTime(date, timePicker24Hour, timePickerSeconds)})`;
      }
      return `${date.format(format)} (${formatTime(date, timePicker24Hour, timePickerSeconds)})`;
    }

    if (endDate) {
      if (endDate.isSame(date, 'day')) {
        return `${date.format(format)}`;
      }
      return `${date.format(format)} ${rangeDelimiter} ${endDate.format(format)}`;
    }

    return `${date.format(format)}`;
  }
  return '';
};
