import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = "feedback-form-state";

checkForm();

form.addEventListener('input', throttle(saveEnteredData, 500));

function saveEnteredData(event) {
  event.preventDefault();

  let dataInput = localStorage.getItem(LOCALSTORAGE_KEY)
   dataInput = dataInput ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) : {};

  dataInput[event.target.name] = event.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataInput));
}

form.addEventListener('submit', submitData);

function submitData(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (email === '' || message === '') {
    console.log("Please entered data in all fields");
  } else {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log({ email, message });
  }

  event.currentTarget.reset();
}

function checkForm() {
  let dataInput = localStorage.getItem(LOCALSTORAGE_KEY);
  if (dataInput) {
    dataInput = JSON.parse(dataInput);
    Object.entries(dataInput).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}