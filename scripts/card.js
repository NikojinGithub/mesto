import { initialCards } from "./cards.js";
import { openImage } from "./index.js";

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const elementItem = document
    .querySelector('#element')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return elementItem;
  }
  
  // Function Add image and text to element and return it.
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    
    //console.log(this._element);
    return this._element;
  }
  
  // Function add listeners
  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
     this._likeElement();
    })
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteElement();
    })
    this._element.querySelector('.element__button-img').addEventListener('click', () => {
      this._openImage();
    })
 }

  // Function like toggle.
  _likeElement() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  // Function delete element.
  _deleteElement() {
    this._element.remove();
  }
  
  // Function open popup with image.
  _openImage() {
    document.querySelector('.popup__image').setAttribute('src', this._link);
    document.querySelector('.popup__image').setAttribute('alt', this._name);
    document.querySelector('.popup__title_type_photo').textContent = this._name;
    this._setClickHandler(openImage);
  }
   // Function get another function from index.js and return it.
  _setClickHandler = (func) => {
    func();
  };
}

 // Create new card from initialCards array.
initialCards.forEach((item) => {
  const card = new Card (item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
})
 

//===========================================================================

// const popupPhoto = document.querySelector('.popup_type_photo');
// const popupImage = popupPhoto.querySelector('.popup__image');
// const popupText = popupPhoto.querySelector('.popup__title_type_photo');
// const sectionElements = document.querySelector('.elements');

// const handleFormSubmitImg = (evt) => {
//   evt.preventDefault();
//   const element = {
//     name: nameInputImg.value,
//     link: linkInput.value
//   };
  
//   renderElementPrep(element);
//   closePopup(popupImg); 
// };

// const renderElementPrep = (item) => {               /// addBegin
//   sectionElements.prepend(item);
// };

// popupFormImg.addEventListener ('submit', handleFormSubmitImg);

// class DefaultCard extends Card {
//   constructor(data, templateSelector){
//     super(templateSelector);
//     this._name = data.name;
//     this._link = data.link;
//   }

//   generateCard() {
//     this._element = super._getTemplate();
//     super._setEventListeners();

//     this._element.querySelector('.element__photo').src = this._link;
//     this._element.querySelector('.element__photo').alt = this._name;
//     this._element.querySelector('.element__text').textContent = this._name;
    
//     return this._element;
//   }
// }

// initialCards.forEach((item) => {
//   const card = new Card (item.name, item.link);
//   const cardElement = card.generateCard();

//   sectionElements.append(cardElement);
// })