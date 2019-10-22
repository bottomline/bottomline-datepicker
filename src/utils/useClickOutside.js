import { useEffect } from 'react';

const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref && ref.current && !ref.current.contains(event.target)) onClickOutside();
    };

    const handleKeyDown = (event) => {
      if (event.keyCode === 27) { // Escape
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', onClickOutside);
    };
  }, [onClickOutside, ref]);
  return ref;
};

export default useClickOutside;
