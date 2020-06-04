'use strict';

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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
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

  if (quantity > 0) {
    for (var i = 0; i < quantity; i++) {
      arr.push({
        name: getArrayRandomElement(WIZARD_NAMES) + ' ' + getArrayRandomElement(WIZARD_SURNAMES),
        coatColor: getArrayRandomElement(WIZARD_COAT_COLORS),
        eyesColor: getArrayRandomElement(WIZARD_EYES_COLORS)
      });
    }
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