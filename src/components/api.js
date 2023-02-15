export class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }  
  
  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-59/users/me', {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch(() => {console.log})
  }

  editUserInfo(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify ({
        name: data.name,
        about: data.about
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch(() => {console.log})
  }

  editAvatar(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(() => {console.log})  
  }

  getInitialCards = () => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .then(res => (console.log('res =>', res), res))
    .catch(err => console.log(err));
  }

  addNewCard = (data) => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject())
    .catch(() => {console.log})
  }


  deleteCard = (id) => {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/cardId ' + id, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => res.ok ? res.json() : Promise.reject())    
    .catch(() => {console.log})
  }

  addCardLike = (id) => {
    return fetch('https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes' + id + '/likes', {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => res.ok ? res.json() : Promise.reject())    
    .catch(() => {console.log})
  }

  deleteCardLike = (id) => {
    return fetch('https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes' + id + '/likes', {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => res.ok ? res.json() : Promise.reject())    
    .catch(() => {console.log})
  }
}

