import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { nextTheme, ThemeProvider } from '@glu/theming';
import DatePicker from '../src/DatePicker';
import '../src/themeDefaults';

const Wrapper = ({ children }) => (
  <ThemeProvider baseTheme={nextTheme}>
    {children}
  </ThemeProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

describe('DatePicker', () => {
  const defaultProps = {
    rangePresets: { Today: ['2019-09-09', '2019-09-09'] },
    htmlId: 'slaanesh',
    name: 'khorne',
    rangeDelimiter: '–'
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should add show weekNumbers', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          {... defaultProps}
          {...{
            dateStart: '2019-09-06',
            dateEnd: '2019-09-11',
            weekNumbers: true
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should add show ISO weekNumbers', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          {... defaultProps}
          {...{
            dateStart: '2019-09-06',
            dateEnd: '2019-09-11',
            weekNumbers: true,
            isoWeekNumbers: true
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });
});
