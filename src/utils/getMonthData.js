import moment from 'moment';

const getMonthData = (date, { isoWeekNumbers }) => {
  // Populate the monthDays array with an entry for each day in the current month.
  const daysInCurrMonth = moment(date).daysInMonth();
  let monthDays = new Array(daysInCurrMonth)
    .fill(0)
    .map((day, index) => moment(date).date(index + 1));

  // Offset monthDays with previous month if first weekday of the month is not the start of a week
  const firstWeekday = moment(date).startOf('month').weekday();
  const daysInPrevMonth = moment(date).subtract(1, 'month').daysInMonth();
  if (firstWeekday !== 0) { // 0 === locale start of week
    const previousMonthDays = new Array(firstWeekday)
      .fill(0)
      .map((day, index) => {
        const offset = daysInPrevMonth - (firstWeekday - (index + 1));
        return moment(date).subtract(1, 'month').date(offset);
      });
    monthDays = [
      ...previousMonthDays,
      ...monthDays
    ];
  }

  // Fill monthDays with next month if last weekday of the month is not the end of a week
  const lastWeekday = moment(date).endOf('month').weekday();
  if (lastWeekday !== 6) {
    const nextMonthDays = new Array(6 - lastWeekday)
      .fill(0)
      .map((day, index) => moment(date).add(1, 'month').date(index + 1));
    monthDays = [
      ...monthDays,
      ...nextMonthDays
    ];
  }

  // Split monthDays into weeks
  const weeks = monthDays.reduce((result, entry, index) => {
    if (index % 7 === 0) {
      result.push([]);
    }
    result[result.length - 1].push(entry);
    return result;
  }, []);

  // Assign week of the year
  const calendar = Array(weeks.length).fill(0).map((week, index) => ({
    week: isoWeekNumbers ? moment(weeks[index][0]).isoWeek() : moment(weeks[index][0]).week(),
    days: weeks[index]
  }));
  return calendar;
};

export default getMonthData;
