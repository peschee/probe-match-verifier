declare module '*.scss';

type RGBW = Array<Array<number>>;

type XYZ = {
  X: number;
  Y: number;
  Z: number;
};

type xyY = {
  x: number;
  y: number;
  Y: number;
};

type BscPatch = {
  results: {
    XYZ: XYZ;
  };
  stimuli: {
    red: number;
    green: number;
    blue: number;
  };
};

type xyYErrors = {
  red: xyY;
  green: xyY;
  blue: xyY;
  white: xyY;
};
