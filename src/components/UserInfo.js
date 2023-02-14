export default class UserInfo {
  constructor ({userName, userJob, userAvatar}) {
    this._name = document.querySelector(userName);
    this._about = document.querySelector(userJob);
    this._avatar = document.querySelector(userAvatar);
  };

  //Получаем данные пользователя

  getUserInfo() {
    const userData = {
      name: this._name.textContent, 
      about: this._about.textContent,
      userAvatar: this._avatar.src
    };
    return userData 
  };

 //Добавляем данные на страницу
 
  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
    this._avatar.src = userData.avatar;
  }
};