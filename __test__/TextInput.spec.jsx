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

const defaultProps = {
  rangePresets: { Today: ['2019-09-09', '2019-09-09'] },
  htmlId: 'unique',
  dateStart: '2018-06-26',
  dateEnd: '2018-06-27',
  dateMin: '2000-01-01',
  dateMax: '2050-01-01'
};

describe('TextInput', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should open dropdown after clicking toggle', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} />
      </Wrapper>
    );
    const cancelButton = wrapper.find('[data-qa="toggle-button"]');
    cancelButton.simulate('click');
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should handle manual input', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} singleDatePicker labelText="Picker of Greatness" />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should set valid start date and end date to selection when singleDatePicker', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} singleDatePicker />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should set valid start to selection', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should set valid start and end to selection', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018 - 10 july 2018' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should set valid start and ignore invalid end', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018 - 10 july 3040' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should set valid start and ignore malformed end', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018 - asdf' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should not set malformed start date to selection', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} singleDatePicker />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2076' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should not apply dates if other than Enter key is pressed', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker {...defaultProps} />
      </Wrapper>
    );
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Esc' });
    expect(wrapper.find('[data-qa="date-select"]').length).toEqual(0);
  });

  it('should close dropdown if Enter pressed', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker htmlId="unique" dateMin="2000-01-01" dateMax="2050-01-01" />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('change', {
      target: { value: '4 july 2018' }
    });
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('[data-qa="date-select"]').length).toEqual(0);
  });
});
