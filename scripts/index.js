import { FormValidator } from "./formValidator.js";
import { Card } from "./card.js";
import { initialCards, validationConfig } from "./constants.js";

const popupEdit = document.querySelector('.popup_type_edit');
const btnCloseEdit = popupEdit.querySelector('.popup__close');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const btnEdit = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupList = document.querySelectorAll('.popup');
const popupImg = document.querySelector('.popup_type_add');

//----------------5 sprint const---------------------------------------

const btnAdd = document.querySelector('.profile__add-button');
const btnCloseImg = document.querySelector('.popup__close_type_add');
const sectionElements = document.querySelector('.elements');                //Блок в котором будут картинки
const nameInputImg = document.querySelector('.popup__input_type_nameImg');  
const linkInput = document.querySelector('.popup__input_type_link');
const popupFormImg = document.querySelector('.popup__form_type_add');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoImage = document.querySelector('.popup__image');
const popupPhotoText = document.querySelector('.popup__title_type_photo');
const btnClosePhoto = document.querySelector('.popup__close_type_photo');
//const imageTemplate = document.querySelector('#element');

//----------function add image, text and open large image popup------------ 
//----------transmitted to creater card from array and transmitted to function create new cards.

function openPopupImage(name, link) {
  popupPhotoImage.src = link;
  popupPhotoImage.alt = name;
  popupPhotoText.textContent = name;
  openPopup(popupPhoto);
}

//---------Create new card from initialCards array.---------------------
 
initialCards.forEach((item) => {
  const card = new Card (item.name, item.link, '#element', openPopupImage);
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
})

//-------------------------add new card------------------------------

const handleFormSubmitImg = (evt) => {
  evt.preventDefault();
  const element = {
    name: nameInputImg.value,
    link: linkInput.value
  };
  
  renderElementPrep(element);
  closePopup(popupImg); 
};

popupFormImg.addEventListener ('submit', handleFormSubmitImg);

const renderElementPrep = (item) => { 
  const card = new Card (item.name, item.link, '#element', openPopupImage);
  const cardElement = card.generateCard();                    
  sectionElements.prepend(cardElement);                        
};

//---------Create validation class for popup-----------------------------

const editValidation = new FormValidator(validationConfig, popupEdit);
editValidation.enableValidation();

const addValidation = new FormValidator(validationConfig, popupImg);
addValidation.enableValidation();

// -----close with click overlay--- get all elements popup on page and forEach and add listener for each-----

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target === popup) {
      closePopup(popup);
    }
  });
});

//-------------------function closeEsc-----------------------------------

const closeByEsc = (e) => {
  if (e.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
};

//-------function open and close popup--------

function openPopup (popup) { 
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

function closePopup (popup) {
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove('popup_opened');
};

//----------open and close first popup---------

btnEdit.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit)
      
  editValidation.resetErrors();           //Очистка ошибок, после открытия попапа. 
  editValidation.toggleButton();            // Валидация кнопки при открытии попапа.
});

btnCloseEdit.addEventListener('click', () => closePopup(popupEdit));

//-------Add text from popup to html.------update---------

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

popupFormEdit.addEventListener ('submit', handleFormSubmit);

//---------open close and reset second popup----update---------

btnAdd.addEventListener('click', () => {
  openPopup(popupImg)
  document.querySelector('.popup__form_type_add').reset();  //Сброс инпутов с последующей их проверкой
  //resetPopup();                   
  addValidation.resetErrors();     //Очистка ошибок, после открытия попапа.
  addValidation.toggleButton();      //Валидация кнопки при открытии попапа.
});

btnCloseImg.addEventListener('click', () => {
  closePopup(popupImg);  
});

// const resetPopup = () => {
//   nameInputImg.value = '';
//   linkInput.value = '';
// };

//-------close popup Photo---------------------------

btnClosePhoto.addEventListener('click', () => {
  closePopup(popupPhoto);;
});
