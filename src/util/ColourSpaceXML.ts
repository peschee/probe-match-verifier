import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { XYZToxyY } from 'cie-colorconverter';

export type RGBW = Array<Array<number>>;

export type ColorName = 'red' | 'green' | 'blue' | 'white';

export type XYZ = {
  X: number;
  Y: number;
  Z: number;
};

export type xyY = {
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

export class ColourSpaceXML {
  private isDebug = false;

  constructor({ debug = false } = {}) {
    this.isDebug = debug;
  }

  private xmlParser = new XMLParser({
    ignoreAttributes: false,
  });

  getRGBWFromBpd(xml: string) {
    if (!XMLValidator.validate(xml)) {
      throw new Error('Could not validate BDP XML.');
    }

    const {
      builder_color_space: {
        head: { L, x, y },
      },
    } = this.xmlParser.parse(xml);

    return [
      [parseFloat(x['@_red']), parseFloat(x['@_green']), parseFloat(x['@_blue']), parseFloat(x['@_white'])],
      [parseFloat(y['@_red']), parseFloat(y['@_green']), parseFloat(y['@_blue']), parseFloat(y['@_white'])],
      [parseFloat(L['@_red']), parseFloat(L['@_green']), parseFloat(L['@_blue']), parseFloat(L['@_white'])],
    ];
  }

  getRGBWFromBcs(xml: string) {
    if (!XMLValidator.validate(xml)) {
      throw new Error('Could not validate BCS XML.');
    }

    const {
      builder_color_space: {
        data: { patch: patches },
      },
    } = this.xmlParser.parse(xml);

    return this.getRGBWMatrixFromPatches(patches);
  }

  private getRGBWMatrixFromPatches(patches: Array<BscPatch> = []): RGBW | undefined {
    if (patches.length < 1) {
      return;
    }

    // Filter out black & white patches
    const colorPatches = patches
      .filter((p) => !(p.stimuli.red === 0 && p.stimuli.green === 0 && p.stimuli.blue === 0))
      .filter((p) => !(p.stimuli.red === 1 && p.stimuli.green === 1 && p.stimuli.blue === 1));

    // Get XYZ for each color
    const { results: { XYZ: redXYZ = undefined } = {} } = colorPatches.filter((p) => p.stimuli.green === 0 && p.stimuli.blue === 0).shift() || {};
    const { results: { XYZ: greenXYZ = undefined } = {} } = colorPatches.filter((p) => p.stimuli.red === 0 && p.stimuli.blue === 0).shift() || {};
    const { results: { XYZ: blueXYZ = undefined } = {} } = colorPatches.filter((p) => p.stimuli.red === 0 && p.stimuli.green === 0).shift() || {};

    // Get XYZ for white
    const [{ results: { XYZ: whiteXYZ = undefined } = {} }] = patches.filter(
      (p) => p.stimuli.red !== 0 && p.stimuli.red !== 1 && p.stimuli.green !== 0 && p.stimuli.green !== 1 && p.stimuli.blue !== 0 && p.stimuli.blue !== 1
    );

    if (this.isDebug) {
      console.log('redXYZ', redXYZ);
      console.log('greenXYZ', greenXYZ);
      console.log('blueXYZ', blueXYZ);
      console.log('whiteXYZ', whiteXYZ);
    }

    if (!redXYZ || !greenXYZ || !blueXYZ || !whiteXYZ) {
      return;
    }

    // Convert to XYZ --> xyY
    const redxyY = XYZToxyY([redXYZ.X, redXYZ.Y, redXYZ.Z]);
    const greenxyY = XYZToxyY([greenXYZ.X, greenXYZ.Y, greenXYZ.Z]);
    const bluexyY = XYZToxyY([blueXYZ.X, blueXYZ.Y, blueXYZ.Z]);
    const whitexyY = XYZToxyY([whiteXYZ.X, whiteXYZ.Y, whiteXYZ.Z]);

    return [
      [redxyY[0], greenxyY[0], bluexyY[0], whitexyY[0]],
      [redxyY[1], greenxyY[1], bluexyY[1], whitexyY[1]],
      [redxyY[2], greenxyY[2], bluexyY[2], whitexyY[2]],
    ];
  }

  getRGBWIndexForColor(color: ColorName): number {
    const indexMap: Record<ColorName, number> = {
      red: 0,
      green: 1,
      blue: 2,
      white: 3,
    };

    return indexMap[color];
  }
}
