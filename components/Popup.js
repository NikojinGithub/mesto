export class Popup {
 //Передаем  в конструктор селектор попапа.
  constructor(selector){
    this._popup = document.querySelector(selector);
  }
 //Публичная функция - открывает попап.  Вешает обработчик закрытия по esc.
  open() {
    //this.setEventListeners()
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose);
  }
 //Публичная функция - закрывает попап. Снимает Обработчик закрытия по esc.
  close() { 
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose);  
  }
   //Приватная функция закрывает попап по нажатию esc. 
  _handleEscClose = (e) => {
    if(e.key === 'Escape') {
      this.close();
    }
  }
  //Публичная функция добавляет слушатель на клик мыши для закрытия попапа.
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if ((evt.target === this._popup) || evt.target.classList.contains('popup__close')) {
        this.close()
      }
    })
  }
}

