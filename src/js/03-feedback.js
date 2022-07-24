import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataObject = {}
form.addEventListener("input", throttle(saveEnteredData, 1000));
form.addEventListener("submit", submitData);

updateForm();

function saveEnteredData(e) {
    const dataObject = { email: e.currentTarget.email.value, message: e.currentTarget.message.value };
    dataObject = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
}

function submitData(e) {
    e.preventDefault();
    
    const dataObject = { email: e.currentTarget.email.value, message: e.currentTarget.message.value };
    console.log(dataObject);
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}
function updateForm() {      
    const dataObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = dataObject.email;
    form.elements.message.value = dataObject.message;
}