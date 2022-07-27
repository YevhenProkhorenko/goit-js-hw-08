import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataObject = {};

form.addEventListener("input", throttle(saveEnteredData, 500));
updateForm(parseData());
form.addEventListener("submit", submitData);



function saveEnteredData(e) {
    dataObject[e.target.name] = e.target.value;   
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
}

function parseData() {
    if (localStorage) {
        const savedDataLocStor = localStorage.getItem(LOCALSTORAGE_KEY);
        return JSON.parse(savedDataLocStor);
    }  
}

function updateForm(data) {
    if (data) {
        inputEl.value = data.email;
        textEl.value = data.message;
}    
}

function submitData(e) {
    e.preventDefault();
    
    dataObject.email = e.target.email.value;
    dataObject.message = e.target.message.value;
    console.log(dataObject);
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}
