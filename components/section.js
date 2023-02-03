export class Section {
  constructor ({ data, renderer}, containerSelector) {
    this._itemsArray = data;
    this._renderer = renderer;

    this._containerSelector = containerSelector;
  }

  renderCards() {
    this._itemsArray.forEach((item) => this._renderer(item));
  }

  addItemInEnd(item) {
    this._containerSelector.append(item);
  }

  addItemInBegin(item) {
    this._containerSelector.prepend(item);
  }
}
