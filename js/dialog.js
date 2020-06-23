'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var setupTopDefault;
  var setupLeftDefault;

  var popupEscPressHandler = function (evt) {
    if (evt.key === 'Escape' && document.activeElement !== userNameInput) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    setupTopDefault = setup.offsetTop;
    setupLeftDefault = setup.offsetLeft;

    document.addEventListener('keydown', popupEscPressHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = setupTopDefault + 'px';
    setup.style.left = setupLeftDefault + 'px';
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
})();
