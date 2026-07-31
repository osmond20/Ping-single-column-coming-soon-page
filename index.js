// elements selected from the DOM
const form = document.querySelector(".notify-me-sign-up-form");
const input = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");

// function to validate the email
function validateInput(email){

};

// Submission functionality
form.addEventListener("submit", event =>{

    input.classList.toggle("error");




    errorMessage.textContent = "Please provide a valid email address"
    event.preventDefault();
});