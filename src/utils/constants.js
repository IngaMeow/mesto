//Массив карточек

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible'
};

//Информация о пользователе

export const profileInformation = {
  userName: '.profile__name',
  userJob: '.profile__description'
};

//Константы
export const popupEditFormProfile = document.forms['edit-form'];
export const nameInput = popupEditFormProfile.querySelector('.form__input_type_name');
export const jobInput = popupEditFormProfile.querySelector('.form__input_type_description');

export const popupAddFormElement = document.forms['add-form'];


export const popupOpenAdd = document.querySelector('.profile__add-button');
export const popupOpenEdit = document.querySelector ('.profile__edit-button');

