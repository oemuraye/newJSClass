const url = "https://jsonplaceholder.typicode.com/posts";
 

const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
};

// getData();


// simple image slider

const heroImage = document.querySelector('#hero-image');
const sliderPrev = document.querySelector('.sliderPrev');
// const sliderNext = document.querySelector('.sliderNext');

const imagesArr = [
    'https://online.merrimack.edu/wp-content/uploads/2019/05/MCMED_5-Reasons-REading-is-So-Important-to-Student-Success.jpg',
    'https://www.timeforkids.com/wp-content/uploads/2021/05/210524_CMS_Debate_Hero.jpg',
    'https://www.oberlo.com/media/1612639204-image3.jpg?fit=max&fm=jpg&w=1824',
    'https://www.thoughtco.com/thmb/uuU2gRJmNFwIxwtWrLoXbyaxcbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Getty_deep_reading-587879771-56ec4d323df78ce5f834fc56.jpg'
]

let currentIndex = 0;

const changeHeroImg = () => {
    heroImage.src = imagesArr[currentIndex]
} 

const sliderNext = () => {
    currentIndex = (currentIndex + 1 ) % imagesArr.length;
    changeHeroImg();
}

sliderPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagesArr.length ) % imagesArr.length;
    changeHeroImg();
})

setInterval(sliderNext, 6000);
changeHeroImg();




const randomWords = ["success", "error", "login", "loginPassword", "password"];

// console.log(randomWords);

for (let i = 0; i < randomWords.length; i++) {
    const element = randomWords[i];
    // console.log(element);
}

let z = 0
while (z < randomWords.length) {
    const element = randomWords[z];
    // console.log(element);
    z++;
}

randomWords.forEach((element) => {
    // console.log(element);
})
randomWords.map((element) => {
    // console.log(element);
})

const listOfItems = {
    orange: 2,
    mango: 3,
    banana: 4,
    fans: 5,
}








// Function to set the active link based on the current page URL
function setActiveLink() {
    var currentUrl = window.location.pathname;
    var navLinks = document.querySelectorAll('.nav-link');

    for (let link = 0; link < navLinks.length; link++) {
        const elementLink = navLinks[link];

            // Remove the 'active' class from all links
        elementLink.classList.remove('active');
        
        // Check if the link's href matches the current URL
        if (elementLink.getAttribute('href') === currentUrl) {
            elementLink.classList.add('active');
        }
    }
    
    // navLinks.forEach(function(link) {
    //     // Remove the 'active' class from all links
    //     link.classList.remove('active');
        
    //     // Check if the link's href matches the current URL
    // if (link.getAttribute('href') === currentUrl) {
    //         // Add the 'active' class to the matching link
    //     link.classList.add('active');
    //   }
    // });
}

// Call the setActiveLink function when the page loads
window.addEventListener('load', setActiveLink);

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




