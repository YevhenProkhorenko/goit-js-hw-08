import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataObject = {};

form.addEventListener("input", throttle(saveEnteredData, 500));
form.addEventListener("submit", submitData);

updateForm();

function saveEnteredData(e) {
    dataObject.email = e.target.email.value;
    dataObject.message = e.target.message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
}

function submitData(e) {
    e.preventDefault();
    
    dataObject.email = e.target.email.value;
    dataObject.message = e.target.message.value;
    console.log(dataObject);
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}
function updateForm() {
    const dataParse = JSON.parse(localStorage.getItem("LOCALSTORAGE_KEY"));
    if(dataParse.email === true) {
        form.elements.email.value = dataParse.email;
    }    
    if(dataParse.message === true) {
       form.elements.message.value = dataParse.message;
    }
}