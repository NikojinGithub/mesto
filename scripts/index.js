let btnEdit = document.querySelector('.profile__edit');
let btnClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_name');  
let jobInput = document.querySelector('.popup__input_type_job');
let startInputName = document.querySelector('.profile__title');
let startInputJob = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');

//Open popup 
function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = startInputName.textContent;
  jobInput.value = startInputJob.textContent;
}

btnEdit.addEventListener('click', openPopup);

//Close popup
function closePopup () {
  popup.classList.remove('popup_opened');
}

btnClose.addEventListener('click', closePopup);

//Add text from popup to html.
function handleFormSubmit (evt) {
  evt.preventDefault();
  startInputName.textContent = nameInput.value;
  startInputJob.textContent = jobInput.value;
  closePopup();
}

popupForm.addEventListener ('submit', handleFormSubmit);

















//Значение которые должны быть в Input вначале
//let nameText = nameInput.textContent;
//console.log(nameText);
//let jobText = jobInput.textContent;
//console.log(jobText);

//let inputStart = document.getElementsByName('name');
//nputStart.textContent = nameText;
//inputStart = inputStart.textContent;
//console.log(inputStart);

