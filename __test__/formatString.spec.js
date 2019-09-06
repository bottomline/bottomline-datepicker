import moment from 'moment';
import {
  datesToString,
  stringToDates,
  meridiemTo24Hour,
  twentyFourToMeridiem,
  meridiemLabelFromHour,
  formatTime
} from '../src/utils/formatString.js';

describe('formatTime', () => {
  const date = moment('2019-06-26').set('hour', 16).set('minute', 20).set('second', 30);

  it('should output 24 hour format correctly', () => {
    expect(formatTime(date, true, false)).toBe('16:20');
  });

  it('should output 24 hour format with seconds correctly', () => {
    expect(formatTime(date, true, true)).toBe('16:20:30');
  });

  it('should output time correctly', () => {
    expect(formatTime(date, false, false)).toBe('4:20pm');
  });

  it('should output time with seconds correctly', () => {
    expect(formatTime(date, false, true)).toBe('4:20:30pm');
  });
});

describe('datesToString', () => {
  const date = moment('2019-06-26').set('hour', 16).set('minute', 20).set('second', 30);
  const endDate = moment('2019-06-30').set('hour', 16).set('minute', 20).set('second', 30);
  const defaultProps = {
    rangePresets: { Today: ['2019-09-09', '2019-09-09'] },
    rangeDelimiter: '–',
    format: 'YYYY-MM-DD'
  };

  it('should convert dates to a string', () => {
    const props = { ...defaultProps };
    expect(datesToString(date, endDate, props)).toBe('2019-06-26 – 2019-06-30');
  });

  it('should convert dates to a string (seconds)', () => {
    const props = { ...defaultProps, timePickerSeconds: true };
    expect(datesToString(date, endDate, props)).toBe('2019-06-26 – 2019-06-30');
  });

  it('should convert dates to a string when end date is undefined', () => {
    const props = { ...defaultProps };
    expect(datesToString(date, undefined, props)).toBe('2019-06-26');
  });

  it('should format time (timePicker)', () => {
    const props = {
      ...defaultProps,
      timePicker: true
    };
    expect(datesToString(date, endDate, props)).toBe('2019-06-26 – 2019-06-30 (4:20pm)');
  });

  it('should format time (timePicker, seconds, no end date)', () => {
    const props = {
      ...defaultProps,
      timePicker: true,
      timePickerSeconds: true
    };
    expect(datesToString(date, undefined, props)).toBe('2019-06-26 (4:20:30pm)');
  });

  it('should format time (timePickerRange)', () => {
    const props = {
      ...defaultProps,
      timePickerRange: true
    };
    expect(datesToString(date, endDate, props)).toBe('2019-06-26 (4:20pm) – 2019-06-30 (4:20pm)');
  });

  it('should format time (timePickerRange, seconds, no end date)', () => {
    const props = {
      ...defaultProps,
      timePickerRange: true,
      timePickerSeconds: true
    };
    expect(datesToString(date, undefined, props)).toBe('2019-06-26 (4:20:30pm)');
  });
});

describe('stringToDates', () => {
  it('should understand start date', () => {
    const [start, end] = stringToDates('6 Sep 2001', undefined);
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 12:00:00pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 12:00:00pm');
  });

  it('should understand start and end dates', () => {
    const [start, end] = stringToDates('6 Sep 2001 – 11 Sep 2001', '–');
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 12:00:00pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-11 12:00:00pm');
  });

  it('should understand custom delimiter', () => {
    const [start, end] = stringToDates('6 Sep 2001 –––– 11 Sep 2001', '––––');
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 12:00:00pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-11 12:00:00pm');
  });

  it('should understand time from start date', () => {
    const [start, end] = stringToDates('6 Sep 2001 (4:20:30pm)', undefined);
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 16:20:30pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 16:20:30pm');
  });

  it('should understand time from start and end date', () => {
    const [start, end] = stringToDates('6 Sep 2001 (4:20:30pm) - 6 Sep 2001 (2:10:20)', '-');
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 16:20:30pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 02:10:20am');
  });

  it('should understand 24 hour time', () => {
    const [start, end] = stringToDates('6 Sep 2001 (18:13) - 6 Sep 2001 (18:15)', '-');
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 18:13:00pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 18:15:00pm');
  });

  it('should understand meridiem time', () => {
    const [start, end] = stringToDates('6 Sep 2001 (3:13pm) - 6 Sep 2001 (2:15am)', '-');
    expect(start.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 15:13:00pm');
    expect(end.format('YYYY-MM-DD HH:mm:ssa')).toBe('2001-09-06 02:15:00am');
  });
});

describe('meridiemTo24Hour', () => {
  it('should convert meridiem hours to 24 correctly', () => {
    expect(meridiemTo24Hour(1, 'am')).toBe(1);
    expect(meridiemTo24Hour(1, 'pm')).toBe(13);
    expect(meridiemTo24Hour(12, 'am')).toBe(0);
    expect(meridiemTo24Hour(12, 'pm')).toBe(12);
    expect(meridiemTo24Hour(5, 'am')).toBe(5);
    expect(meridiemTo24Hour(5, 'pm')).toBe(17);
    expect(meridiemTo24Hour(5, 'pm')).toBe(17);
  });
});

describe('twentyFourToMeridiem', () => {
  it('should convert 24 hours time to medridiem correctly', () => {
    expect(twentyFourToMeridiem(0)).toBe(12);
    expect(twentyFourToMeridiem(1)).toBe(1);
    expect(twentyFourToMeridiem(10)).toBe(10);
    expect(twentyFourToMeridiem(12)).toBe(12);
    expect(twentyFourToMeridiem(13)).toBe(1);
    expect(twentyFourToMeridiem(17)).toBe(5);
    expect(twentyFourToMeridiem(24)).toBe(12);
  });
});

describe('meridiemLabelFromHour', () => {
  it('should convert 24 hours time to medridiem label correctly', () => {
    expect(meridiemLabelFromHour(0)).toBe('am');
    expect(meridiemLabelFromHour(1)).toBe('am');
    expect(meridiemLabelFromHour(10)).toBe('am');
    expect(meridiemLabelFromHour(12)).toBe('pm');
    expect(meridiemLabelFromHour(13)).toBe('pm');
    expect(meridiemLabelFromHour(17)).toBe('pm');
    expect(meridiemLabelFromHour(24)).toBe('am');
  });
});
