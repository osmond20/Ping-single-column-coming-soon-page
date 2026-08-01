// elements selected from the DOM
const form = document.querySelector(".notify-me-sign-up-form");
const input = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");

// function to validate the email using basic email format
function validateInput(email){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let result = regex.test(email);
    return result;
};

// Submission functionality
form.addEventListener("submit", event =>{
    if(!validateInput(input.value)){
        input.classList.toggle("error");
        errorMessage.textContent = "Please provide a valid email address";
        event.preventDefault();
    } 
});