import { ColorConverter } from 'cie-colorconverter';

const converter = new ColorConverter();

const xyY = converter.XYZ_to_xyY([50.080456544802, 23.999465510573, -0.030842717841]);

console.log('xyY', xyY);
