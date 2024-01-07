export enum ITheme {
  Dark = 'dark',
  Light = 'light',
  Green = 'green',
}

export type IThemes = {
  [key in ITheme]: IThemeProps;
};

export interface ICommonProps {
  primary: string;
  success: string;
  successText: string;
  danger: string;
  dangerText: string;
  descriptionSize: string;
  fontSize: string;
  titleSize: string;
  focus: string;
  active: string;
  topBarHeight: string;
  bottomBarHeight: string;
  mainFrameContainerHeight: string;
  fontFamily: string;
  borderRadius: string;
  devices: {
    mobile: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
  };
}

export interface IThemeProps extends ICommonProps {
  primaryTextColor: string;
  background: string;
  backgroundLight: string;
  backgroundDark: string;
  border: string;
}
