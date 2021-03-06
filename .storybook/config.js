import { addParameters, configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import theme from './theme';

addDecorator(withA11y);

addParameters({
  options: {theme}
});


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
