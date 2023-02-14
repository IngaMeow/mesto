export default class Section {
  constructor({renderer}, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector); 
  }

//Принимает DOM элемент и добавляет его в контейнер
  addItem = (element) => {
    this._container.prepend(element);
  }


//Отвечает за отрисовку элементов  

renderItems = (items) => {
  items.forEach(this._renderer.bind(this)); 
}
}