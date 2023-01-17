export default class FormValidator {
  // Transfer in constructor formElement wich we need.
  // Transfer in constructor object with config.
  constructor(config, formElement) { 
   
    this._element = config.formElement;
    this._input = config.inputElement;
    this._submitButton = config.submitButtonSelector
    this._inactiveButton = config.inactiveButtonClass;
    this._inputError = config.inputErrorClass;
    this._error = config.errorClass;
    

    //Find input list in element.
    //Find button in element.
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._input));
    this._button = this._formElement.querySelector(this._submitButton);
  }

  //=======================================================================================
    //Function find span with error in element. And add error text.
  _showInputError(inputElement) {
    const error = document.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(this._inputError);
    error.classList.add(this._error);
    error.textContent = inputElement.validationMessage;
  }
    //Function find span with error in element. And remove error text.
  _hideInputError(inputElement) {
    const error = document.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(this._inputError);
    error.classList.remove(this._error);
    error.textContent = '';
  }

  //Function check validity inputs.
  _checkInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };


  //Function add or remove text error after validity inputs.
  _validationInput(inputElement) {
    if (this._checkInput(inputElement)) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //Function activate/deactivate button after validity inputs.
  _toggleButton = (inputElement) => { 
    if (this._checkInput(inputElement)) {
      this._button.classList.add(this._inactiveButton);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButton);
      this._button.disabled = false;
    };
  };
   
  //Function handle inputs and use fucntion add/remove error text and function disabled/activated button for each.
  _setHandlers() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validationInput(input);
        this._toggleButton(input);
      })
    })
  }
   // Public function wich activate enable validation to form. Calls in index.js.
  enableValidation() {
    this._setHandlers();
    
  }
   // Public function wich reset text errors when popup opens.
  resetError() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    })
  }
  // Public function wich activate/deactivate button when popup opens.
  setButton() {
    this._toggleButton();
  }
}