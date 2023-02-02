export default class UserInfo {
  constructor ({userName, userJob}) {
    this._name = document.querySelector(userName);
    this._about = document.querySelector(userJob);
  };

  //Получаем данные пользователя

  getUserInfo() {
    const userData = {
      name: this._name.textContent, 
      about: this._about.textContent
    };
    return userData 
  };

 //Добавляем данные на страницу
 
  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
  }
};