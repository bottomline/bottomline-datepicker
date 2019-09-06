import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ClickOutside = ({
  children, onClickOutside
}) => {
  const node = useRef();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) { // Escape
        onClickOutside();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.addEventListener('keydown', handleKeyDown);
    };
  }, [onClickOutside]);

  useEffect(() => {
    const handleClick = e => {
      if (e.target.contains(node.current)) onClickOutside();
    };
    window.addEventListener('resize', onClickOutside);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', onClickOutside);
      document.removeEventListener('click', handleClick);
    };
  }, [onClickOutside]);

  return (
    <div ref={node}>{children}</div>
  );
};

ClickOutside.propTypes = {
  children: PropTypes.node.isRequired,
  inputEl: PropTypes.shape({}),
  onClickOutside: PropTypes.func.isRequired
};

ClickOutside.defaultProps = {
  inputEl: undefined
};

export default ClickOutside;
