import { assert, beforeAll, test } from 'vitest';
import path from 'node:path';
import fs from 'node:fs/promises';
import { ColourSpaceXML } from '../src/util/ColourSpaceXML';

let bpdXml: string;
let bcsXml: string;
let csXml: ColourSpaceXML;

beforeAll(async () => {
  bpdXml = await fs.readFile(path.resolve(__dirname, 'fixtures/i1pro2.bpd'), {
    encoding: 'utf-8',
  });
  bcsXml = await fs.readFile(path.resolve(__dirname, 'fixtures/verification.bcs'), {
    encoding: 'utf-8',
  });
  csXml = new ColourSpaceXML();
});

test('getRGBWFromBpd()', async () => {
  // console.log('bpdXml', bpdXml);
  assert.deepEqual(csXml.getRGBWFromBpd(bpdXml), [
    [0.676231, 0.272918, 0.143255, 0.312448],
    [0.324142, 0.67135, 0.0522131, 0.329491],
    [24.0496, 74.8948, 7.11881, 109.476],
  ]);
});

test('getRGBWFromBcs()', async () => {
  // console.log('bcsXml', bcsXml);
  assert.deepEqual(csXml.getRGBWFromBcs(bcsXml), [
    [0.6763143713985005, 0.2729797429112803, 0.1432543725301533, 0.31255458547211057],
    [0.3241021458373238, 0.6715844069917881, 0.052196073051414126, 0.32943290570180506],
    [23.999465510573, 74.709215517936, 7.103622034514, 109.183160445674],
  ]);
});
