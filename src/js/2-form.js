let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input[name=email]");
const inputText = document.querySelector("textarea[name=message]");

const formDataGetLocalStorage = localStorage.getItem("feedback-form-state");
const saveToLoacalStorage = () => {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
};

if (formDataGetLocalStorage) {
    formData = JSON.parse(formDataGetLocalStorage);
    inputEmail.value = formData.email;
    inputText.value = formData.message
}

const clearLocalStorage = () => {
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    inputEmail.value = "";
    inputText.value = "";
}

form.addEventListener("input", event => {
    formData.email = inputEmail.value;
    formData.message = inputText.value;
    saveToLoacalStorage()
})

form.addEventListener("submit", evt => {
    evt.preventDefault();
    if(formData.email && formData.message){
        console.log(formData);
        clearLocalStorage()
    } else {
        alert("Fill please all fields")
    }
})