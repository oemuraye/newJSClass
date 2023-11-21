
// const greetingText = document.querySelector('h2');
// // const showGreetingBtn = document.getElementById('show-greeting');
// const showGreetingBtn = document.querySelector('#show-greeting');
// // const changeText = document.getElementsByClassName('change-text')[0];
// const changeTextBtn = document.querySelector('.change-text');
// const hideGreetingBtn = document.querySelector('.hide-greeting');

// showGreetingBtn.addEventListener('click', () => {
//     greetingText.style.display = 'block';
// })

// changeTextBtn.addEventListener('click', () => {
//     // greetingText.innerText = `<input type='date'>`;
//     // greetingText.textContent
//     greetingText.innerHTML = 'Hello everyone!';
//     greetingText.style.color = 'yellow';
// });

// const hideGreeting = () => {
//     greetingText.style.display = 'none';
// }


const hamburgerBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('header nav');

hamburgerBtn.addEventListener('click', () => {
    // mobileMenu.style.display = 'block';

    // if (mobileMenu.classList.contains("show")) {
    //     mobileMenu.classList.remove("show");
    //     hamburgerBtn.innerHTML = `&#8803;`
    // } else {
    //     mobileMenu.classList.add("show");
    //     hamburgerBtn.innerHTML = `&times;`
    // }

    mobileMenu.classList.toggle("show");
});


// Form Validation

const loginForm = document.querySelector('.login-section form');
const loginEmail = document.querySelector('.login-section #email');
const loginPassword = document.querySelector('.login-section #password');
const errorMsg = document.querySelector('.error-msg');
const successMsg = document.querySelector('.success-msg');

// const formInput = document.querySelector('form input');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (loginEmail.value === "") {
        console.log('Please enter your email');
        errorMsg.textContent = "Please enter your email";
    } else if (!emailRegex.test(loginEmail.value)) {
        console.log('Please enter a valid email');
        errorMsg.textContent = "Please enter a valid email";
    } else if (loginPassword.value === '') {
        console.log("Please enter your password");
        errorMsg.textContent = "Please enter your password";
    }  else if (loginPassword.value.length <= 4) { 
        console.log("Password must be at least 5 characters");
        errorMsg.textContent = "Password must be at least 5 characters";
    } else {
        console.log("Welcome");
        errorMsg.textContent = ''
        successMsg.textContent = "Login successful"
    }
});


loginEmail.addEventListener("input", () => {
    successMsg.textContent = ""
    errorMsg.textContent = ''
})
loginPassword.addEventListener("focus", () => {
    successMsg.textContent = ""
    errorMsg.textContent = ''
})