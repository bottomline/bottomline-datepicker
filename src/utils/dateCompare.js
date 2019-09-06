import moment from 'moment';
// Moment defensively cloning arguments
// Also can accept ISO time string

const toMs = (date) => moment(date).valueOf(); // convert time to Unix ms timestamp

export const inRange = (date, start, end) => {
  if (start && end) {
    return toMs(date) > toMs(start) && toMs(date) < toMs(end);
  }
  return false;
};

export const isAfter = (compare, point) => toMs(compare) > toMs(point);

export const isBefore = (compare, point) => toMs(compare) < toMs(point);

export const isValidSelection = (date, [start, end]) => inRange(date, start, end);
