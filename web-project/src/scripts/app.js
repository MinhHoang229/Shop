// This file contains the JavaScript code for the web application.
// It handles the interactive functionality and any dynamic behavior on the web page.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to the Web Project!';

    const button = document.getElementById('action-button');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });

    function toggleCart() {
        const cart = document.getElementById("shoppingCart");
        if (cart.style.display === "block") {
            cart.style.display = "none";
        } else {
            cart.style.display = "block";
        }
    }

    // Add event listener to the shopping cart button
    document.querySelector(".btnshopping").addEventListener("click", toggleCart);

    function toggleLogin() {
        const loginForm = document.getElementById("loginForm");
        if (loginForm.style.display === "block") {
            loginForm.style.display = "none";
        } else {
            loginForm.style.display = "block";
        }
    }

    // Add event listener to the login button
    const loginButton = document.querySelector(".btnlogin");
    if (loginButton) {
        loginButton.addEventListener("click", toggleLogin);
    }

    // Add event listener to the close button inside the login form
    const closeButton = document.querySelector(".close-login");
    if (closeButton) {
        closeButton.addEventListener("click", toggleLogin);
    }

    const slider = document.querySelector(".hero .slider");
    const slides = document.querySelectorAll(".hero .slide");
    const prevButton = document.querySelector(".hero .prev");
    const nextButton = document.querySelector(".hero .next");

    let currentIndex = 0;

    const updateSliderPosition = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSliderPosition();
    };

    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);

    // Auto-slide every 2 seconds
    setInterval(showNextSlide, 2000);
});

// Function to toggle the login form visibility
function toggleLogin() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
    } else {
        loginForm.style.display = "block";
    }
}

// Add event listener to the login button
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".btnlogin");
    if (loginButton) {
        loginButton.addEventListener("click", toggleLogin);
    }

    // Add event listener to the close button inside the login form
    const closeButton = document.querySelector(".close-login");
    if (closeButton) {
        closeButton.addEventListener("click", toggleLogin);
    }
});
function navigateToProducts() {
    window.location.href = "products.html";
}

<script src="scripts/app.js"></script>