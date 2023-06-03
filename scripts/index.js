const profileEditButtonEl = document.querySelector('.profile__edit-button');
const popupCloseButtonEl = document.querySelector('.popup__close-button');
const popupEl = document.querySelector('.popup');
const nameInputEl = document.querySelector('#name-input');
const infoInputEl = document.querySelector('#info-input');
const profileNameEl = document.querySelector('.profile__name');
const profileTitleEl = document.querySelector('.profile__title');
const popupFormEl = document.querySelector('.popup__form');
const cardTemplate = document.querySelector('#card-template');
const templateCardContent = cardTemplate.content;
const cardEl = templateCardContent.querySelector('.card');
const elementsSection = document.querySelector('.elements');

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
