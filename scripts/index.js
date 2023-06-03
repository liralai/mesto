const profileEditButtonEl = document.querySelector('.profile__edit-button');
const popupCloseProfileButtonEl = document.querySelector('#close-profile-button');
const popupProfileEl = document.querySelector('#popup-profile');
const nameProfileInputEl = document.querySelector('#name-profile-input');
const infoProfileInputEl = document.querySelector('#info-profile-input');
const profileNameEl = document.querySelector('.profile__name');
const profileTitleEl = document.querySelector('.profile__title');
const popupFormProfileEl = document.querySelector('#form-profile');
const cardTemplate = document.querySelector('#card-template');
const templateCardContent = cardTemplate.content;
const cardEl = templateCardContent.querySelector('.card');
const elementsSection = document.querySelector('.elements');
const popupPlaceEl = document.querySelector('#popup-place');
const profileAddButtonEl = document.querySelector('.profile__add-button');
const popupClosePlaceButtonEl = document.querySelector('#close-place-button');
const popupFormPlaceEl = document.querySelector('#form-place');
const namePlaceInputEl = document.querySelector('#name-place-input');
const infoPlaceInputEl = document.querySelector('#info-place-input');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Открытие попапа редактирования профиля по клику на кнопку редактирования
profileEditButtonEl.addEventListener('click', function(){
  openPopup(popupProfileEl);

  nameProfileInputEl.value = profileNameEl.textContent;
  infoProfileInputEl.value = profileTitleEl.textContent;
});

//Закрытие попап редактирования профиля без сохранения на крестик
popupCloseProfileButtonEl.addEventListener('click', function(){
  closePopup(popupProfileEl);
});

//Сохранение изменений в попапе по клику на кнопку Сохранить
popupFormProfileEl.addEventListener('submit', function(event) {

  event.preventDefault(); //Удаляем стандартное поведение кнопки

  profileNameEl.textContent = nameProfileInputEl.value;
  profileTitleEl.textContent = infoProfileInputEl.value;

  closePopup(popupProfileEl);
});

//Функция добавления модификатора попапа
function openPopup(popupElement){
  popupElement.classList.add('popup_opened');
}

//Функция удаления модификатора попапа
function closePopup(popupElement){
  popupElement.classList.remove('popup_opened');
}

//Создание карточки для каждого элемента массива
initialCards.forEach(function (item) {
  const newCard = createCard(item);
  elementsSection.append(newCard); //Добавление карточек в секцию elements
});

//Функция создания карточки
function createCard(value) {
  const newCard = cardEl.cloneNode(true); //Клонирование содержимого template

  const linkEl = newCard.querySelector('.card__image');
  linkEl.src = value.link;
  linkEl.alt = value.name;

  const titelEl = newCard.querySelector('.card__title');
  titelEl.textContent = value.name;

  return newCard;
}

/*
const deleteButton = newTodo.querySelector('.todolist-item__del');
deleteButton.addEventListener('click', function () {
  todolistItemsEl.removeChild(newTodo);
});

*/

//Открытие попапа добавления карточки по клику на кнопку редактирования
//При открытии поля в попапе очищаются
profileAddButtonEl.addEventListener('click', function(){
  openPopup(popupPlaceEl);
  namePlaceInputEl.value = '';
  infoPlaceInputEl.value = '';
});

//Закрываем попап добавления карточки без сохранения на крестик
popupClosePlaceButtonEl.addEventListener('click', function(){
  closePopup(popupPlaceEl);
});

//Добавление новой карточки через форму
popupFormPlaceEl.addEventListener('submit', function(event){
  event.preventDefault(); //Удаление стандартного поведения кнопки

  //Запись в константу значений из полей формы
  const value =
    {
      name: namePlaceInputEl.value,
      link: infoPlaceInputEl.value
    }

  const newCard = createCard(value); //Создание новой карточки с заданными значениями
  elementsSection.append(newCard); //добавление карточки в конец списка
  closePopup(popupPlaceEl);
})
