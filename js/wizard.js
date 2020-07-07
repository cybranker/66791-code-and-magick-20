'use strict';

(function () {
  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var WIZARD_EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var WIZARD_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getArrayRandomElement = function (arr) {
    var random = Math.floor(Math.random() * arr.length);

    return arr[random];
  };

  var setupWizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var setupFireballElement = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  var selectColorPartsWizard = function (part, color, input) {
    part.style = ((part.matches('div')) ? 'background: ' : 'fill: ') + color + ';';
    input.value = color;
  };

  wizardCoatElement.addEventListener('click', function () {
    var newColor = getArrayRandomElement(WIZARD_COAT_COLORS);

    selectColorPartsWizard(wizardCoatElement, newColor, coatColorInput);
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = getArrayRandomElement(WIZARD_EYES_COLORS);

    selectColorPartsWizard(wizardEyesElement, newColor, eyesColorInput);
    wizard.onEyesChange(newColor);
  });

  setupFireballElement.addEventListener('click', function () {
    selectColorPartsWizard(setupFireballElement, getArrayRandomElement(WIZARD_FIREBALL_COLORS), fireballColorInput);
  });

  window.wizard = wizard;
})();
