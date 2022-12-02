const popupElement = document.querySelector ('.popup');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close-button');


const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.form__input_type_name');
const jobInput = popupElement.querySelector('.form__input_type_description');

const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__description');

const popupCloseProfile = document.querySelector('.popup__close-edit');
const popupCloseElement = document.querySelector('.popup__close-add');

const popupEditFormProfile = document.querySelector ('.popup__form-edit');
const popupAddFormElement = document.querySelector ('.popup__form-add');

const popupOpenAdd = document.querySelector('.profile__add-button');
const popupOpenEdit = document.querySelector ('.profile__edit-button');

const popupElementEdit = document.querySelector('.popup_type_edit');
const popupElementAdd = document.querySelector('.popup_type_add')



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

// Сохранение данных
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

popupOpenAdd.addEventListener('click', () => openPopup(popupElementAdd));


popupOpenEdit.addEventListener('click', openPopupEdit); 
formElement.addEventListener('submit', formSubmitHandler);