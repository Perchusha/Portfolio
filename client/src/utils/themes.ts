import { ICommonProps, IThemes } from '../types';

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const commonStyles: ICommonProps = {
  primary: '#57c3fa',
  success: '#73BB5410',
  successText: '#73BB54',
  danger: '#ff515110',
  dangerText: '#ff5151',
  descriptionSize: '1.5vmin',
  fontSize: '2vmin',
  titleSize: '5vmin',
  focus: 'rgba(255, 255, 255, 0.3)',
  active: 'rgba(255, 255, 255, 0.4)',
  topBarHeight: '8vmin',
  bottomBarHeight: '8vmin',
  mainFrameContainerHeight: 'calc(100% - 8vmin - 8vmin)',
  fontFamily: 'Manrope, serif',
  borderRadius: '0.6vmin',
  devices: {
    mobile: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desktop: '(min-width: 2560px)',
  },
};

export const Themes: IThemes = {
  dark: {
    primaryTextColor: '#ffffff',
    background: '#353533',
    backgroundLight: '#484846',
    backgroundDark: '#252522',
    border: '#484846',
    ...commonStyles,
  },
  light: {
    primaryTextColor: '#353533',
    background: '#E3E3E3',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F0F0F0',
    border: '#48484690',
    ...commonStyles,
  },
  green: {
    primaryTextColor: '#ffffff',
    background: '#99D98C',
    backgroundLight: '#B5E48C',
    backgroundDark: '#76C893',
    border: '#52B69A',
    ...commonStyles,
  },
};

export const getRandomTheme = () => {
  return {
    primaryTextColor: getRandomColor(),
    background: getRandomColor(),
    backgroundLight: getRandomColor(),
    backgroundDark: getRandomColor(),
    border: getRandomColor(),
    ...commonStyles,
    primary: getRandomColor(),
  };
};
