import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Position.styles';

const Position = ({
  children, classes, labelText, positionY, positionX, screenReaderLabel
}) => {
  let element = useRef();
  const [openDirection, setOpenDirection] = useState();
  const [dropDirection, setDropDirection] = useState();

  useEffect(() => {
    const {
      top, left, right, height
    } = element.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    const bottomEdgePassesWindow = top + height > innerHeight;
    const spaceAboveIsGreater = top > innerHeight - top;
    const spaceLeftIsGreater = left > innerWidth - right;
    setOpenDirection(positionX);
    setDropDirection(positionY);

    if (spaceLeftIsGreater) {
      setOpenDirection('left');
    }

    if (bottomEdgePassesWindow && spaceAboveIsGreater) {
      setDropDirection('up');
    }
  }, [positionX, positionY]);

  return (
    <div
      data-qa="dropdown-position"
      ref={node => { element = node; }}
      className={classNames({
        [classes.dropdown]: true,
        [classes.dropdownLeft]: openDirection === 'left',
        [classes.dropdownCenter]: openDirection === 'center',
        [classes.dropdownUp]: dropDirection === 'up',
        [classes.screenReaderLabel]: !labelText || screenReaderLabel
      })}
    >
      {children}
    </div>
  );
};

Position.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  labelText: PropTypes.string,
  positionX: PropTypes.string,
  positionY: PropTypes.string,
  screenReaderLabel: PropTypes.bool.isRequired
};

Position.defaultProps = {
  positionY: 'right',
  positionX: 'down',
  labelText: 'undefined'
};

export default injectSheet(styles)(Position);
