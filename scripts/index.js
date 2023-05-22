const profileEditButtonEl = document.querySelector('.profile__edit-button');
const popupCloseButtonEl = document.querySelector('.popup__close-button');
const popupEl = document.querySelector('.popup');
const nameInputEl = document.querySelector('#name-input');
const infoInputEl = document.querySelector('#info-input');
const profileNameEl = document.querySelector('.profile__name');
const profileTitleEl = document.querySelector('.profile__title');
const popupFormEl = document.querySelector('.popup__form');

//Открываем попап по клику на кнопку редактирования
profileEditButtonEl.addEventListener('click', function(){
  openPopup(popupEl);

  nameInputEl.value = profileNameEl.textContent;
  infoInputEl.value = profileTitleEl.textContent;
});

//Закрываем попап без сохранения на крестик
popupCloseButtonEl.addEventListener('click', function(){
  closePopup(popupEl);
});

//Сохраняем изменения в попапе по клику на кнопку Сохранить
popupFormEl.addEventListener('submit', function(event) {

  event.preventDefault(); //Удаляем стандартное поведение кнопки

  profileNameEl.textContent = nameInputEl.value;
  profileTitleEl.textContent = infoInputEl.value;

  closePopup(popupEl);
});

//Функция добавления модификатора попапа
function openPopup(popupElement){
  popupElement.classList.add('popup_opened');
}

//Функция удаления модификатора попапа
function closePopup(popupElement){
  popupElement.classList.remove('popup_opened');
}
