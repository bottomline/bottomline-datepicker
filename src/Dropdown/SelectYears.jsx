import PropTypes from 'prop-types';
import React from 'react';
import { AccessibilityText } from '@glu/utilities-react';
import StyledSelect from './StyledSelect';

const SelectYears = ({
  yearDropdownMinYear, yearDropdownMaxYear, onChange, head
}) => {
  const years = [];
  for (let i = yearDropdownMinYear; i <= yearDropdownMaxYear; i += 1) {
    years.push(i);
  }
  return (
    <StyledSelect>
      <label htmlFor="select-year">
        <AccessibilityText>Years</AccessibilityText>
        <select
          id="select-year"
          data-qa="select-year"
          value={head.year()}
          onChange={(event) => { onChange(event.target.value); }}
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </label>
    </StyledSelect>
  );
};

SelectYears.propTypes = {
  head: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({}),
  yearDropdownMaxYear: PropTypes.number.isRequired,
  yearDropdownMinYear: PropTypes.number.isRequired
};

SelectYears.defaultProps = {
  options: {}
};

export default SelectYears;
