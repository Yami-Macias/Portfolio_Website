document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       HERO NAME
    ========================== */

    const heroName = document.getElementById("hero-name");

    heroName.addEventListener("click", () => {

        heroName.classList.toggle("highlight");

    });

    /* ==========================
       TYPING EFFECT
    ========================== */

    const profession = document.getElementById("profession");

    const professions = [

        "Data Analyst",

        "Financial Consultant",

        "Supply Chain Managment",

        "Procurement Specialist",

        "Administrator "

    ];

    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const current = professions[professionIndex];

        if (!isDeleting) {

            profession.textContent = current.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === current.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            profession.textContent = current.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                professionIndex++;

                if (professionIndex >= professions.length) {

                    professionIndex = 0;

                }

            }

        }

        const speed = isDeleting ? 45 : 90;

        setTimeout(typeEffect, speed);

    }

    typeEffect();

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    hiddenElements.forEach(element => {

        observer.observe(element);

    });

});
/* Header Scroll Effect */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("header-scrolled");

    }else{

        header.classList.remove("header-scrolled");

    }

});