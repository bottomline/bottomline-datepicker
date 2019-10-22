import React, { useRef } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import useClickOutside from '../src/utils/useClickOutside.js';

const onClickOutside = jest.fn();
const TestComponent = () => {
  const inside = useRef();
  useClickOutside(inside, onClickOutside);

  return (
    <>
      <div>Outside</div>
      <div ref={inside}>Inside</div>
    </>
  );
};

describe('useClickOutside', () => {
  beforeEach(() => {
    cleanup();
    onClickOutside.mockClear();
  });

  it('should call onClickOutside when clicking outside', () => {
    const { getByText } = render(<TestComponent />);
    fireEvent.mouseDown(getByText('Outside'));
    expect(onClickOutside).toHaveBeenCalled();
  });

  it('should not call onClickOutside when clicking inside', () => {
    const { getByText } = render(<TestComponent />);
    fireEvent.mouseDown(getByText('Inside'));
    expect(onClickOutside).not.toHaveBeenCalled();
  });

  it('should not call onClickOutside when a key other than Escape is pressed', () => {
    const { getByText } = render(<TestComponent />);
    fireEvent.keyDown(getByText('Inside'), { key: 'Enter', code: 13 });
    expect(onClickOutside).not.toHaveBeenCalled();
  });

  it('should call onClickOutside when a Escape is pressed', () => {
    const { getByText } = render(<TestComponent />);
    fireEvent.keyDown(getByText('Inside'), { keyCode: 27 });
    expect(onClickOutside).toHaveBeenCalled();
  });

  it('should call onClickOutside when a Escape is pressed', () => {
    const { getByText } = render(<TestComponent />);
    fireEvent.keyDown(getByText('Outside'), { keyCode: 27 });
    expect(onClickOutside).toHaveBeenCalled();
  });

  it('should not call onClickOutside when other than Escape is pressed', () => {
    const { getByText } = render(<TestComponent />);
    fireEvent.keyDown(getByText('Outside'), { keyCode: 2 });
    expect(onClickOutside).not.toHaveBeenCalled();
  });
});
