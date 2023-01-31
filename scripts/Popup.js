export default class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }
  
  open() {
    this._popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
};

  close() {
    this._popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  _closePopupMousedown(evt) {
    if (evt.target.classList.contains('popup_is-opened') || 
    evt.target.classList.contains('popup__close-button')) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton = this._popupElement.querySelector('.popup__close-button');
    this._closeButton.addEventListener('click', () => {this.close();});
    this._popupElement.addEventListener ('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      };
    });
  };
}
