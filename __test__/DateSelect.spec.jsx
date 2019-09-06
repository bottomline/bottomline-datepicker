import React from 'react';
import { mount } from 'enzyme';

import DatePicker from '../src/DatePicker';

describe('DateSelect', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should show range on hover', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-03-26',
          dateEnd: '2018-03-28'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2018-03-20"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2018-03-22"]').simulate('mouseEnter');
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should not show range on hover after workflow is complete', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-03-26',
          dateEnd: '2018-03-28'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2018-03-20"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2018-03-22"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2018-03-23"]').simulate('mouseEnter');
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });

  it('should restart range if one already selected', () => {
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
    wrapper.find('[data-qa="calendar-day-2018-03-15"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2018-03-18"]').simulate('click');
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should change calendar position to selected month', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-05-06',
          dateEnd: '2018-06-08',
          yearDropdown: true,
          monthDropdown: true
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const currentPosition = wrapper.text().toLowerCase();
    expect(currentPosition).toContain('may');
    wrapper.find('[data-qa="select-month"]').simulate('change', {
      target: { value: 'jun' }
    });
    const nextPosition = wrapper.text().toLowerCase();
    expect(nextPosition).toContain('jun');
  });

  it('should change calendar position to selected year', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-05-06',
          dateEnd: '2018-06-08',
          yearDropdown: true,
          monthDropdown: true
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const currentPosition = wrapper.text().toLowerCase();
    expect(currentPosition).toContain('2018');
    wrapper.find('[data-qa="select-year"]').simulate('change', {
      target: { value: '2020' }
    });
    const nextPosition = wrapper.text().toLowerCase();
    expect(nextPosition).toContain('2020');
  });

  it('should change calendar position to next month', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-05-06',
          dateEnd: '2018-06-08'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const currentPosition = wrapper.text().toLowerCase();
    expect(currentPosition).toContain('may');
    const next = wrapper.find('[data-qa="next-button"]');
    next.simulate('click');
    const nextPosition = wrapper.text().toLowerCase();
    expect(nextPosition).toContain('jun');
  });

  it('should change calendar position to previous month', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-05-05',
          dateEnd: '2018-05-08',
          dateMin: '2018-03-03',
          dateMax: '2018-08-29'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const currentPosition = wrapper.text().toLowerCase();
    expect(currentPosition).toContain('may');
    const previous = wrapper.find('[data-qa="previous-button"]');
    previous.simulate('click');
    const previousPosition = wrapper.text().toLowerCase();
    expect(previousPosition).toContain('apr');
  });

  it('should change multiple calendar position to next month', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          numberOfMonths: 2,
          dateStart: '2018-05-06',
          dateEnd: '2018-06-08'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const currentPosition = wrapper.text().toLowerCase();
    expect(currentPosition).toContain('may');
    const next = wrapper.find('[data-qa="next-button"]');
    next.simulate('click');
    const nextPosition = wrapper.text().toLowerCase();
    expect(nextPosition).toContain('jun');
  });

  it('should change multiple calendar position to previous month', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          numberOfMonths: 2,
          dateStart: '2018-05-05',
          dateEnd: '2018-05-08',
          dateMin: '2018-03-03',
          dateMax: '2018-08-29'
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const currentPosition = wrapper.text().toLowerCase();
    expect(currentPosition).toContain('may');
    const previous = wrapper.find('[data-qa="previous-button"]');
    previous.simulate('click');
    const previousPosition = wrapper.text().toLowerCase();
    expect(previousPosition).toContain('apr');
  });

  it('should navigate unlinked months independently', () => {
    const wrapper = mount(
      <DatePicker
        htmlId="unique"
        {...{
          dateStart: '2018-05-06',
          dateEnd: '2018-06-08',
          numberOfMonths: 3,
          linkedCalendars: false
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const next = wrapper.find('[data-qa="first-calendar"] [data-qa="next-button"]');
    next.simulate('click');
    expect(wrapper.find('[data-qa="date-select"]').getDOMNode()).toMatchSnapshot();
  });
});
