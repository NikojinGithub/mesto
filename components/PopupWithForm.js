import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor( { formSubmit }, selector) {
    super(selector);
    this._formSubmit = formSubmit;

    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelector('.popup__form'); //this._popup // popup__form_type_add
  }
  //Собирает данные всех полей
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, 
//но и добавлять обработчик сабмита формы.
  setEventListeners() {
  this._popup.addEventListener ('submit', (evt) => {
    evt.preventDefault();
    this._formSubmit(this._getInputValues());

  })
    
    super.setEventListeners()
  }
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    
    this._form.reset();

    super.close()
  }
}