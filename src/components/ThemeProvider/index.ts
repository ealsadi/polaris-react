import ThemeProvider from './ThemeProvider';

export {
  Theme,
  ThemeContext,
  ThemeProviderContext as Context,
  ColorsToParse,
  ThemeVariant,
  ThemeColors,
  THEME_CONTEXT_TYPES,
  ComponentThemeProperties,
} from './types';
export {
  setColors,
  needsVariant,
  setTextColor,
  createThemeContext,
  setTheme,
  reduceTheme,
} from './utils';
export {Props} from './ThemeProvider';
export default ThemeProvider;
