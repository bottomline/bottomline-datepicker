/* eslint-disable import/no-extraneous-dependencies */
import locale from '@glu/locale';
import localeStrings from '../src/locale/defaultStrings_en_US';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

locale.set(localeStrings);
Enzyme.configure({ adapter: new Adapter() });
