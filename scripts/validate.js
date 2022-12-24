const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const showInputError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  error.classList.add(config.errorClass);
  error.textContent = inputElement.validationMessage; }

const hideInputError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
}

function validateInput(formElement, inputElement, config) {
  
if(!inputElement.validity.valid) {

  showInputError(formElement, inputElement, config);

} else {

  hideInputError(formElement, inputElement, config);
  
  }
}

function setHandlers(formElement, config) {
const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
console.log(inputList);
inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
   validateInput(formElement, inputElement, config);
  })
})
}

function enableValidation(config) {
  const form = document.querySelectorAll(config.formElement);
   console.log(form);
   form.forEach((formElement) => {
  setHandlers(formElement, config);
});

  // form.addEventListener('submit', (evt) => {
  //   evt.preventDefault(); 
  // });

}


enableValidation(validationConfig);