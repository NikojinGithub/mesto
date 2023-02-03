
export class UserInfo {
  constructor ({ userName, userJob }) {

    //Принимает в конструктор объект с селекторами двух элементов: 
    //элемента имени пользователя и элемента информации о себе.
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);

    this._inputName = document.querySelector('.popup__input_type_name');
    this._inputJob = document.querySelector('.popup__input_type_job');

    this._inputList = document.querySelectorAll('.popup__form');
  }

  //Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
  //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  getUserInfo() {
    this._inputName.value = this._userName.textContent;
    this._inputJob.value = this._userJob.textContent;
  }


  //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    this._userName = this._formValues.name;
  }

  
}