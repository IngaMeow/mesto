export class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    }

    
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    editUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify ({
          name: data.name,
          about: data.about
        })
      })
      .then(this._checkResponse)
    }
  
    editAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar
        })
      })
      .then(this._checkResponse)
    }
  
    getInitialCards = () => {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    addNewCard = (data) => {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        })
      })
      .then(this._checkResponse)
    }
  
  
    deleteCard = (cardID) => {
      return fetch(`${this._baseUrl}/cards/${cardID}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    addCardLike = (cardID) => {
      return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    deleteCardLike = (cardID) => {
      return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._checkResponse)
    }
  }