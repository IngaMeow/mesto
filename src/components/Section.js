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
  items.reverse().forEach(item => this._renderer(item)); 
  console.log(items)
}
}