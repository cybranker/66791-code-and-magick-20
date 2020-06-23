'use strict';

(function () {
  var QUANTITY_WIZARDS = 4;
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
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

  var setupSimilarElement = document.querySelector('.setup-similar');
  setupSimilarElement.classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getArrayRandomElement = function (arr) {
    var random = Math.floor(Math.random() * arr.length);

    return arr[random];
  };

  var getArrayWizards = function (quantity) {
    var arr = [];

    for (var i = 0; i < quantity; i++) {
      arr.push({
        name: getArrayRandomElement(WIZARD_NAMES) + ' ' + getArrayRandomElement(WIZARD_SURNAMES),
        coatColor: getArrayRandomElement(WIZARD_COAT_COLORS),
        eyesColor: getArrayRandomElement(WIZARD_EYES_COLORS)
      });
    }

    return arr;
  };

  var getFragmentWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

      fragment.appendChild(wizardElement);
    }

    return fragment;
  };

  similarListElement.appendChild(getFragmentWizards(getArrayWizards(QUANTITY_WIZARDS)));

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
    selectColorPartsWizard(wizardCoatElement, getArrayRandomElement(WIZARD_COAT_COLORS), coatColorInput);
  });

  wizardEyesElement.addEventListener('click', function () {
    selectColorPartsWizard(wizardEyesElement, getArrayRandomElement(WIZARD_EYES_COLORS), eyesColorInput);
  });

  setupFireballElement.addEventListener('click', function () {
    selectColorPartsWizard(setupFireballElement, getArrayRandomElement(WIZARD_FIREBALL_COLORS), fireballColorInput);
  });
})();
