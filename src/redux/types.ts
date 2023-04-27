export type IGender = {
  gender: 'male' | 'female' | 'other';
};

export type ILocation = {
  location: string;
};

export type IMainState = {
  Gender: IGender;
  Location: ILocation;
};
