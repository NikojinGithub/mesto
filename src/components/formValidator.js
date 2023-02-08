export class FormValidator {
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
  _hasInvalidInputs = () => {
    return this._inputList.some((inputElement) => { // <========== HERE 
      return !inputElement.validity.valid;
    //   this._showInputError(inputElement);       // Если добавить вывод ошибки сюда, ошибка убирается.
    // } else {                                    
    //   this._hideInputError(inputElement);
    // }
    });
  };

  //Function add or remove text error after validity inputs.
  _validateInput(inputElement) {
    //if (this._hasInvalidInputs()) { 
      if(!inputElement.validity.valid) {         // Ошибка нужно делать проверку одного инпута а не всех.  //передавали inputElement
      this._showInputError(inputElement);       // Ошибка была в методе которым перебирали инпуты. Нет.
    } else {                                    // был метод some. С методом every работает валидации только 1 инпута
      this._hideInputError(inputElement);
    }
  }

  //Function activate/deactivate button after validity inputs.
  toggleButton() { 
    if (this._hasInvalidInputs()) {
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
        this._validateInput(input);
        this.toggleButton();
      })
    })
  }
   // Public function wich activate enable validation to form. Calls in index.js.
  enableValidation() {
    this._setHandlers();  
  }
  
   // Public function wich reset text errors when popup opens.
  resetErrors() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    })
  }
}