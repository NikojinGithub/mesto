const btnEdit = document.querySelector('.profile__edit');
const btnClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_type_name');  
const jobInput = document.querySelector('.popup__input_type_job');
const startInputName = document.querySelector('.profile__title');
const startInputJob = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');

//-------function open and close popup--------
function openPopup (btn) {
  btn.classList.add('popup_opened');
};

function closePopup (btn) {
  btn.classList.remove('popup_opened');
};

//----------open and close first popup---------
btnEdit.addEventListener('click', () => {
  nameInput.value = startInputName.textContent;
  jobInput.value = startInputJob.textContent;
  openPopup(popup)
});

btnClose.addEventListener('click', () =>
closePopup(popup));

//-------Add text from popup to html.------update---------
function handleFormSubmit (evt) {
  evt.preventDefault();
  startInputName.textContent = nameInput.value;
  startInputJob.textContent = jobInput.value;
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
const imageTemplate = document.querySelector('#elements__item');

//---------open close and reset second popup----update---------
btnAdd.addEventListener('click', () =>
openPopup(popupImg));

btnCloseImg.addEventListener('click', () => {
resetPopup();
closePopup(popupImg);
});

const resetPopup = () => {
  nameInputImg.value = '';
  linkInput.value = '';
};

//---------------------------------images-------------------------------------------
const initialCards = [
  {
    name: 'Эверест',
    link: 'https://images.unsplash.com/photo-1575819719798-83d97dd6949c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  },
  {
    name: 'Ачипсинские водопады',
    link: '../images/Ачипсинские.jpg'
  },
  {
    name: 'Гора Чогори',
    link: 'https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Бзерпинский карниз',
    link: '../images/Бзерпинский.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1638989420853-a6437f7a0d2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
];

//============================add card like delete viewPopup==========================================

const createElement = (item) => {
  const elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);
  const itemText = elementItem.querySelector('.elements__text');
  const itemPhoto = elementItem.querySelector('.elements__photo');
  itemText.textContent  = item.name;
  itemPhoto.src = item.link;
  itemPhoto.alt  = item.name;

  const like = elementItem.querySelector('.elements__like');
  const likeElement = () => like.classList.toggle('elements__like_active');
  like.addEventListener('click', likeElement);  
   
  const deleteBtn = elementItem.querySelector('.elements__delete');
  const deleteImg = () => deleteBtn.closest('.elements__item').remove();
  deleteBtn.addEventListener('click', deleteImg);

  const btnOpenPopup = elementItem.querySelector('.elements__button-img');
  btnOpenPopup.addEventListener('click', (event) => {
  popupImage.setAttribute('src', event.target.src);
  popupText.textContent = event.target.alt;
  openPopup(popupPhoto);
  });

  const btnClosePhoto = document.querySelector('.popup__close_type_photo');
  btnClosePhoto.addEventListener('click', () =>
  closePopup(popupPhoto));


   return elementItem;
 
};


//========================================================================================
const renderElement = (item) => {                  /// addEnd
 sectionElements.append(createElement(item));
};

const renderElementPrep = (item) => {               /// addBegin
  sectionElements.prepend(createElement(item));
};

initialCards.forEach((i) => {
 renderElement(i);
});


//===================add photo================================================

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




//===================================================================================================

//---------------Listeners function----------------------------------------------------
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