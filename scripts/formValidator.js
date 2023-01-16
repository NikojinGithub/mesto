export default class FormValidator {
  // Передаем в конструктор элемент формы с которой мы работаем. И 
  constructor(config, formElement) { 
   
    this._element = config.formElement;
    this._input = config.inputElement;
    this._submitButton = config.submitButtonSelector
    this._inactiveButton = config.inactiveButtonClass;
    this._inputError = config.inputErrorClass;
    this._error = config.errorClass;

    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._input));
    this._button = this._formElement.querySelector(this._submitButton);
  }

  _showInputError(inputElement) {
    const error = document.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(this._inputError);
    error.classList.add(this._error);
    error.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const error = document.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(this._inputError);
    error.classList.remove(this._error);
    error.textContent = '';
  }

  _validationInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _checkInput = (inputElement) => {
    
    return !inputElement.validity.valid;
    
  };

  _toggleButton = (inputList) => { 
    if (this._checkInput(inputList)) {
      this._button.classList.add(this._inactiveButton);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButton);
      this._button.disabled = false;
    };
  };

  _setHandlers() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validationInput(input);
        this._toggleButton(input);
      })
    })
  }

  enableValidation() {
    this._setHandlers();
  }
}