let btnEdit = document.querySelector('.profile__edit');
let btnClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');


 btnEdit.addEventListener('click', function () {
  popup.classList.add('popup__opened');
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('popup__opened');
});


//Add title and subtitle in inputs.
let nameInput = document.querySelector('.popup__input_name');  
let startInputName = document.querySelector('.profile__title');
nameInput.value = startInputName.textContent;

let jobInput = document.querySelector('.popup__input_job');
let startInputJob = document.querySelector('.profile__subtitle');
jobInput.value = startInputJob.textContent;

//Add text from popup to html.
function handleFormSubmit (evt) {
  evt.preventDefault();
  startInputName.textContent = nameInput.value;
  startInputJob.textContent = jobInput.value;
  popup.classList.remove('popup__opened');
}

popup.addEventListener ('submit', handleFormSubmit);

















//Значение которые должны быть в Input вначале
//let nameText = nameInput.textContent;
//console.log(nameText);
//let jobText = jobInput.textContent;
//console.log(jobText);

//let inputStart = document.getElementsByName('name');
//nputStart.textContent = nameText;
//inputStart = inputStart.textContent;
//console.log(inputStart);

