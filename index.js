// elements selected from the DOM
const form = document.querySelector(".notify-me-sign-up-form");
const input = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");

// function to validate the email using basic email format
function validateInput(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const result = regex.test(email);
    return result;
};

// Submission functionality
form.addEventListener("submit", event =>{
    if(!validateInput(input.value)){
        input.classList.toggle("error");
        errorMessage.classList.toggle("show");
    }
    else if(input.value == ""){
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email"
    }

    event.preventDefault();
});