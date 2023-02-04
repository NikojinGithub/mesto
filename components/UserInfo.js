
export class UserInfo {
  constructor ({ userName, userInfo }) {

    //Принимает в конструктор объект с селекторами двух элементов: 
    //элемента имени пользователя и элемента информации о себе.
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);

    // this._inputName = document.querySelector('.popup__input_type_name');
    // this._inputJob = document.querySelector('.popup__input_type_job');

    //this._inputList = document.querySelectorAll('.popup__form');
  }

  //Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
  //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  getUserInfo() {
    // this._inputName.value = this._userName.textContent,
    // this._inputJob.value = this._userInfo.textContent


    // const data = {
    // name: this._inputName.value = this._userName.textContent,
    // info: this._inputJob.value = this._userInfo.textContent
    // }

    const data = {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    }
     return data;
  }


  //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.info;
  }
  
}