const popupElement = document.querySelector ('.popup');
const popups = document.querySelectorAll('.popup')
const popupCloseButtonElement = popupElement.querySelector ('.popup__close-button');


const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.form__input_type_name');
const jobInput = popupElement.querySelector('.form__input_type_description');

const popupAddFormElement = document.querySelector ('.popup__form-add');
const titleInput = popupAddFormElement.querySelector('.form__input_type_title');
const linkInput = popupAddFormElement.querySelector('.form__input_type_link');


const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__description');

const popupCloseProfile = document.querySelector('.popup__close-edit');
const popupCloseElement = document.querySelector('.popup__close-add');
const popupCloseImage = document.querySelector('.popup__close-image');

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

const popupContainer = document.querySelector('.popup__container');



//Открытите попапов
function openPopup (popupElement) {
  popupElement.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupEsc);
};


//Закрытие попапов
function closePopup (popupElement) {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupEsc);
};

//Закрытие всех попапов

popups.forEach((popup) =>{
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
})

//Закрытие esc 

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is-opened'));
  }
}

//Информация в форме редактирования
const openPopupEdit = function () {
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
  openPopup(popupElementEdit);
};

// Сохранение данных профиля
function submitFormHandler (evt) {
  evt.preventDefault();
  
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = jobInput.value;
  closePopup(popupElementEdit);
}

//Открытие карточки 
function handleClickImage(name, link) {
  popupOpenImage.src = link;
  popupOpenImage.alt = name;
  popupOpenImageTitle.textContent = name;
  openPopup(popupElementImage)
}

function createCard(item) {
  const card = new Card(item, '#element-template', handleClickImage);
  const cardElement = card.generateCard(item);
  return cardElement;
}

//Добавление карточек

const handleSubmitAddElement = (evt) => {
  evt.preventDefault();
  renderCard({name: titleInput.value, link: linkInput.value});
  evt.submitter.classList.add('popup__submit-button_invalid');
  evt.submitter.disabled = true;
  closePopup(popupElementAdd);
  evt.target.reset();
};

const renderCard = (item) => {
  elementsList.prepend(createCard(item));
};

//Обработчик событий

initialCards.forEach((item) => {
  createCard(item);
  renderCard(item);
});


//Слушатели

popupAddFormElement.addEventListener('submit', handleSubmitAddElement);
popupOpenAdd.addEventListener('click', () => openPopup(popupElementAdd));
popupOpenEdit.addEventListener('click', openPopupEdit); 
formElement.addEventListener('submit', submitFormHandler);