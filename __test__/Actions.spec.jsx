import React from 'react';
import { mount } from 'enzyme';
import Actions from '../src/Dropdown/Actions';

describe('Actions', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <Actions {...{
        onClickApply: () => {},
        onClickCancel: () => {},
        disabled: false,
        dataQa: undefined,
        buttonClasses: '',
        applyButtonClasses: '',
        cancelButtonClasses: ''
      }}
      />
    );
    const button = wrapper.find('button');
    expect(button).toMatchSnapshot();
  });

  it('should render correctly with defined dataQa', () => {
    const wrapper = mount(
      <Actions {...{
        onClickApply: () => {},
        onClickCancel: () => {},
        disabled: false,
        dataQa: 'khorne',
        buttonClasses: '',
        applyButtonClasses: '',
        cancelButtonClasses: ''
      }}
      />
    );
    const button = wrapper.find('button');
    expect(button).toMatchSnapshot();
  });
});
