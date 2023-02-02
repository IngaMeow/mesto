import {initialCards, config, profileInformation, popupEditFormProfile, nameInput, jobInput, popupAddFormElement, popupOpenAdd, popupOpenEdit} from "../utils/constants";
import Card from "../components/Сard";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';





// экземпляры класса валидации для форм

const formValidProfile = new FormValidator(config, popupEditFormProfile);
const formValidAddCard = new FormValidator(config, popupAddFormElement);

formValidProfile.enableValidation();
formValidAddCard.enableValidation();



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



popupOpenAdd.addEventListener ('click', (evt) => {
  popupAddCard.open();
  formValidAddCard.resetValidation();
});