export const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export const initialCards = [
  {
    name: 'Эверест',
    
    link: 'https://images.unsplash.com/photo-1575819719798-83d97dd6949c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  },
  {
    name: 'Ачипсинские водопады',
    
    link: 'https://images.unsplash.com/photo-1674112898878-84888cdcec6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
  },
  {
    name: 'Гора Чогори',
    
    link: 'https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Бзерпинский карниз',
    
    link: 'https://images.unsplash.com/photo-1674112906210-0d14632f08e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
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

export const popupEdit = document.querySelector('.popup_type_edit');
export const btnCloseEdit = popupEdit.querySelector('.popup__close');
export const popupFormEdit = popupEdit.querySelector('.popup__form');
export const btnEdit = document.querySelector('.profile__edit');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const popupList = document.querySelectorAll('.popup');
export const popupImg = document.querySelector('.popup_type_add');

export const btnAdd = document.querySelector('.profile__add-button');
export const btnCloseImg = document.querySelector('.popup__close_type_add');
export const sectionElements = document.querySelector('.elements');                //Блок в котором будут картинки
export const nameInputImg = document.querySelector('.popup__input_type_nameImg');  
export const linkInput = document.querySelector('.popup__input_type_link');
export const popupFormImg = document.querySelector('.popup__form_type_add');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupPhotoImage = document.querySelector('.popup__image');
export const popupPhotoText = document.querySelector('.popup__title_type_photo');
export const btnClosePhoto = document.querySelector('.popup__close_type_photo');