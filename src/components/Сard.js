export default class Card {
  constructor(data, templateSelector, handleCardClick, userId, handleAddLike, handleDeleteLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._userId = userId;


    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  //Клонирование элемента
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;  
  }

  //Создание карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;
    this._likesCounter = this._element.querySelector('.element__counter');
    this._likesCounter.textContent = this._likes.length;
    this._checkLike();

    this._setEventListener();

    return this._element;
  }


//Слушатели 
_setEventListener() {
this._likeButton = this._element.querySelector('.element__like');
this._deleteButton = this._element.querySelector('.element__delete');

this._likeButton.addEventListener('click', () => {
  if(!this._likeButton.classList.contains('element__like_active')) {
    this._handleAddLike(this._id);
  } else {
    this._handleDeleteLike(this._id);
  }
});

// this._likeButton.addEventListener('click', () => {
//   this._handleLike();
// });

// this._deleteButton.addEventListener('click', () => {
//   this._handleDelete()
// });

this._elementImage.addEventListener('click', () => {
  this.handleCardClick(this._name, this._link);
})
}

_handleLike() {
  this._likeButton.classList.toggle('element__like_active');
}

_handleDelete() {
  this._deleteButton.closest('.element').remove();
}

_checkLike() {
  if(this._likes.some((user) => {
    return this._userId === user._id;
  })) {
    this._likeButton.classList.add('element__like_active');

  }
};

updateLikesCounter(data) {
  this._likes = data.likes;
  console.log(data.likes)
  this._likesCounter.textContent = this._likes.length;
  this.handleLike();
}
}

