import { getRandomColor } from './helpers';

const commonStyles = {
  primary: '#57c3fa',
  success: '#73BB5410',
  successText: '#73BB54',
  danger: '#ff515110',
  dangerText: '#ff5151',
  fontSize: '2vmin',
  titleSize: '4vmin',
  focus: 'rgba(255, 255, 255, 0.5)',
  active: 'rgba(255, 255, 255, 0.5)',
};

export const Themes = {
  dark: {
    primaryText: '#ffffff',
    background: '#353533',
    backgroundLight: '#484846',
    backgroundDark: '#353533',
    border: '#484846',
    ...commonStyles,
  },
  light: {
    primaryText: '#353533',
    background: '#E3E3E3',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F0F0F0',
    border: '#48484690',
    ...commonStyles,
  },
  green: {
    primaryText: '#ffffff',
    background: '#99D98C',
    backgroundLight: '#B5E48C',
    backgroundDark: '#76C893',
    border: '#52B69A',
    ...commonStyles,
  },
};

export const getRandomTheme = () => {
  return {
    primaryText: getRandomColor(),
    background: getRandomColor(),
    backgroundLight: getRandomColor(),
    backgroundDark: getRandomColor(),
    border: getRandomColor(),
    ...commonStyles,
    primary: getRandomColor(),
  };
};
