class FormValidator {
  constructor(config) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._fieldsetSelector = config.fieldsetSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  //Функция показа ошибки в инпуте
_showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

//Функция скрытия ошибки в инпуте
_hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(this._errorClass);
};

//Функция проверки инпута на валидность
_checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(formElement, inputElement);
  }
};

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  disableButton(buttonElement) {
    buttonElement.setAttribute('disabled', true);
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      this.disableButton(buttonElement);
    } else {
      // иначе сделай кнопку активной
      buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  };

}

export default FormValidator;
