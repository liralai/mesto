const profileEditButtonEl = document.querySelector('.profile__edit-button');
const popupCloseProfileButtonEl = document.querySelector('#close-profile-button');
const popupProfileEl = document.querySelector('#popup-profile');
const nameProfileInputEl = document.querySelector('#name-profile-input');
const infoProfileInputEl = document.querySelector('#info-profile-input');
const profileNameEl = document.querySelector('.profile__name');
const profileTitleEl = document.querySelector('.profile__title');
const formProfileEl = document.forms["profile-form"];
const cardTemplate = document.querySelector('#card-template');
const templateCardContent = cardTemplate.content;
const cardEl = templateCardContent.querySelector('.card');
const cardsSection = document.querySelector('.elements');
const popupPlaceEl = document.querySelector('#popup-place');
const profileAddButtonEl = document.querySelector('.profile__add-button');
const popupClosePlaceButtonEl = document.querySelector('#close-place-button');
const formCardEl = document.forms["card-form"];
const namePlaceInputEl = document.querySelector('#name-place-input');
const infoPlaceInputEl = document.querySelector('#info-place-input');
const popupImageEl = document.querySelector('#popup-image');
const popupImageCloseButtonEl = document.querySelector('#close-image-button');
const imageEl = document.querySelector('.popup-image__image');
const imageTitleEl = document.querySelector('.popup-image__title');
const profileFormSubmitButton = formProfileEl.querySelector('.popup__save-button');
const cardFormSubmitButton = formCardEl.querySelector('.popup__save-button');

//Открытие попапа редактирования профиля по клику на кнопку редактирования
profileEditButtonEl.addEventListener('click', function() {
  openPopup(popupProfileEl);

  nameProfileInputEl.value = profileNameEl.textContent;
  infoProfileInputEl.value = profileTitleEl.textContent;
});

//Закрытие попап редактирования профиля без сохранения на крестик
popupCloseProfileButtonEl.addEventListener('click', function() {
  closePopup(popupProfileEl);
});

//Закрытие попапа редактирование профиля без сохранения на Escape
function closePopupOnEsc (event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

//Закрытие попапа редактирование профиля без сохранения на область вне попапа
function closePopupOnOverlay (event) {
  const popupOpened = document.querySelector('.popup_opened');

  if (event.target === popupOpened) {
    closePopup(popupOpened);
  };
};

//Сохранение изменений в попапе по клику на кнопку Сохранить
formProfileEl.addEventListener('submit', function(event) {

  event.preventDefault(); //Удаляем стандартное поведение кнопки

  profileNameEl.textContent = nameProfileInputEl.value;
  profileTitleEl.textContent = infoProfileInputEl.value;

  closePopup(popupProfileEl);

  disableButton(profileFormSubmitButton);
});

//Функция добавления модификатора попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown',closePopupOnEsc);
  document.addEventListener('click', closePopupOnOverlay);
}

//Функция удаления модификатора попапа
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown',closePopupOnEsc);
  document.removeEventListener('click', closePopupOnOverlay);
}

//Создание карточки для каждого элемента массива
initialCards.forEach(function(item) {
  const newCard = createCard(item);
  cardsSection.append(newCard); //Добавление карточек в секцию elements
});

//Функция создания карточки
function createCard(value) {
  const newCard = cardEl.cloneNode(true); //Клонирование содержимого template

  const cardImgEl = newCard.querySelector('.card__image');
  cardImgEl.src = value.link;
  cardImgEl.alt = value.name;

  const titleEl = newCard.querySelector('.card__title');
  titleEl.textContent = value.name;

  //Удаление карточки по клику на кнопку
  const deleteButton = newCard.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {
    cardsSection.removeChild(newCard);
  });

  //Кнопка Like становится активной по клику, при повторном клике активное состояние убирается
  const likeButton = newCard.querySelector('.card__like-button');
  likeButton.addEventListener('click', function(event) {
    event.target.classList.toggle('card__like-button_active');
  });

    //Открытие попапа с картинкой по клику на изображение
  const openImageButtonEl = newCard.querySelector('.card__open-image-button');
  openImageButtonEl.addEventListener('click', function() {
    openPopup(popupImageEl);

    imageEl.src = value.link;
    imageEl.alt = value.name;

    imageTitleEl.textContent = value.name;
  });

  return newCard;
}

//Открытие попапа добавления карточки по клику на кнопку редактирования
//При открытии поля в попапе очищаются
profileAddButtonEl.addEventListener('click', function() {
  openPopup(popupPlaceEl);
});

//Закрываем попап добавления карточки без сохранения на крестик
popupClosePlaceButtonEl.addEventListener('click', function() {
  closePopup(popupPlaceEl);
});

//Добавление новой карточки через форму
formCardEl.addEventListener('submit', function(event) {
  event.preventDefault(); //Удаление стандартного поведения кнопки

  //Запись в константу значений из полей формы
  const value =
    {
      name: namePlaceInputEl.value,
      link: infoPlaceInputEl.value
    }

  const newCard = createCard(value); //Создание новой карточки с заданными значениями
  cardsSection.prepend(newCard); //добавление карточки в начало списка
  closePopup(popupPlaceEl);

  event.target.reset();

  disableButton(cardFormSubmitButton);
});

//Закрытие попап редактирования профиля без сохранения на крестик
popupImageCloseButtonEl.addEventListener('click', function() {
  closePopup(popupImageEl);
});
