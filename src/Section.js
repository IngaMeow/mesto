// Конструктор принимает параметры с объектами
// items - массив данных, renderer - отрисовка данных, selector - сюда добавляем созданные элементы
 

export default class Section {
  constructor({items, renderer}, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

//Принимает DOM элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

//Отвечает за отрисовку элементов  

  renderItems() {
    this._renderedItems.forEach(item =>{
      this._renderer(item);
    });
  }
}