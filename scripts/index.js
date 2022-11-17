const popupElement = document.querySelector ('.popup');
const popupOpenButtonElement = document.querySelector ('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close-button');

let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__text_name');
let jobInput = popupElement.querySelector('.popup__text_description');
let profileNameElement = document.querySelector('.profile__name');
let profileAboutElement = document.querySelector('.profile__description');
 

const OpenPopup = function() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileAboutElement.textContent;
}

const ClosePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

OpenPopup();
ClosePopup();

function formSubmitHandler (evt) {
  evt.preventDefault();
  
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = jobInput.value;

  ClosePopup();
}

popupOpenButtonElement.addEventListener('click', OpenPopup); 
popupCloseButtonElement.addEventListener('click', ClosePopup); 
formElement.addEventListener('submit', formSubmitHandler);