export const DEFAULT_PRECISION = 5;

export const relativeDifference = (a: number, b: number) => {
  return ((b - a) / b) * 100;
};

export const formatNumber = (a: number | string, precision = DEFAULT_PRECISION) => {
  return parseFloat(`${a}`).toFixed(precision);
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
