class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleCardDelete,
    handleCardLike
  ) {
    this.cardData = { name, link, _id, isLiked };
    this.name = name;
    this.link = link;
    this._id = _id;
    this.isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  }

  _setEventListeners() {
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");

    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._cardLikeButton.addEventListener("click", () => {
      this._handleCardLike(this);
      this.likeCards();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this);
    });
    this._cardDeleteButton.addEventListener("click", () => {
      //this.removeCards();
      this._handleCardDelete(this);
      
    });
  }

  removeCards() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  likeCards() {
    this.isLiked = !this.isLiked;
    this.updateLikes();
  }

  updateLikes() {
    if (this.isLiked) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._cardSelector);
    this._cardElement = this._cardTemplate.content
      .querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }

  generateCard() {
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this._cardTitle.textContent = this.name;
    this._setEventListeners();

    return this._cardElement;
  }
}
export default Card;
