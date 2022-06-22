// This function stores our state.
// const plant = require("./state.js");
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const resetState = (prop1, prop2, prop3) => {
  return (state) => ({
    ...state,
    [prop1]: 0,
    [prop2]: 0,
    [prop3]: 0
  });
};
