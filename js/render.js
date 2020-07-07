'use strict';

(function () {
  var QUANTITY_WIZARDS = 4;
  var setupSimilarElement = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getArrayElements = function (arr, quantity) {
    var newArr = [];

    for (var i = 0; i < quantity; i++) {
      newArr.push(arr[i]);
    }

    return newArr;
  };

  var getFragmentWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;

      fragment.appendChild(wizardElement);
    }

    return fragment;
  };

  var render = function (data) {
    similarListElement.innerHTML = '';
    similarListElement.appendChild(getFragmentWizards(getArrayElements(data, QUANTITY_WIZARDS)));
    setupSimilarElement.classList.remove('hidden');
  };

  window.render = render;
})();
