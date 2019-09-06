import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../src/DatePicker';

describe('DatePicker', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render component', () => {
    const wrapper = mount(<DatePicker htmlId="unique" />);
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('input')).toMatchSnapshot();
  });

  it('should close datepicker dropdown after clicking cancel', () => {
    const wrapper = mount(<DatePicker htmlId="unique" />);
    wrapper.find('input').simulate('focus');
    const cancelButton = wrapper.find('[data-qa="cancel-button"]');
    cancelButton.simulate('click');
    const dropdown = wrapper.find('[data-qa="datepicker-unique"] [data-qa="date-select"]');
    expect(dropdown.length).toEqual(0);
  });

  it('should update input with date range with autoapply', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-03-01',
          dateEnd: '2018-03-28',
          dateMin: '2010-03-03',
          dateMax: '2020-08-29',
          autoApply: true
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2018-03-20"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2018-03-22"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should update input with user text change', () => {
    const wrapper = mount(<DatePicker htmlId="blarg" />);
    const changeValue = 'bippity';
    wrapper.find('input').simulate('change', { target: { value: changeValue } });
    const inputValue = wrapper.find('input').props().value;
    expect(inputValue).toEqual(changeValue);
  });

  it('should update input with single date', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          singleDatePicker: true,
          format: 'YYYY-MM-DD',
          dateStart: '2019-06-26',
          dateEnd: '2019-06-27',
          dateMin: '2019-03-03',
          dateMax: '2019-08-29'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2019-06-11"]').simulate('click');
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual('2019-06-11');
  });

  it('should update input with date range', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-03-26',
          dateEnd: '2018-03-28',
          dateMin: '2018-03-03',
          dateMax: '2018-08-29'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2018-03-20"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2018-03-22"]').simulate('click');
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should show week numbers', () => {
    const wrapper = mount(
      <DatePicker
        dataQa="unique"
        {...{
          weekNumbers: true,
          format: 'YYYY-MM-DD'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="unique"] [data-qa="date-select"]');
    expect(dropdown.length).toEqual(1);
    expect(wrapper.find('table thead')).toMatchSnapshot();
  });
});
