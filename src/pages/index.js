import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig, popupEdit, btnCloseEdit, popupFormEdit, btnEdit, nameInput, jobInput, 
profileTitle, profileSubtitle, popupList, popupImg, btnAdd, btnCloseImg, sectionElements, nameInputImg,
linkInput, popupFormImg, popupPhoto, popupPhotoImage, popupPhotoText, btnClosePhoto } from "../utils/constants.js";
import './index.css';

//---------------------------Создаем экзмепляр класс PopupWithImage.-------------------------------------------------------------------------

const popupWithImage = new PopupWithImage('.popup_type_photo')
popupWithImage.setEventListeners();

//-------------Создаем экзмепляр класс PopupWithForm. Который используется для создания новых карточек.---------------------------------------

const PopupAddCardForm = new PopupWithForm({
  formSubmit: (item) => {

    const newCard = createdCard(item)                  
    defaultCardsList.addItemInBegin(newCard);
    PopupAddCardForm.close();
  }
}, '.popup_type_add')

PopupAddCardForm.setEventListeners();

//----------Создаем экзмепляр класс PopupWithForm. Который используется для изменения информации о пользователе на странице.---------------------

const PopupEditCardForm = new PopupWithForm({
  formSubmit: (data) => {

    userInfo.setUserInfo(data);

    PopupEditCardForm.close() 
  }
}, '.popup_type_edit')

PopupEditCardForm.setEventListeners();

//------------------Создаем эезмепляр класса UserInfo.----------------------------------------------------------------------------------------

const userInfo = new UserInfo({
  userName: '.profile__title', 
  userInfo: '.profile__subtitle'
})




//----------Кнопка редактирования, открывает попап с данными о пользователе. Во время открытия передает в инпуты информацию со страницы.---------

btnEdit.addEventListener('click', () => {
 
  const { name, info } = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = info;
  PopupEditCardForm.open();
      
  editValidation.resetErrors();           //Очистка ошибок, после открытия попапа. 
  editValidation.toggleButton();            // Валидация кнопки при открытии попапа.
});

//----Данная функция передается в класс Card где она получает данные. И эти данные мы передаем в функцию открытия попапа с большой картинкой.----

function openPopupImage(name, link) {
 
  popupWithImage.open(name, link);
}

//=====Функция создания новой карточки. Используется при создании дефолтных карточек и при создании новой карточки.=====

const createdCard = (item) => {
  const card = new Card (item.name, item.link, '#element', openPopupImage);
  const element = card.generateCard();
  return element;
}

//-------Создаем экземпляр класса Section. Вставляет дефолтные карточки на страницу.------------------------------------

const defaultCardsList = new Section({ 
  data: initialCards,
  renderer: (item) => {
    defaultCardsList.addItemInEnd(createdCard(item));
  }
},
  '.elements'
)

defaultCardsList.renderCards();

//---------Create validation class for popup-----------------------------

const editValidation = new FormValidator(validationConfig, popupEdit);
editValidation.enableValidation();

const addValidation = new FormValidator(validationConfig, popupImg);
addValidation.enableValidation();

//---------open and reset second popup----update---------

btnAdd.addEventListener('click', () => {
  PopupAddCardForm.open();
                   
  addValidation.resetErrors();     //Очистка ошибок, после открытия попапа.
  addValidation.toggleButton();      //Валидация кнопки при открытии попапа.
});
