import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupOpenImage = this._popupElement.querySelector('.popup__image');
    this._popupOpenImageTitle = this._popupElement.querySelector('.popup__image-title');
  };

  open(name, link) {
    this._popupOpenImage.src = link;
    this._popupOpenImage.alt = name;
    this._popupOpenImageTitle.textContent = name;

    super.open();
    console.log('index', name, link);

  };
}

