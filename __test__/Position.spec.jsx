import React from 'react';
import { mount } from 'enzyme';
import Position from '../src/Dropdown/Position';

describe('Position', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should change position based on window', () => {
    window.innerHeight = 500;
    window.innerWidth = 600;
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 120,
      height: 120,
      top: 500,
      left: -100,
      bottom: 0,
      right: 0
    }));
    const wrapper = mount(
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 'auto',
        right: 'auto'
      }}
      >
        <Position screenReaderLabel>
          <div>Children</div>
        </Position>
      </div>
    );
    expect(wrapper.find('[data-qa="dropdown-position"]')).toMatchSnapshot();
  });

  it('should change position when spaceLeftIsGreater', () => {
    window.innerHeight = 500;
    window.innerWidth = 600;
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 120,
      height: 120,
      top: 500,
      left: 700,
      bottom: 0,
      right: 0
    }));
    const wrapper = mount(
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 'auto',
        right: 'auto'
      }}
      >
        <Position screenReaderLabel>
          <div>Children</div>
        </Position>
      </div>
    );
    expect(wrapper.find('[data-qa="dropdown-position"]')).toMatchSnapshot();
  });
});
