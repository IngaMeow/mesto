import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor (popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputSelector = this._formElement.querySelectorAll('.form__input');
    this._button = this._formElement.querySelector('.popup__submit-button')
    this._handleFormSubmit = handleFormSubmit;
  };   

  // Собираем данные всех полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputSelector.forEach((input) => { 
      this._formValues[input.name] = input.value;});
    return this._formValues;
  };


  setEventListeners () {
    super.setEventListeners();
    this._formElement.addEventListener ('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  };

  close() {
    super.close();
    this._formElement.reset();
  };

  // Ожидание загрузки на кнопке

  setButtonText = (text) => {
    this._button.textContent = text;
  }
  

  load(loading) {
    if(loading) {
      this.setButtonText('Сохранение...');
    } else {
      this.setButtonText('Сохранить');
    }
  }

}

