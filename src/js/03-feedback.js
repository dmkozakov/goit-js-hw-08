var throttle = require("lodash.throttle");

const STORAGE_KEY = "feedback-form-state";

const refs = {
  feedbackForm: document.querySelector(".feedback-form"),
  emailInput: document.querySelector('[name="email"]'),
  messageInput: document.querySelector('[name="message"]'),
};

refs.feedbackForm.addEventListener("input", throttle(onFormInput, 500));
refs.feedbackForm.addEventListener("submit", onSubmitBtn);

const formData = {
  email: "",
  message: "",
};

console.log(formData);
saveFormData();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitBtn(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)

  console.log(formData);
  formData.email = "";
  formData.message = "";
}

function saveFormData() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      refs.emailInput.value = parsedData.email;
      refs.messageInput.value = parsedData.message;

      formData.email = parsedData.email;
      formData.message = parsedData.message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
