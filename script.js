/* =========================================================
   YASER SAYED PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";
        }, 1800);

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        menuBtn.classList.toggle("active");

    });


    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("open");
            menuBtn.classList.remove("active");

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   HERO CARD 3D EFFECT
========================================================= */

const profileCard = document.querySelector(".profile-card");

if (profileCard && window.innerWidth > 800) {

    profileCard.addEventListener("mousemove", (event) => {

        const rect = profileCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        profileCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "rotate(3deg)";

    });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   PARALLAX GLOW
========================================================= */

const glowOne = document.querySelector(".glow-one");
const glowTwo = document.querySelector(".glow-two");

window.addEventListener("scroll", () => {

    const scrollValue = window.scrollY;

    if (glowOne) {
        glowOne.style.transform =
            `translateY(${scrollValue * 0.08}px)`;
    }

    if (glowTwo) {
        glowTwo.style.transform =
            `translateY(${-scrollValue * 0.04}px)`;
    }

});


/* =========================================================
   RESUME CHECK
========================================================= */

const resumeLink = document.querySelector(
    'a[href="assets/Yaser-Sayed-Resume.pdf"]'
);

if (resumeLink) {

    resumeLink.addEventListener("click", () => {

        console.log("Opening Yaser Sayed Resume...");

    });

}


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c YASER SAYED PORTFOLIO ",
    "background:#00d9c0;color:#04100e;font-size:16px;font-weight:bold;padding:8px;"
);

console.log(
    "MERN Stack Developer Portfolio"
);