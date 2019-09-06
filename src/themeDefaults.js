/* istanbul ignore file */
import { registerDefaultsForModule } from '@glu/theming';
import legacy from './themes/legacyTheme';
import ash from './themes/ashTheme';

const themes = { ash, legacy };

registerDefaultsForModule(
  'datepickerReact', ({ palette, typography, name }) => themes[name](palette, typography)
);
