import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { nextTheme, ThemeProvider } from '@glu/theming';
import Actions from '../src/Dropdown/Actions';
import '../src/themeDefaults';

const Wrapper = ({ children }) => (
  <ThemeProvider baseTheme={nextTheme}>
    {children}
  </ThemeProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

describe('Actions', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <Wrapper>
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
      </Wrapper>
    );
    const button = wrapper.find('button');
    expect(button).toMatchSnapshot();
  });

  it('should render correctly with defined dataQa', () => {
    const wrapper = mount(
      <Wrapper>
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
      </Wrapper>
    );
    const button = wrapper.find('button');
    expect(button).toMatchSnapshot();
  });
});
