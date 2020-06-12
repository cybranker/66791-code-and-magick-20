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
var WIZARD_FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var setup = document.querySelector('.setup');
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

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var popupEscPressHandler = function (evt) {
  if (evt.key === 'Escape' && document.activeElement !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', popupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле huy');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var setupWizardElement = document.querySelector('.setup-wizard');
var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
var setupFireballElement = document.querySelector('.setup-fireball-wrap');
var coatColorInput = document.querySelector('input[name="coat-color"]');
var eyesColorInput = document.querySelector('input[name="eyes-color"]');
var fireballColorInput = document.querySelector('input[name="fireball-color"]');

var selectColorPartsWizard = function (part, color, input) {
  part.style = ((part.matches('.setup-fireball-wrap')) ? 'background: ' : 'fill: ') + color + ';';
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
