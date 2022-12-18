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
    popupOpenImage.src = item.link;
    popupOpenImageTitle.textContent = item.name;
    popupOpenImage.alt = item.name;

    openPopup(popupElementImage);
  });

  return newCard;
};


//Добавление карточек

const handleSubmitAddElement = (evt) => {
  evt.preventDefault();
  renderCard({name: titleInput.value, link: linkInput.value});
  evt.submitter.classList.add('popup__submit-button_invalid');
  evt.submitter.disabled = true;
  closePopup(popupElementAdd);
  evt.target.reset();
};


//Обработчик событий
const renderCard = (item) => {
  elementsList.prepend(generateCard(item));
};

initialCards.forEach((item) => {
  renderCard(item);
});


//Слушатели

popupAddFormElement.addEventListener('submit', handleSubmitAddElement);
popupOpenAdd.addEventListener('click', () => openPopup(popupElementAdd));
popupOpenEdit.addEventListener('click', openPopupEdit); 
formElement.addEventListener('submit', submitFormHandler);


