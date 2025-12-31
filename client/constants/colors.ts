// constants/colors.js
const coffeeTheme: ThemeColors = {
  primary: '#8B593E',
  background: '#FFF8F3',
  text: '#4A3428',
  border: '#E5D3B7',
  white: '#FFFFFF',
  textLight: '#9A8478',
  expense: '#E74C3C',
  income: '#2ECC71',
  card: '#FFFFFF',
  shadow: '#000000',
};

const forestTheme: ThemeColors = {
  primary: '#2E7D32',
  background: '#E8F5E9',
  text: '#1B5E20',
  border: '#C8E6C9',
  white: '#FFFFFF',
  textLight: '#66BB6A',
  expense: '#C62828',
  income: '#388E3C',
  card: '#FFFFFF',
  shadow: '#000000',
};

const purpleTheme: ThemeColors = {
  primary: '#6A1B9A',
  background: '#F3E5F5',
  text: '#4A148C',
  border: '#D1C4E9',
  white: '#FFFFFF',
  textLight: '#BA68C8',
  expense: '#D32F2F',
  income: '#388E3C',
  card: '#FFFFFF',
  shadow: '#000000',
};

const oceanTheme: ThemeColors = {
  primary: '#0277BD',
  background: '#E1F5FE',
  text: '#01579B',
  border: '#B3E5FC',
  white: '#FFFFFF',
  textLight: '#4FC3F7',
  expense: '#EF5350',
  income: '#26A69A',
  card: '#FFFFFF',
  shadow: '#000000',
};

export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
} as const;

/** Union type: "coffee" | "forest" | "purple" | "ocean" */
export type ThemeName = keyof typeof THEMES;

/** 👇 Change this value to switch themes (100% type-safe) */
export const CURRENT_THEME: ThemeName = 'coffee';

/** Active colors */
export const COLORS: ThemeColors = THEMES[CURRENT_THEME];
