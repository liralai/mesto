const profileEditButtonEl = document.querySelector('.profile__edit-button');
const popupSaveButtonEl = document.querySelector('.popup__save-button');
const popupCloseButtonEl = document.querySelector('.popup__close-button');
const popupEl = document.querySelector('.popup');
const nameInputEl = document.querySelector('#name-input');
const infoInputEl = document.querySelector('#info-input');
const profileNameEl = document.querySelector('.profile__name');
const profileTitleEl = document.querySelector('.profile__title');
const popupFormEl = document.querySelector('.popup__form');

nameInputEl.value = profileNameEl.textContent;
infoInputEl.value = profileTitleEl.textContent;

profileEditButtonEl.addEventListener('click', function(){
  popupEl.classList.add('popup_is-opened');
});

popupCloseButtonEl.addEventListener('click', function(){
  popupEl.classList.remove('popup_is-opened');
});

popupFormEl.addEventListener('submit', function(event) {

  event.preventDefault();

  profileNameEl.textContent = nameInputEl.value;
  profileTitleEl.textContent = infoInputEl.value;

  popupSaveButtonEl.addEventListener('click', function(){
    popupEl.classList.remove('popup_is-opened');
  });
});
