import PropTypes from 'prop-types';
import React from 'react';
import AccessibilityText from '../AccessibilityText';
import localeGet from '../utils/locale.js';
import StyledSelect from './StyledSelect';

const SelectMonths = ({ onChange, head }) => {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const selectedMonth = head.format('MMM').toLowerCase();
  return (
    <StyledSelect>
      <label htmlFor="select-month">
        <AccessibilityText>Months</AccessibilityText>
        <select
          id="select-month"
          data-qa="select-month"
          onChange={(event) => { onChange(event.target.value); }}
          value={selectedMonth}
        >
          {months.map(month => (
            <option key={month} value={month}>{localeGet(month)}</option>
          ))}
        </select>
      </label>
    </StyledSelect>
  );
};

SelectMonths.propTypes = {
  onChange: PropTypes.func.isRequired,
  head: PropTypes.shape({}).isRequired
};

export default SelectMonths;
