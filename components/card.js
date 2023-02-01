export class Card {

  //name = title Cards; 
  //link = link to card image; 
  //templateSelector = template id; 
  //openImage = function for openPopupPhoto from index.js

  constructor(name, link, templateSelector, openPopupImage) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
  }
  
  _getTemplate() {
    const elementItem = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return elementItem;
  }
  
  // Function Add image and text to element and return it.
  generateCard() {
    this._element = this._getTemplate();

    // Find elements in card.
    this._cardPhoto = this._element.querySelector('.element__photo');
    this._cardText = this._element.querySelector('.element__text');
    this._likeButton = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._openImageButton = this._element.querySelector('.element__button-img');

    this._setEventListeners();
    
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._cardText.textContent = this._name;
    
    //console.log(this._element);
    return this._element;
  }
  
  // Function add listeners
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
     this._likeElement();
    })
    this._deleteButton.addEventListener('click', () => {
      this._deleteElement();
    })
    this._openImageButton.addEventListener('click', () => {
      this._openPopupImage(this._name, this._link);
    })
 }

  // Function like toggle.
  _likeElement() {
    this._likeButton.classList.toggle('element__like_active');
  }

  // Function delete element.
  _deleteElement() {
    this._element.remove();
  }
}
