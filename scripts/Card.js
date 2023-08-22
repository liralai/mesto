import { openPopup } from "./utils.js";

class Card {
  constructor({name, link}) {
    this._title = name;
    this._link = link;
  };

  _getTemplate() {
    const cardTemplate = document
      .querySelector('#card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardTemplate;
  }

  _setData() {
    const cardImgEl = this._newCard.querySelector('.card__image');
    cardImgEl.src = this._link;
    cardImgEl.alt = this._title;

    const titleEl = this._newCard.querySelector('.card__title');
    titleEl.textContent = this._title;
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeCard(button) {
    button.classList.toggle('card__like-button_active');
  }

  _handleOpenImg() {
    const imageEl = document.querySelector('.popup-image__image');
    const imageTitleEl = document.querySelector('.popup-image__title');
    const popupImageEl = document.querySelector('#popup-image');

    openPopup(popupImageEl);

      imageEl.src = this._link;
      imageEl.alt = this._title;

      imageTitleEl.textContent = this._title;
  }

  _setListeners() {
    const deleteButton = this._newCard.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => this._handleDeleteCard());

    //Кнопка Like становится активной по клику, при повторном клике активное состояние убирается
    const likeButton = this._newCard.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => this._handleLikeCard(likeButton));

    const openImageButton = this._newCard.querySelector('.card__open-image-button');
    openImageButton.addEventListener('click', () => this._handleOpenImg());
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    console.log(this);
    this._setListeners();

    return this._newCard;
  }
}

export default Card;
