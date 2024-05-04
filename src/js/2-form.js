const form = document.querySelector(".feedback-form");
const inputs = form.querySelector("input, textarea");

inputs.forEach(input => {
    input.addEventListener('input', (event) => {
        localStorage.setItem(event.target.name, event.target.value);
    });
});