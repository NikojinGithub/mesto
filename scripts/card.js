//import { initialCards } from "./cards";


const popupPhoto = document.querySelector('.popup_type_photo');
const popupImage = popupPhoto.querySelector('.popup__image');
const popupText = popupPhoto.querySelector('.popup__title_type_photo');
const sectionElements = document.querySelector('.elements');

class Card {
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

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    
    //console.log(this._element);
    return this._element;
  }
  
  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
     this._likeElement();
    })
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteElement();
    })
    this._element.querySelector('.element__button-img').addEventListener('click', () => {
      this._openImage();
      this._setClickHandler(openImage);
    })
 }

  _likeElement() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteElement() {
    this._element.remove();
  }

  _openImage() {
    popupImage.setAttribute('src', this._link);
    popupImage.setAttribute('alt', this._name);
    popupText.textContent = this._name;
  }

  _setClickHandler = (func) => {
    func();
  };

}

initialCards.forEach((item) => {
  const card = new Card (item.name, item.link);
  const cardElement = card.generateCard();
  sectionElements.append(cardElement);
})

//export default Card;
 



//===========================================================================

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