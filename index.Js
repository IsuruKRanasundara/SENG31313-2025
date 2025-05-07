import 'animate.css';
document.addEventListener("DOMContentLoaded", () => {
    if (typeof newFunction === "function") {
      newFunction();
    } else {
      console.warn("newFunction is not defined.");
    }
  });
const newFunction = () => {
    const phrases = [
        "Software Development",
        "Cyber Security",
        "Cloud Computing",
        "DevOps Engineering"
    ];
    const dynamicText = document.getElementById("dynamic-text");
    let index = 0;

    const startAnimation = () => {
        setInterval(() => {
            if (dynamicText) {
                dynamicText.textContent = phrases[index];
                dynamicText.classList.remove("animate__fadeIn");
                void dynamicText.offsetWidth; // Trigger reflow to restart animation
                dynamicText.classList.add("animate__animated", "animate__fadeIn");
                index = (index + 1) % phrases.length;
            }
        }, 2000); // Change text every 2 seconds
    };

    if (dynamicText) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.disconnect(); // Stop observing once animation starts
                }
            });
        });
        observer.observe(dynamicText);
    } else {
        console.error("Element with id 'dynamic-text' not found.");
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for reaching out! Your message has been sent.");
        });
    }
};
