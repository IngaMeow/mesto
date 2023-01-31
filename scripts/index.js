import {initialCards, config} from "./constants.js";
import Card from "./Сard.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const popupElement = document.querySelector ('.popup');
const popups = document.querySelectorAll('.popup')


const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.form__input_type_name');
const jobInput = popupElement.querySelector('.form__input_type_description');

const popupAddFormElement = document.querySelector ('.popup__form-add');
const titleInput = popupAddFormElement.querySelector('.form__input_type_title');
const linkInput = popupAddFormElement.querySelector('.form__input_type_link');


const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__description');

const popupEditFormProfile = document.querySelector ('.popup__form-edit');

const popupOpenAdd = document.querySelector('.profile__add-button');
const popupOpenEdit = document.querySelector ('.profile__edit-button');

const popupElementEdit = document.querySelector('.popup_type_edit');
const popupElementAdd = document.querySelector('.popup_type_add');
const popupElementImage = document.querySelector('.popup_type_image');

const popupOpenImage = document.querySelector('.popup__image');
const popupOpenImageTitle = document.querySelector('.popup__image-title');

const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const elementsList = document.querySelector('.elements__list');


// экземпляры класса валидации для форм

const formValidProfile = new FormValidator(config, popupEditFormProfile);
const formValidAddCard = new FormValidator(config, popupAddFormElement);

formValidProfile.enableValidation();
formValidAddCard.enableValidation();

//Информация о пользователе

const profileInformation = {
  userName: '.profile__name',
  userJob: '.profile__description'
};

const userInfo = new UserInfo(profileInformation);


//Открытие карточки 

function createCard(item) {
  const card = new Card(item, '#element-template', handleOpenClickImage);
  const cardElement = card.generateCard(item);
  return cardElement;
}


// Отрендерить карточки из массива

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));  
  }
}, '.elements__list');
cardList.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();


function handleOpenClickImage (name, link) {

  popupWithImage.open(name,link);
  console.log('index', name, link);

}

// Редактирование профиля

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit', {
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
  }
});
popupEditProfile.setEventListeners();

popupOpenEdit.addEventListener('click', () => {
  popupEditProfile.open();
  const {name, about} = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;
});

//Создание карточки

const popupAddCard = new PopupWithForm (
  '.popup_type_add', {
  handleFormSubmit: (cardData) => {
    const newCard = createCard(cardData);
    cardList.addItem(newCard);
    popupAddCard.close();
  }
  });
popupAddCard.setEventListeners();



popupOpenAdd.addEventListener ('click', () => {
  popupAddCard.open();
});