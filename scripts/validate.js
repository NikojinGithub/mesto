const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
function resetValidation(formElement, inputElement, config) {
  const error = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
};

// ------------ Add error class---------------
const showInputError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  error.classList.add(config.errorClass);
  error.textContent = inputElement.validationMessage; 
}
// --------------- Hide error class -------------
const hideInputError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
}


//------------ check validity and use add or remove error-class function---------
function validateInput(formElement, inputElement, config) { 
  
if(!inputElement.validity.valid) {
  showInputError(formElement, inputElement, config);
} else {
  hideInputError(formElement, inputElement, config); 
  }
}


//---------Get inputList all forms-- and use validity function for Each-----------
function setHandlers(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
  const button = formElement.querySelector(config.submitButtonSelector);
  
  toggleButton(inputList, button, config);
 
  inputList.forEach((inputElement) => {
    
    inputElement.addEventListener('input', () => {
    toggleButton(inputList, button, config);
    validateInput(formElement, inputElement, config);

    toggleButton(inputList, button, config);
  });
  hideInputError(formElement, inputElement, config); 
});

};


//const button = formElement.querySelectorAll(config.submitButtonSelector);
//-----------button disabled off---------------------------
  //const button = document.querySelector('.popup__button');
// console.log(button);
// button.disabled = false;
//---------------------button----------------------------------

const checkInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButton = (inputList, button, config) => {
  
  if (checkInput(inputList)) {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  }
};



//--------Get all forms and use handlers function for each???------------------------
function enableValidation(config) {
  const form = document.querySelectorAll(config.formElement);
   //console.log(form);
   form.forEach((formElement) => {
  setHandlers(formElement, config);
});

  // form.addEventListener('submit', (evt) => {
  // evt.preventDefault(); 
  // });
}

enableValidation(validationConfig);