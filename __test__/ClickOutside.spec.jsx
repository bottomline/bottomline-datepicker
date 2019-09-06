import React from 'react';
import PropTypes from 'prop-types';
import {
  mount
} from 'enzyme';
import {
  nextTheme,
  ThemeProvider
} from '@glu/theming';
import ClickOutside from '../src/ClickOutside';
import '../src/themeDefaults';

const Wrapper = ({
  children
}) => <ThemeProvider baseTheme={nextTheme}>{children}</ThemeProvider>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

describe('ClickOutside', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should handle outside click', () => {
    const spy = jest.fn();
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = mount(
      <Wrapper>
        <div>
          <div id="outside">Outside</div>
          <ClickOutside onClickOutside={spy}>
            <div>Inside</div>
          </ClickOutside>
        </div>
      </Wrapper>
    );
    map.click({ target: wrapper.find('#outside') });
    expect(spy).toBeCalled();
  });

  it('should handle escape keypress', () => {
    const spy = jest.fn();
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = mount(
      <Wrapper>
        <div>
          <div id="outside">Outside</div>
          <ClickOutside onClickOutside={spy}>
            <div>Inside</div>
          </ClickOutside>
        </div>
      </Wrapper>
    );
    map.keydown({ keyCode: 27, target: wrapper.find('#outside') });
    expect(spy).toBeCalled();
  });

  it('should handle keypress other than escape', () => {
    const spy = jest.fn();
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = mount(
      <Wrapper>
        <div>
          <div id="outside">Outside</div>
          <ClickOutside onClickOutside={spy}>
            <div>Inside</div>
          </ClickOutside>
        </div>
      </Wrapper>
    );
    map.keydown({ keyCode: 1, target: wrapper.find('#outside') });
    expect(spy).not.toHaveBeenCalled();
  });

  it('should handle inside click', () => {
    const spy = jest.fn();
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = mount(
      <Wrapper>
        <div>
          <div>Outside</div>
          <ClickOutside onClickOutside={spy}>
            <div id="inside">Inside</div>
          </ClickOutside>
        </div>
      </Wrapper>
    );
    map.click({ target: wrapper.find('inside') });
    expect(spy).not.toBeCalled();
  });
});
