let formDate = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const inputEmail = form.querySelector('input[name="email"]');
const inputMessage = form.querySelector('textarea[name="message"]');
const buttonSubmit = form.querySelector('button[type="submit"]');

const feedbackFormState = localStorage.getItem("feedback-form-state");
if(feedbackFormState){
    formDate = JSON.parse(feedbackFormState);
    inputEmail.value = formDate.email;
    inputMessage.value = formDate.message;
};
function saveToLocalStorage() {
    localStorage.setItem("feedback-form-state", JSON.stringify(formDate));
}

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formDate[name] = value;
    saveToLocalStorage();
})
function clearFormDate() {
    localStorage.removeItem("feedback-form-state");
    formDate.email = "";
    formDate.message = "";
    inputEmail.value = "";
    inputMessage.value = "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formDate.email && formDate.message) {
        console.log(formDate);
        clearFormDate();
    } else {
        alert("Fill please all fields");
    }
})