import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.modalImage = document.querySelector(".card__image-preview");
    this.imageText = document.querySelector(".modal__text");
  }

  open(cardData) {
    this.modalImage.src = cardData.link;
    this.modalImage.alt = cardData.name;
    this.imageText.textContent = cardData.name;
    super.open();
  }
}
