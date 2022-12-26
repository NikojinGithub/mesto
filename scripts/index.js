const btnEdit = document.querySelector('.profile__edit');
const btnClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

const nameInput = document.querySelector('.popup__input_type_name');  
const jobInput = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');
const popupList = document.querySelectorAll('.popup');

// --------------close with click overlay-------- get all elements popup on page and forEach and add listener for each-----

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target === popup) {
      closePopup(popup);
    }
  });
});  
// --------------close with esc--------------------------

popupList.forEach((popup) => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { 
      closePopup (popup);  
    };
  });
});



//-------function open and close popup--------
function openPopup (popup) {
  popup.classList.add('popup_opened');
  //setButtonState(popup);
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

//----------open and close first popup---------
btnEdit.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popup)
  setButtonState(popup);           //Проверка инпутов на валидность и выключение/включение кнопки.
});

btnClose.addEventListener('click', () => closePopup(popup));

//-------Add text from popup to html.------update---------
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popup);
}

popupForm.addEventListener ('submit', handleFormSubmit);



//================================================================
//----------------5 sprint---------------------------------------
//================================================================

const btnAdd = document.querySelector('.profile__add-button');
const popupImg = document.querySelector('.popup_type_add');
const btnCloseImg = document.querySelector('.popup__close_type_add');
const sectionElements = document.querySelector('.elements'); //Блок в котором будут картинки
const nameInputImg = document.querySelector('.popup__input_type_nameImg');  
const linkInput = document.querySelector('.popup__input_type_link');
const popupFormImg = document.querySelector('.popup__form_type_add');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupImage = popupPhoto.querySelector('.popup__image');
const popupText = popupPhoto.querySelector('.popup__title_type_photo');
const imageTemplate = document.querySelector('#element');
const btnClosePhoto = document.querySelector('.popup__close_type_photo');

//---------open close and reset second popup----update---------
btnAdd.addEventListener('click', () => {
  openPopup(popupImg)
  //Проверка инпутов на валидность и выключение/включение кнопки.
  setButtonState(popupImg);  
  resetPopup();               
});

btnCloseImg.addEventListener('click', () => {
  closePopup(popupImg);  
});

const resetPopup = () => {
  nameInputImg.value = '';
  linkInput.value = '';
};

//============================add card like delete viewPopup==========================================

const createElement = (item) => {
  const elementItem = imageTemplate.content.querySelector('.element').cloneNode(true);
  const itemText = elementItem.querySelector('.element__text');
  const itemPhoto = elementItem.querySelector('.element__photo');
  itemText.textContent  = item.name;
  itemPhoto.src = item.link;
  itemPhoto.alt  = item.name;

  const like = elementItem.querySelector('.element__like');
  const likeElement = () => like.classList.toggle('element__like_active');
  like.addEventListener('click', likeElement);  
   
  const deleteBtn = elementItem.querySelector('.element__delete');
  const deleteImg = () => deleteBtn.closest('.element').remove();
  deleteBtn.addEventListener('click', deleteImg);

  const btnOpenPopup = elementItem.querySelector('.element__button-img');
  btnOpenPopup.addEventListener('click', () => {
    popupImage.setAttribute('src', item.link);
    popupImage.setAttribute('alt', item.name);
    popupText.textContent = item.name;
    openPopup(popupPhoto);
  });

  return elementItem;
};

//--------------------close 3-rd popup-------------------------------------------

btnClosePhoto.addEventListener('click', () => closePopup(popupPhoto));

//===============================================================================
const renderElement = (item) => {                  /// addEnd
  sectionElements.append(createElement(item));
};

const renderElementPrep = (item) => {               /// addBegin
  sectionElements.prepend(createElement(item));
};

// initialCards.forEach((i) => {
//   renderElement(i);
// });

initialCards.forEach(renderElement);

//===================add photo===================================================

const handleFormSubmitImg = (evt) => {
  evt.preventDefault();
  const element = {
    name: nameInputImg.value,
    link: linkInput.value
  };
  
  renderElementPrep(element);
  resetPopup();
  closePopup(popupImg); 
};

popupFormImg.addEventListener ('submit', handleFormSubmitImg);

//================================================================================

//---------------Listeners function-----------------------------------------------
//const addListeners = (elementItem) => {    //--Кнопки лайк, удалить элемент, открыть большую картинку, закрыть ее.
  // const like = elementItem.querySelector('.elements__like');
  // const likeElement = () => like.classList.toggle('elements__like_active');
  // like.addEventListener('click', likeElement);

  // const deleteBtn = elementItem.querySelector('.elements__delete');
  // const deleteImg = () => deleteBtn.closest('.elements__item').remove();
  // deleteBtn.addEventListener('click', deleteImg);

  // const btnOpenPopup = document.querySelectorAll('.elements__button-img');
  // btnOpenPopup.forEach((i) => 
  // i.addEventListener('click', openPopupPhoto));

  // const btnClosePhoto = document.querySelector('.popup__close');
  // btnClosePhoto.addEventListener('click', closePopupPhoto);

  //return elementItem;
//};

//===========================Open and close and edit 3-rd popup============================================================
// const btnOpenPopup = document.querySelectorAll('.elements__button-img');

//  btnOpenPopup.forEach((i) => 
//   i.addEventListener('click', (event) => {
//     popupImage.setAttribute('src', event.target.src);
//     popupText.textContent = event.target.alt;
//   openPopup(popupPhoto)
// }));

  // const btnClosePhoto = document.querySelector('.popup__close_type_photo');
  // btnClosePhoto.addEventListener('click', () =>
  // closePopup(popupPhoto));

  // const cloneElementItem = () => {
//  return elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);  
// };
// cloneElementItem();

// //--------------------add image block--------------------------------------------
// initialCards.forEach((item) => {   

//   //const elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);
//    elementItem.querySelector('.elements__photo').src = item.link;                              
//    elementItem.querySelector('.elements__photo').alt  = item.name;
//    elementItem.querySelector('.elements__text').textContent = item.name;
  
//     addListeners(elementItem);
//     sectionElements.append(elementItem);
// });
// //-------------------------add card----------------------------------------------------

// const handleFormSubmitImg = (evt) => {
//   evt.preventDefault();
//  
//    //const elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);
//    elementItem.querySelector('.elements__text').textContent  = nameInputImg.value;
//    elementItem.querySelector('.elements__photo').src = linkInput.value;
//    elementItem.querySelector('.elements__photo').alt  = nameInputImg.value;
//    sectionElements.prepend(elementItem); 
  
//    resetPopup();
//    closePopup(popupImg);
//    addListeners(elementItem);
// };

// popupFormImg.addEventListener ('submit', handleFormSubmitImg);
//==============================================================================

//const submitButton = document.querySelector('.popup__button');

//----Fix---------- activate and deactivate popup button----------
//const button = document.querySelectorAll('.popup__button');

// const activate = () => {
//   button[0].classList.remove('popup__button_disabled');
//   button[0].disabled = false;
// }

// const deactivate = () => {
//   button[1].classList.add('popup__button_disabled');
//   button[1].disabled = true;
// }

//--------------------clear error span------------------------------
// const error = Array.from(document.querySelectorAll('.popup__error'));

// //console.log(error);
// function clear() {
// error.forEach(() => error.textContent.reset());
// };

//error.textContent = '';