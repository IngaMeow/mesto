//Проверка валидности инпутов

const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);

  if(input.validity.valid) {
    error.textContent = '';
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);

  } else {
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
  }
}

//Переключение кнопок взависимости от валидности
const toggleButtonState = (inputs, button, config) => {
  const isFormValid = inputs.every(input => input.validity.valid);

  if(isFormValid) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = '';
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
  } 
};



//enableValidation

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);
  
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValidity(input, config);    
        toggleButtonState(inputs, button, config);
      });
    });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible'
});