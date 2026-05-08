// TYPING EFFECT

const text = "Full Stack Java Developer";

let index = 0;

const typingText =
document.getElementById("typing-text");

function typingEffect(){

    if(index < text.length){

        typingText.innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);
    }
}

typingEffect();


// MOBILE MENU

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.onclick = function(){

    navLinks.classList.toggle("active");

};


// CONTACT FORM

const contactForm =
document.getElementById("contactForm");

const successMessage =
document.getElementById("successMessage");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    successMessage.innerHTML =
    "Message Sent Successfully!";

    contactForm.reset();

});


// DARK MODE

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark");

};