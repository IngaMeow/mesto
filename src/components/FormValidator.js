export default class FormValidator {
  constructor (config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputs = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._button = this._formElement.querySelector(this._submitButtonSelector);
  }

//Проверка валидности инпутов

 _checkInputValidity(inputElement) {
  if (inputElement.validity.valid) {
    this._hideInputError(inputElement);
    } else {
    this._showInputError(inputElement);
    }
  }

  // Скрытие ошибки

  _hideInputError(inputElement) {
    const error = this._formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = '';
    error.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
  }

// Показ ошибки
  _showInputError(inputElement) {
    const error = this._formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = inputElement.validationMessage;
    error.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }

  _isFormValid() {
    return this._inputs.every(inputElement => inputElement.validity.valid);
  }


//Переключение кнопок взависимости от валидности

_toggleButtonState() {
  if(this._isFormValid(this._inputs)) {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = '';
  } else {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = 'disabled';
  } 
  }

  //Обработка всех полей формы
  _setEventListeners() {
    this._toggleButtonState();  

    this._inputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);    
        this._toggleButtonState();
      });
    });
  }

  resetValidation () {
    this._toggleButtonState();
    this._inputs.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

//Обработка форм
  enableValidation = () => {
    this._formElement.addEventListener ('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
    }
}