import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withKnobs } from '@storybook/addon-knobs';

const styles = {
  root: {
    padding: 60,
    margin: '2% auto'
  },

  '@global': {
    body: {
      // if we use glu.css we get a gray background so reset it here
      backgroundColor: [['#fff'], '!important']
    },
    '*': {
      // ensure this is in effect so things size properly even in situations without glu.css
      boxSizing: 'border-box'
    }
  }
};

const StoryWrapper = ({ classes, story }) => {
  const storyWithKnobs = withKnobs(story, classes);
  return (
    <div className={classes.root}>
      {storyWithKnobs}
    </div>
  );
};
StoryWrapper.propTypes = {
  story: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired
};

const StyledStoryWrapper = injectSheet(styles)(StoryWrapper);

export const withStoryWrapper = (storyFn, classes) => (
  <StyledStoryWrapper classes={classes} story={storyFn}>{storyFn()}</StyledStoryWrapper>
);

export const BareStoryWrapper = StoryWrapper;
export default StyledStoryWrapper;
