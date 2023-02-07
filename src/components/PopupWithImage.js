import { Popup } from './Popup.js';

//Класс отвечает за открытие попапа с картинкой, данные для картинки приходят Card => function openPopupImage(name, link) => PopupWithImage.

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector)

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupText = this._popup.querySelector('.popup__title_type_photo');
    

  }

  //Перезаписываем класс open добавляем ему функциональность наполнения поапа картинки контентом.

  open(name, link) {

   this._popupImage.alt = name; 
   this._popupImage.src = link;
   this._popupText.textContent = name;

    super.open();
  }
}