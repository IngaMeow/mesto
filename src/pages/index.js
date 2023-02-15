import {initialCards, config, profileInformation, popupEditFormProfile, nameInput, jobInput, popupAddFormElement, popupOpenAdd, popupOpenEdit} from "../utils/constants";
import Card from "../components/Сard";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { Api } from "../components/api";
import '../pages/index.css';


const editAvatarButton = document.querySelector('.profile__avatar-edit');
const popupEditAvatarButton = document.querySelector('.popup__edit-avatar');

//Подключение APi

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'c46d3721-4c82-475a-8797-44a490894204',
    'Content-Type': 'application/json'
  }
})

let userId;



Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([items, userData]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(items);
  })
  .catch((err) => {
    console.log(err);
  });


// экземпляры класса валидации для форм

const formValidProfile = new FormValidator(config, popupEditFormProfile);
const formValidAddCard = new FormValidator(config, popupAddFormElement);
const formValidEditAvatar = new FormValidator (config, popupEditAvatarButton);

formValidProfile.enableValidation();
formValidAddCard.enableValidation();
formValidEditAvatar.enableValidation();



const userInfo = new UserInfo(profileInformation);


//Открытие карточки 

const createCard = (data) => {
  const card = new Card(data, '#element-template', handleOpenClickImage);
  const cardElement = card.generateCard();
  return cardElement;
}


// Отрендерить карточки из массива

const cardList = new Section ({
  renderer: (item) => {
    cardList.addItem(createCard(item)); 
  }
}, '.elements__list');


const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();


function handleOpenClickImage (name, link) {

  popupWithImage.open(name,link);
}

// Редактирование профиля

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit', {
  handleFormSubmit: (userData) => {
    popupEditProfile.load(true);
    api.editUserInfo(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
    })
      .finally(() => {
        popupEditProfile.load(false)
    })
  }  
});
popupEditProfile.setEventListeners();

popupOpenEdit.addEventListener('click', () => {
  popupEditProfile.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.userName;
  jobInput.value = data.userJob;
});

//Редактирование аватара

const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', {
  handleFormSubmit: (userData) => {
    popupEditAvatar.load(true);
    api.editAvatar(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        popupEditAvatar.close();
        console.log(userInfo.setUserInfo(userData))
    })
      .finally(() => {
        popupEditAvatar.load(false)
    })
  }  
});
popupEditAvatar.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  //formValidEditAvatar.toggleButtonState();
  popupEditAvatar.open();
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



popupOpenAdd.addEventListener ('click', (evt) => {
  popupAddCard.open();
  formValidAddCard.resetValidation();
});