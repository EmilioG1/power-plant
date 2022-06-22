// const changeState = require('./state.js');
const state = require("./state.js");
// We create four functions using our function factory. We could easily create many more.


export const feed = state.changeState("soil")(1);
export const blueFood = state.changeState("soil")(5);

export const hydrate = state.changeState("water")(1);
export const superWater = state.changeState("water")(5);

export const light = state.changeState("light")(1);
export const moreLight = state.changeState("light")(5);

export const resetPlant = state.resetState('soil', 'water', 'light');