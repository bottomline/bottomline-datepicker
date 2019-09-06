import {
  isAfter, isBefore, isValidSelection, inRange
} from '../src/utils/dateCompare.js';

describe('dateCompare', () => {
  it('isAfter', () => {
    const result = isAfter('2019-12-08', '2019-08-07');
    expect(result).toBe(true);
  });

  it('isBefore', () => {
    const result = isBefore('2019-03-08', '2019-08-08');
    expect(result).toBe(true);
  });

  it('inRange', () => {
    const result = inRange('2019-06-26', '2019-01-01', '2019-08-08');
    expect(result).toBe(true);
  });

  describe('isValidSelection', () => {
    it('has minDate and maxDate', () => {
      const result = isValidSelection('2019-06-26', ['2001-09-11', '2020-09-11']);
      expect(result).toBe(true);
    });
  });
});
