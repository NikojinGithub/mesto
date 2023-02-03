import { FormValidator } from "../components/formValidator.js";
import { Card } from "../components/card.js";
import { Section } from '../components/section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from "../components/PopupWithForm.js";
import { initialCards, validationConfig, popupEdit, btnCloseEdit, popupFormEdit, btnEdit, nameInput, jobInput, 
profileTitle, profileSubtitle, popupList, popupImg, btnAdd, btnCloseImg, sectionElements, nameInputImg,
linkInput, popupFormImg, popupPhoto, popupPhotoImage, popupPhotoText, btnClosePhoto } from "../utils/constants.js";

// const popup = document.querySelector('.popup');

const openAndCloseEditPopup = new Popup('.popup_type_edit');
openAndCloseEditPopup.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_type_photo')
popupWithImage.setEventListeners();

const PopupAddCardForm = new PopupWithForm({
  formSubmit: (item) => {
    // const card = new Card (item.name, item.link, '#element', openPopupImage);
    // const cardElement = card.generateCard(); 
    const newCard = createdCard(item)                  
    defaultCardsList.addItemInBegin(newCard);
    PopupAddCardForm.close();
  }
}, '.popup_type_add')

PopupAddCardForm.setEventListeners();

//-------------------------add new card------------------------------

// const handleFormSubmitImg = (evt) => {
//   evt.preventDefault();
//   const element = {
//     name: nameInputImg.value,
//     link: linkInput.value
//   };
  
//   renderElementPrep(element);
//   closePopup(popupImg); 
// };

// popupFormImg.addEventListener ('submit', handleFormSubmitImg);

// const renderElementPrep = (item) => { 
//   const card = new Card (item.name, item.link, '#element', openPopupImage);
//   const cardElement = card.generateCard();                    
//   sectionElements.prepend(cardElement);                        
// };

//-------Add text from popup to html.------update---------

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  //closePopup(popupEdit);
  openAndCloseEditPopup.close();


}

popupFormEdit.addEventListener ('submit', handleFormSubmit);

//----------function add image, text and open large image popup------------------------------------- 
//----------transmitted to creater card from array and transmitted to function create new cards.---

//
function openPopupImage(name, link) {
  // popupPhotoImage.src = link;
  // popupPhotoImage.alt = name;
  // popupPhotoText.textContent = name;
  // openPopup(popupPhoto);
  popupWithImage.open(name, link);
}



//=====Переделать==== Создание карточек. Класс Section.=====Класс сектион не создает карточку, он только вставляет ее в разметку.=====

const createdCard = (item) => {
  const card = new Card (item.name, item.link, '#element', openPopupImage);
  const element = card.generateCard();
  return element;
}


const cardListSection = document.querySelector('.elements');

const defaultCardsList = new Section({ 
  data: initialCards,
  renderer: (item) => {
    // const card = new Card (item.name, item.link, '#element', openPopupImage);
    // const element = card.generateCard();
    defaultCardsList.addItemInEnd(createdCard(item));
  }
},
  cardListSection
)

defaultCardsList.renderCards();
//=============================================================================================================
//const imageTemplate = document.querySelector('#element');



//---------Create validation class for popup-----------------------------

const editValidation = new FormValidator(validationConfig, popupEdit);
editValidation.enableValidation();

const addValidation = new FormValidator(validationConfig, popupImg);
addValidation.enableValidation();

// -----close with click overlay--- get all elements popup on page and forEach and add listener for each-----

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target === popup) {
      //closePopup(popup)!!!!;
    }
  });
});

//-------------------function closeEsc-----------------------------------

// const closeByEsc = (e) => {
//   if (e.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     closePopup(popup);
//   };
// };

//-------function open and close popup--------

// function openPopup (popup) { 
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
// };

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function closePopup (popup) {
//   document.removeEventListener('keydown', closeByEsc);
//   popup.classList.remove('popup_opened');
// };

//----------open and close first popup---------

btnEdit.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  //openPopup(popupEdit)
  openAndCloseEditPopup.open();
      
  editValidation.resetErrors();           //Очистка ошибок, после открытия попапа. 
  editValidation.toggleButton();            // Валидация кнопки при открытии попапа.
});

//btnCloseEdit.addEventListener('click', () => closePopup(popupEdit));
//btnCloseEdit.addEventListener('click', () => openAndCloseEditPopup.close());!!!!



//---------open close and reset second popup----update---------

btnAdd.addEventListener('click', () => {
  PopupAddCardForm.open();
  //openPopup(popupImg)
  document.querySelector('.popup__form_type_add').reset();  //Сброс инпутов с последующей их проверкой
  //resetPopup();                   
  addValidation.resetErrors();     //Очистка ошибок, после открытия попапа.
  addValidation.toggleButton();      //Валидация кнопки при открытии попапа.
});

// btnCloseImg.addEventListener('click', () => {
//   closePopup(popupImg);  
// });

// const resetPopup = () => {
//   nameInputImg.value = '';
//   linkInput.value = '';
// };

//-------close popup Photo---------------------------

btnClosePhoto.addEventListener('click', () => {
  closePopup(popupPhoto);;
});

//=====================================================================================================

//---------Create new card from initialCards array.---------------------
 
// initialCards.forEach((item) => {
//   const card = new Card (item.name, item.link, '#element', openPopupImage);
//   const cardElement = card.generateCard();
//   cardListSection.append(cardElement);
// })