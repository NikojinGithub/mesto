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


//--------------------------------------------------------------
//----------------5 sprint---------------------------------------
//----------------------------------------------------------------
const btnAdd = document.querySelector('.profile__add-button');
const popupImg = document.querySelector('.popup-img');
const btnCloseImg = document.querySelector('.popup-img__close');
const nameInputImg = document.querySelector('.popup-img__input_type_nameImg');  
const linkInput = document.querySelector('.popup-img__input_type_link');
const popupFormImg = document.querySelector('.popup-img__form');

//-------------------------open popupImg-------------------------
function openPopupImg () {
  popupImg.classList.add('popup-img_opened');
}

btnAdd.addEventListener('click', openPopupImg);



//---------------------------close popupImg---------------------------------------
function closePopupImg () {
  popupImg.classList.remove('popup-img_opened');
  nameInputImg.value = '';
  linkInput.value = '';
}

btnCloseImg.addEventListener('click', closePopupImg);


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


const sectionElements = document.querySelector('.elements'); //Блок в котором будут картинки
const imageTemplate = document.querySelector('#elements__item'); // Находим темплате элемент. обращаемся к его содержимому
//const elementItem = imageTemplate.querySelector('.elements__item').cloneNode(true);


//---------------Listeners function----------------------------------------------------
const Listeners = (elementItem) => {    //--Кнопки лайк, удалить элемент, открыть большую картинку, закрыть ее.
  const like = elementItem.querySelector('.elements__like');
  const likeElement = () => like.classList.toggle('elements__like_active');
  like.addEventListener('click', likeElement);

  const deleteBtn = elementItem.querySelector('.elements__delete');
  const deleteImg = () => deleteBtn.closest('.elements__item').remove();
  deleteBtn.addEventListener('click', deleteImg);

  const btnOpenPopup = document.querySelectorAll('.elements__button-img');
  btnOpenPopup.forEach((i) => 
  i.addEventListener('click', openPopupPhoto));

  const btnClosePhoto = document.querySelector('.popup-photo__close');
  btnClosePhoto.addEventListener('click', closePopupPhoto);

  return elementItem;
};


//--------------------add image block--------------------------------------------
initialCards.forEach((item) => {                                                                //Добавляет карточку и разметку в нее из массива initialCards.
  const elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);
    elementItem.querySelector('.elements__photo').src = item.link;                               ////Добавил src  из массива = последний элемент += все эелементы
    elementItem.querySelector('.elements__photo').alt  = item.name;
    elementItem.querySelector('.elements__text').textContent  = item.name;
  
   sectionElements.append(elementItem);
   Listeners(elementItem);
});
//-------------------------add card----------------------------------------------------

function handleFormSubmitImg (evt) {
  evt.preventDefault();
   const elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);
   elementItem.querySelector('.elements__text').textContent  = nameInputImg.value;
   elementItem.querySelector('.elements__photo').src = linkInput.value;
   elementItem.querySelector('.elements__photo').alt  = nameInputImg.value;
   sectionElements.prepend(elementItem); 
   
   closePopupImg();
   Listeners(elementItem);
};

popupFormImg.addEventListener ('submit', handleFormSubmitImg);

//--------------------3-rd popup--------------------------------

 const popupPhoto = document.querySelector('.popup-photo');
 let popupImage = popupPhoto.querySelector('.popup-photo__image');
 let popupText = popupPhoto.querySelector('.popup-photo__title');


//-------------------------open popupImg-------------------------
function openPopupPhoto (event) {

  console.log(event.target.alt);
  console.log(event.target.src);
  
  popupImage.setAttribute('src', event.target.src);
  popupText.textContent = event.target.alt;
  

  popupPhoto.classList.add('popup-photo_opened');
 }

//---------------------------close popupImg---------------------------------------
function closePopupPhoto () {
  popupPhoto.classList.remove('popup-photo_opened');
}

// btnClosePhoto.addEventListener('click', closePopupPhoto);



//==============================================================================================

// const createElement = (item) => {
 //  const elementItem = imageTemplate.content.querySelector('.elements__item').cloneNode(true);
 //  elementItem.querySelector('.elements__text').textContent  = item.name;
 //  elementItem.querySelector('.elements__photo').src = item.link;
 //  elementItem.querySelector('.elements__photo').alt  = item.name;

 // Listeners(elementItem);
//  return elementItem;
// };


//========================================================================================
// const renderElement = (item) => {
//  sectionElements.append(createElement(item));
// };

// initialCards.forEach((item) => {
//  renderElement(item);
// });

//--------------------------------------------------------------------------------------------


//--------------------Добавление элементов --------------------------
 //function handleFormSubmitImg (evt) {
  // evt.preventDefault();
  // const elementItem = imageTemplate.querySelector('.elements__item').cloneNode(true);
   // elementItem.querySelector('.elements__text').textContent  = nameInputImg.value;
   // elementItem.querySelector('.elements__photo').src = linkInput.value;
    //elementItem.querySelector('.elements__photo').alt  = nameInputImg.value;
   // sectionElements.prepend(elementItem); 
   // nameInputImg.value = '';
  //  linkInput.value = '';
  // closePopupImg();
//}

//popupFormImg.addEventListener ('submit', handleFormSubmitImg);

//-----------Удаление элементов----------------------

//const deleteBtn = document.querySelector('.elements__delete');

//const deleteImg = () => {
//  deleteBtn.closest('.elements__item').remove();
//};

//deleteBtn.addEventListener('click', deleteImg);

//--------like---------------------------------------------------

//const like = document.querySelector('.elements__like');

//const likeElement = () => {
 //like.classList.toggle('elements__like_active');
//};

//like.addEventListener('click', likeElement);












//let elementItem = imageTemplate.querySelector('.elements__item');
//let photoElement = elementItem.querySelector('.elements__photo').src;
//let textElement = elementItem.querySelector('.elements__text').textContent;

//-------------------------------------------------элементы на странице---------------------------
//const elementItem = imageTemplate.querySelector('.elements__item').cloneNode(true); //Выбираем элемент в котором будем добавлять контент.
//elementItem.querySelector('.elements__photo').src = initialCards[0].link;
//elementItem.querySelector('.elements__photo').alt = initialCards[0].name;
//elementItem.querySelector('.elements__text').textContent = initialCards[0].name;
//sectionElements.append(elementItem); // Выводи на страницу относительно секции в которой расположены файлы.

//const elementItem1 = imageTemplate.querySelector('.elements__item').cloneNode(true); //Выбираем элемент в котором будем добавлять контент.
//elementItem1.querySelector('.elements__photo').src = initialCards[1].link;
//elementItem1.querySelector('.elements__photo').alt = initialCards[1].name;
//elementItem1.querySelector('.elements__text').textContent = initialCards[1].name;
//sectionElements.append(elementItem1);

//const elementItem2 = imageTemplate.querySelector('.elements__item').cloneNode(true); //Выбираем элемент в котором будем добавлять контент.
//elementItem2.querySelector('.elements__photo').src = initialCards[2].link;
//elementItem2.querySelector('.elements__photo').alt = initialCards[2].name;
//elementItem2.querySelector('.elements__text').textContent = initialCards[2].name;
//sectionElements.append(elementItem2);
 
//const elementItem3 = imageTemplate.querySelector('.elements__item').cloneNode(true); //Выбираем элемент в котором будем добавлять контент.
//elementItem3.querySelector('.elements__photo').src = initialCards[3].link;
//elementItem3.querySelector('.elements__photo').alt = initialCards[3].name;
//elementItem3.querySelector('.elements__text').textContent = initialCards[3].name;
//sectionElements.append(elementItem3);

//const elementItem4 = imageTemplate.querySelector('.elements__item').cloneNode(true); //Выбираем элемент в котором будем добавлять контент.
//elementItem4.querySelector('.elements__photo').src = initialCards[4].link;
//elementItem4.querySelector('.elements__photo').alt = initialCards[4].name;
//elementItem4.querySelector('.elements__text').textContent = initialCards[4].name;
//sectionElements.append(elementItem4);

//const elementItem5 = imageTemplate.querySelector('.elements__item').cloneNode(true); //Выбираем элемент в котором будем добавлять контент.
//elementItem5.querySelector('.elements__photo').src = initialCards[5].link;
//elementItem5.querySelector('.elements__photo').alt = initialCards[5].name;
//elementItem5.querySelector('.elements__text').textContent = initialCards[5].name;
//sectionElements.append(elementItem5);












