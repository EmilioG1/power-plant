// // import * as plant from './../src/js/plant';
// // import * as state from './../src/js/state';
// // const blueFood = require('../src/js/plant');
// // const superWater = require('../src/js/plant');
// const changeState = require('../src/js/state.js');
// const feed = require('./../src/js/plant.js')
// // const stateControl = require('./../src/plant');

// describe('plant', () => {

//   test('Should increase soil by 1', () => {
//     let plant = {soil: 0, water: 0, light: 0};
//     expect(plant.soil).toBe(1);
//   });
// })



import * as plant from "../src/js/plant.js";
import * as state from '../src/js/state.js';

describe("plant", () => {
  beforeEach(() => {
    state.stateControl(plant.resetPlant);
  });
  test("feed function increase soil value of plant", () => {
    const result = state.stateControl(plant.feed);
    expect(result.soil).toEqual(1);
  });
  
  test("blueFood function increase soil value of plant", () => {
    const result = state.stateControl(plant.blueFood);
    expect(result.soil).toEqual(5);
  });

  test("hydrate function increase soil value of plant", () => {
    const result = state.stateControl(plant.hydrate);
    expect(result.water).toEqual(1);
  });

  test("superWater function increase soil value of plant", () => {
    const result = state.stateControl(plant.superWater);
    expect(result.water).toEqual(5);
  });

  test("light function increase soil value of plant", () => {
    const result = state.stateControl(plant.light);
    expect(result.light).toEqual(1);
  });

  test("moreLight function increase soil value of plant", () => {
    const result = state.stateControl(plant.moreLight);
    expect(result.light).toEqual(5);
  });
});  