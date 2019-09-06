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

describe('RangeSelect', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should set range after clicking on a predefined range label', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            ranges: true,
            dateStart: '2018-06-26',
            dateEnd: '2018-06-27',
            rangePresets: {
              Christmas: [
                '2017-12-20',
                '2017-12-25'
              ]
            }
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="range-select"] [data-qa="range-option-Christmas"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should show calendar when choosing ranges', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            ranges: true,
            alwaysShowCalendars: true
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="range-select"] [data-qa="range-option-Today"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should show custom range label', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            ranges: true,
            showCustomRangeLabel: true
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="range-select"] [data-qa="range-option-custom"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });
});
