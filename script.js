/* =========================================
   TYPING EFFECT
========================================= */

const text = "Full Stack Developer | Python | Django | React";
let index = 0;

function typeEffect() {

    const el = document.getElementById("typing");

    if (!el) return;

    if (index < text.length) {

        el.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 55);
    }
}

typeEffect();

/* =========================================
   REVEAL ANIMATION
========================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

}, {
    threshold:0.15
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

/* =========================================
   ADVANCED CURSOR GLOW
========================================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* =========================================
   NAV ACTIVE
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* =========================================
   3D CARD EFFECT
========================================= */

const cards = document.querySelectorAll(
    ".about-box, .skill-card, .card, .edu-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 18);
        const rotateY = ((centerX - x) / 18);

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        scale(1.02)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        translateY(0)
        scale(1)
        `;
    });

});

/* =========================================
   PARALLAX FLOATING EFFECT
========================================= */

window.addEventListener("mousemove", (e) => {

    const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 30;

    document.querySelectorAll(".floating-blur").forEach((blur) => {

        blur.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    });

});

/* =========================================
   RANDOM FLOAT ANIMATION
========================================= */

document.querySelectorAll(".skill-tags span").forEach((tag, index) => {

    tag.style.animation =
    `floatTag ${2 + index % 3}s ease-in-out infinite`;

});
/* =========================================
   SPOTLIGHT FOLLOW
========================================= */

const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {

    if(spotlight){

        spotlight.style.left = e.clientX + "px";
        spotlight.style.top = e.clientY + "px";
    }
});

/* =========================================
   SKILL CARD LIGHT EFFECT
========================================= */

document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    });

});