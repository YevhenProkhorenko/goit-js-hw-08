const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataObject = {}
form.addEventListener("input", saveEnteredData, 1000);
form.addEventListener("submit", submitData);

updateForm();

function saveEnteredData(e) {       
    const { email, message } = e.currentTarget;
    const formData = { email: email.value, message: message.value };
    dataObject = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function submitData(e) {
    e.preventDefault();
    const { email, message } = e.currentTarget;
    const formData = { email: email.value, message: message.value };
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}
function updateForm() {
  
    const auditInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = auditInput.email;
    form.elements.message.value = auditInput.message;
}

// function mailInput(e) {
//     e.preventDefault();
//     const mail = e.target.email.value;
//     const message = e.target.message.value;
//     const localData = { mail, message };
//     console.log(localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localData)));
//     // try {
//     //     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localData));
//     // }
//     // catch {
//     //     console.log("Error JSON.stringify")
//     // }
//     // sdsds@mai.com
        
// }
// function submitMessage(e){
//     e.preventDefault();
//     const mail = e.target.email.value;
//     const message = e.target.message.value;
//     const localData = { mail, message };
//     console.log(localData);
//     // localStorage.removeItem(LOCALSTORAGE_KEY);
//     // form.reset();

//     // const inputData = localStorage.getItem(LOCALSTORAGE_KEY, JSON.parse(localData))
    
//     // try {
//     //     const resultOfInputText = localStorage.getItem(LOCALSTORAGE_KEY, JSON.parse(localData))
//     //     console.log(resultOfInputText);
//     // }
//     // catch {
//     //     console.log("Error parse JSON file")
//     // }
//     // form.reset();
// }
// function updateData() {
//     const checkInputs = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
//     form.elements.email.value = checkInputs.email;
//     form.elements.message.value = checkInputs.message;
// }