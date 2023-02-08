//Класс обрабатывает получаемые объект с данными и вставляет готовый элемент карточки на страницу.

export class Section {
  constructor ({ data, renderer}, containerSelector) {
    this._itemsArray = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }


  // renderCards проходит про передаваемому объекту карточек и вызывает для каждой из них
  //функцию колбэк которая передается в конструкторе.
  //В эту функцию, на место this._renderer передается функция создания карточки из index.js (передавая функция возвращает элемент готовой карточки)
  renderCards() {
    this._itemsArray.forEach((item) => this._renderer(item));
  }


  // функция для вставки объекта с карточками. Используется с дефолтными карточками.
  addItemInEnd(item) {
    this._container.append(item);
  }

  // функция для вставки созданных карточек. Используется для вставки созданных карточек.
  addItemInBegin(item) {
    this._container.prepend(item);
  }
}
