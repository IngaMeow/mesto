import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor (popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputSelector = this._formElement.querySelectorAll('.form__input');
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
      this.close();
    });
  };

  close() {
    super.close();
    this._formElement.reset();
  };
}

