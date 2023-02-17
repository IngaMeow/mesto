export default class Card {
  constructor(data, templateSelector, handleCardClick, userId, handleAddLike, handleDeleteLike, handleDeleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id
    this._userId = userId;

    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._handleDeleteCard = handleDeleteCard;
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
    this._elementDelete = this._element.querySelector('.element__delete')

    this._setEventListener();
    this._removeDeleteElementView();
    this._checkLike();

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

this._elementDelete.addEventListener('click', () => this._handleDeleteCard(this._id));

this._elementImage.addEventListener('click', () => {
  this.handleCardClick(this._name, this._link);
})
}

_handleLike() {
  this._likeButton.classList.toggle('element__like_active');
}

likedElements = () => {
  return this._likes.some(like => like._id === this._userId);
}


_checkLike = () => {
  if(this.likedElements()) {
    this._handleLike();
  }
}


handleDelete() {
  this._deleteButton.closest('.element').remove();
}

_removeDeleteElementView() {
  if (this._ownerId !== this._userId) this._elementDelete.remove();
};

// Счетчик лайков

updateLikesCounter(data) {
  this._likes = data.likes;
  this._likesCounter.textContent = this._likes.length;
  this._handleLike();
}
}

