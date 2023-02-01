export class Popup {
  constructor(selector){
    this._selector = selector;
  }

  open() {
    this._selector.classList.add('popup_opened');
  }

  close() {
    this._classList.remove('popup_opened');
  }
}