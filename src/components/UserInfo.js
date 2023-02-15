export default class UserInfo {
  constructor ({userName, userJob, userAvatar}) {
    this._name = document.querySelector(userName);
    this._about = document.querySelector(userJob);
    this._avatar = document.querySelector(userAvatar);
  };

  //Получаем данные пользователя

  getUserInfo() {
    const userData = {
      userName: this._name.textContent, 
      userJob: this._about.textContent,
      userAvatar: this._avatar.src
    };
    return userData 
  };

 //Добавляем данные на страницу
 
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }
};