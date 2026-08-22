// ================================
// WELCOME MODAL
// ================================

const welcomeModal = document.getElementById("welcomeModal");
const closeWelcome = document.getElementById("closeWelcome");
const exploreNow = document.getElementById("exploreNow");

document.body.classList.add("modal-open");

function closeWelcomeModal() {
    welcomeModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
}

closeWelcome.addEventListener("click", closeWelcomeModal);

exploreNow.addEventListener("click", function () {

    closeWelcomeModal();

    document
        .getElementById("divisions")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ================================
// MOBILE NAVIGATION
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


// ================================
// STICKY HEADER
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// PRODUCT FILTERING
// ================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const category =
            this.getAttribute("data-filter");


        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        this.classList.add("active");


        productCards.forEach(card => {

            const productCategory =
                card.getAttribute("data-category");


            if (
                category === "all" ||
                productCategory === category
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (
            elementTop <
            windowHeight - 100
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ================================
// BACK TO TOP BUTTON
// ================================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// FOOTER YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================================
// FORMSPREE FORM SUBMISSION
// ================================

const serviceForm =
    document.getElementById("serviceForm");

const formStatus =
    document.getElementById("formStatus");


serviceForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const formData =
            new FormData(serviceForm);


        try {

            const response =
                await fetch(
                    serviceForm.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            if (response.ok) {

                formStatus.textContent =
                    "Thank you! Your service request has been sent successfully. We will contact you shortly.";

                formStatus.className =
                    "form-status success";


                serviceForm.reset();


            } else {

                formStatus.textContent =
                    "Sorry, your request could not be sent. Please try again.";

                formStatus.className =
                    "form-status error";

            }


        } catch (error) {

            formStatus.textContent =
                "Network error. Please check your internet connection and try again.";

            formStatus.className =
                "form-status error";

        }

    }
);