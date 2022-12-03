const popupElement = document.querySelector ('.popup');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close-button');


const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.form__input_type_name');
const jobInput = popupElement.querySelector('.form__input_type_description');
const tileInput = popupElement.querySelector('.form__input_type_title');
const linkInput = popupElement.querySelector('.form__input_type_link');


const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__description');

const popupCloseProfile = document.querySelector('.popup__close-edit');
const popupCloseElement = document.querySelector('.popup__close-add');
const popupCloseImage = document.querySelector('.popup__close-image');

const popupEditFormProfile = document.querySelector ('.popup__form-edit');
const popupAddFormElement = document.querySelector ('.popup__form-add');

const popupOpenAdd = document.querySelector('.profile__add-button');
const popupOpenEdit = document.querySelector ('.profile__edit-button');

const popupElementEdit = document.querySelector('.popup_type_edit');
const popupElementAdd = document.querySelector('.popup_type_add');
const popupElementImage = document.querySelector('.popup_type_image');

const popupOpenImage = document.querySelector('.popup__image');
const popupOpenImageTitle = document.querySelector('.popup__image-title');

const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const elementsList = document.querySelector('.elements__list');

//Массив карточек

const initialCards = [
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


//Открытите попапов
function openPopup (popupElement) {
  popupElement.classList.add('popup_is-opened');
}


//Закрытие попапов
function closePopup (popupElement) {
  popupElement.classList.remove('popup_is-opened');
}

//Информация в форме редактирования
const openPopupEdit = function () {
  openPopup(popupElementEdit);
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
};

// Сохранение данных профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = jobInput.value;
  closePopup(popupElementEdit);
}

//Закрытие попапов

popupCloseProfile.addEventListener('click', function() {
  closePopup(popupElementEdit);
});
popupCloseElement.addEventListener('click', function() {
  closePopup(popupElementAdd);
});
popupCloseImage.addEventListener('click', function() {
  closePopup(popupElementImage);
});


//Добавление карточек из массива
function generateCard (item) {
  const newCard = elementTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.element__name');
  const cardImage = newCard.querySelector('.element__image');
  
  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

// Лайки и удаление карточек
  newCard.querySelector('.element__like').addEventListener('click', function (e){
    e.target.classList.toggle('element__like_active');
  });

  newCard.querySelector('.element__delete').addEventListener('click', function (e){
    e.target.closest('.element').remove();
  });

  newCard.querySelector('.element__image').addEventListener('click', function() {
    openPopup(popupElementImage);

    popupOpenImage.src = item.link;
    popupOpenImageTitle.textContent = item.name;
    popupOpenImage.alt = item.name;

  });

  return newCard;
  
};



//Обработчик событий
function renderCard (item) {
  elementsList.prepend(generateCard(item));
};


//Добавление карточек
initialCards.forEach((item) => elementsList.append(generateCard(item)));

//Слушатели

popupOpenAdd.addEventListener('click', () => openPopup(popupElementAdd));
popupOpenEdit.addEventListener('click', openPopupEdit); 
formElement.addEventListener('submit', formSubmitHandler);