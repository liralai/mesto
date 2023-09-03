import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const profileEditButtonEl = document.querySelector('.profile__edit-button');
const popupCloseProfileButtonEl = document.querySelector('#close-profile-button');
const popupProfileEl = document.querySelector('#popup-profile');
const nameProfileInputEl = document.querySelector('#name-profile-input');
const infoProfileInputEl = document.querySelector('#info-profile-input');
const profileNameEl = document.querySelector('.profile__name');
const profileTitleEl = document.querySelector('.profile__title');
const formProfileEl = document.forms["profile-form"];
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

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  fieldsetSelector: '.popup__set',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const formProfileValidation = new FormValidator(validationConfig, formProfileEl);
formProfileValidation.enableValidation();

const formCardValidation = new FormValidator(validationConfig, formCardEl);
formCardValidation.enableValidation();

//Открытие попапа редактироsвания профиля по клику на кнопку редактирования
profileEditButtonEl.addEventListener('click', function() {
  openPopup(popupProfileEl);

  nameProfileInputEl.value = profileNameEl.textContent;
  infoProfileInputEl.value = profileTitleEl.textContent;
});

//Закрытие попап редактирования профиля без сохранения на крестик
popupCloseProfileButtonEl.addEventListener('click', function() {
  closePopup(popupProfileEl);
});

//Сохранение изменений в попапе по клику на кнопку Сохранить
formProfileEl.addEventListener('submit', function(event) {

  event.preventDefault(); //Удаляем стандартное поведение кнопки

  profileNameEl.textContent = nameProfileInputEl.value;
  profileTitleEl.textContent = infoProfileInputEl.value;

  closePopup(popupProfileEl);

  formProfileValidation.disableButton();
});

//Создание карточки для каждого элемента массива
initialCards.forEach(function(item) {
  const card = createCard(item);
  cardsSection.append(card); //Добавление карточек в секцию elements
});

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

  const card = createCard(value); //Создание новой карточки с заданными значениями
  cardsSection.prepend(card); //добавление карточки в начало списка
  closePopup(popupPlaceEl);

  event.target.reset();

  formCardValidation.disableButton();
});

//Закрытие попап редактирования профиля без сохранения на крестик
popupImageCloseButtonEl.addEventListener('click', function() {
  closePopup(popupImageEl);
});

function handleCardClick(name, link) {
  imageEl.src = link;
  imageEl.alt = name;

  imageTitleEl.textContent = name;

  openPopup(popupImageEl);
};

function createCard(item) {
  const cardElement = new Card(item, '#card-template', handleCardClick); //Создание новой карточки с заданными значениями
  return cardElement.getView();
};
