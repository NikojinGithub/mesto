import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector)

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupText = this._popup.querySelector('.popup__title_type_photo');
    

  }
  open(name, link) {

   this._popupImage.alt = name; 
   this._popupImage.src = link;
   this._popupText.textContent = name;

    super.open();
  }
}