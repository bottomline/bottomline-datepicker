import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider, withStyles, nextTheme, legacyTheme
} from '@glu/theming';
import { withKnobs, select } from '@storybook/addon-knobs';

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

const options = ['Ash', 'Legacy'];

const StoryWrapper = ({ classes, story }) => {
  const selected = select('Theme', options, legacyTheme);
  const baseTheme = selected === 'Legacy' ? legacyTheme : nextTheme;
  const storyWithKnobs = withKnobs(story, classes);
  return (
    <ThemeProvider baseTheme={baseTheme}>
      <div className={classes.root}>
        {storyWithKnobs}
      </div>
    </ThemeProvider>
  );
};
StoryWrapper.propTypes = {
  story: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired
};

const StyledStoryWrapper = withStyles(styles)(StoryWrapper);

export const withStoryWrapper = (storyFn, classes) => (
  <StyledStoryWrapper classes={classes} story={storyFn}>{storyFn()}</StyledStoryWrapper>
);

export const BareStoryWrapper = StoryWrapper;
export default StyledStoryWrapper;
