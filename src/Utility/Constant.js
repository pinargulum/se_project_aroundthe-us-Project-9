export const initionalCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
export const popupSelector = document.querySelector(".modal");
export const profileAddButton = document.querySelector("#profile-add-button");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const cardAddModal = document.querySelector("#card-add-modal");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const newAvatar = document.querySelector("#avatar-edit-input");
export const newName = document.querySelector("#modal-user-input");
export const newJob = document.querySelector("#modal-job-input");
export const modalAddPlaceTitleInput =
  cardAddModal.querySelector("#modal-place-input");
export let formData = { title: newName, description: newJob };
export const profileData = { name: newName, about: newJob };
export const modalAddImageLinkInput =
  cardAddModal.querySelector("#modal-link-input");
export const profileEditForm = document.forms["modal-edit-form"];
export const profileAddForm = document.forms["modal-add-form"];
export const cardDelete = document.querySelector(".card-delete-form");
export const deleteData = { delete: cardDelete };
export const profileAddModal = document.querySelector("#profile-add-modal");
export const avatarEditButton = document.querySelector(".avatar__edit-button");
export const profileSaveButton = document.querySelector("#modal-save-button");
export const cardCreateSaveButton = document.querySelector("#modal-create-button");
export const avatarSaveButton = document.querySelector("#avatar-save-button");
const cardTemplate = document
  .querySelector("#cards-template")
  .content.querySelector(".card");
export const cardElement = cardTemplate.cloneNode(true);
export const cardDeleteButton = cardElement.querySelector(
  ".card__delete-button"
);
export const deleteSubmit = cardElement.querySelector("#delete-yes-button");
export const avatar = document.querySelector(".profile__image");

export const config = {
  formElement: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const userData = {
  user: {
    name: "Pinar Gulum",
    about: "Software Engineer",
    avatar:"https://www.bing.com/th?id=OIP.I1a1_5y7o_2vn5zQzwfoEAHaD5&w=294&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      
    _id: "d8367081443e59d3c765fcf2",
  },
  token: "266f9e9c-f310-4db4-b30c-94bce5a357d4",
};

