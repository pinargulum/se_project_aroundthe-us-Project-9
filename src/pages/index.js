import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDelete from "../components/PopupDelete.js";
import { data } from "autoprefixer";
import {
  profileAddButton,
  profileEditButton,
  avatarEditButton,
  profileSaveButton,
  cardCreateSaveButton,
  avatarSaveButton,
  config,
  newName,
  newJob,
  formData,
  cardElement,
} from "../Utility/Constant.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "266f9e9c-f310-4db4-b30c-94bce5a357d4",
    "Content-Type": "application/json",
  },
});

let section;
let userInfo;


function createCard(cardData) {
  const card = new Card(
    cardData,
    "#cards-template",
    handleImageClick,
    handleCardDelete,
    handleCardLike
  );
  return card.generateCard();
}
api.getInitialCards().then((data) => {
  section = new Section({ items: data, renderer: createCard }, ".cards__list");
  section.renderItems();
})
  .catch((err) => {
    console.error(err);
  })

api.getUser().then((data) => {
  userInfo = new UserInfo(
    ".profile__title",
    ".profile__description",
    ".profile__image"
  );
  userInfo.setUserInfo({ title: data.name, description: data.about });
  userInfo.changeAvatarImage(data.avatar)
})
  .catch((err) => {
    console.error(err);
  });

function handleProfileFormSubmit(data) {
  profileSaveButton.textContent = "Saving...";
  const profileData = ({ name: data.title, about: data.description })
  api
    .editProfile(profileData)
    .then(() => {
      userInfo.setUserInfo({ title: data.name, description: data.about });
      profileEditPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profileSaveButton.textContent = "Save";
    });
}
function handleProfileFormCreate({ name, link }) {
  cardCreateSaveButton.textContent = "Saving...";
  api
    .addNewCard({ name, link })
    .then((cardData) => {
      const cardElement = createCard(cardData);
      section.addItem(cardElement);
      profileCardPopup.close();
      formValidators["card-delete-form"].resetValidation();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardCreateSaveButton.textContent = "Save";
    });
}
function handleAvatarFormSubmit({ link }) {
  avatarSaveButton.textContent = "Saving...";
  const avatarLoad = { avatar: link };
  api
    .updateAvatar(avatarLoad)
    .then(() => {
      userInfo.changeAvatarImage(link);
      avatarEditPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarSaveButton.textContent = "Save";
    });
}

function handleCardDelete(cardData) {
  cardDeletePopup.open();
  cardDeletePopup.setConfirmSubmit(() => {
    const cardId = cardData._id;
    api
      .deleteCard({ cardId })
      .then(() => {
        formValidators["card-delete-form"].enableValidation();
        cardData.removeCards();
        cardDeletePopup.close();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function handleCardLike(cardData) {
  const cardId = cardData._id;
  const isLiked = cardData.isLiked;
  api
    .toggleCardLike(cardId, !isLiked)
    .then((data) => {
      cardData.likeCards(data.isLiked);
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleImageClick(data) {
  previewImagePopup.open(data);
}

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const profileCardPopup = new PopupWithForm(
  "#card-add-modal",
  handleProfileFormCreate
);
const avatarEditPopup = new PopupWithForm(
  "#avatar-edit-modal",
  handleAvatarFormSubmit
);

const previewImagePopup = new PopupWithImage("#preview-modal");
const cardDeletePopup = new PopupDelete("#card-delete-modal", handleCardDelete);

profileEditButton.addEventListener("click", () => {
  formValidators["profile-edit-form"].resetValidation();
  profileEditPopup.open();
  const { title, description } = userInfo.getUserInfo();
  formData.description.value = description;
  formData.title.value = title;
});

profileAddButton.addEventListener("click", () => {
  profileCardPopup.open();
});
avatarEditButton.addEventListener("click", () => {
  formValidators["avatar-edit-form"].resetValidation();
  avatarEditPopup.open();
});

// SET EVENT LISTENERS
cardDeletePopup.setEventListeners();
profileEditPopup.setEventListeners();
profileCardPopup.setEventListeners();
previewImagePopup.setEventListeners();
avatarEditPopup.setEventListeners();

//FORM VALIDATORS
const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const profileForm = formElement.getAttribute("name");
    formValidators[profileForm] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
