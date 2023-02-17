import Popup from "./Popup";

export class PopupWithConfirmation extends Popup {
   constructor(popupSelector){
    super(popupSelector);
      this._formElement = this._popupElement.querySelector('.popup__form');
   }

   setCallback(callback) {
    this._callback = callback;
   }

   setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callback();   
    });
   }

}