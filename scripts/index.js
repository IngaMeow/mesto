const popupElement = document.querySelector ('.popup');
const popupOpenButtonElement = document.querySelector ('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close-button');


let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__form-input_name');
let jobInput = popupElement.querySelector('.popup__form-input_description');
let profileNameElement = document.querySelector('.profile__name');
let profileAboutElement = document.querySelector('.profile__description');

const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

popupOpenButtonElement.addEventListener('click', openPopup); 
popupCloseButtonElement.addEventListener('click', closePopup); 

function formSubmitHandler (evt) {
  evt.preventDefault();
  
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);