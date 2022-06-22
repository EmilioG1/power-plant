const plant = require('./js/plant.js');
const state = require('./js/state.js');


// const stateControl = require('./js/state.js');

$(document).ready(function() {
  console.log('hello');

  $('#feed').click(function() {
    const soilState = state.stateControl(plant.feed);
    $('#soil-value').text(`Soil: ${soilState.soil}`);
  });

  $('#water').click(function () {
    const waterState = state.stateControl(plant.hydrate);
    $('#water-value').text(`Water: ${waterState.water}`);
  });

  $('#light').click(function () {
    const lightState = state.stateControl(plant.light);
    $('#light-value').text(`Sun: ${lightState.light}`);
  });



  $('#show-state').click(function() {

    const currentState = state.stateControl();
    $('#soil-current').text(`Soil saved: ${currentState.soil}`);
    $('#water-current').text(`Water saved: ${currentState.water}`);
    $('#light-current').text(`Sun saved: ${currentState.light}`);
    
  });
});
