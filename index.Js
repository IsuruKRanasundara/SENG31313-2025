import 'animate.css';

document.addEventListener("DOMContentLoaded", () => {
    // Put Animation to Image
    const image = document.getElementById('image');
    if (image) {
        image.classList.add('animate__animated', 'animate__fadeInDown');
        image.addEventListener('animationend', () => {
            image.classList.remove('animate__animated', 'animate__fadeInDown');
        });
    }

    // Dynamic text animation
    const phrases = [
        "Software Development",
        "Cyber Security",
        "Cloud Computing",
        "DevOps Engineering"
    ];
    const dynamicText = document.getElementById("dynamic-text");
    let index = 0;

    if (dynamicText) {
        setInterval(() => {
            console.log(`Updating text to: ${phrases[index]}`); // Debugging log
            dynamicText.textContent = phrases[index];
            dynamicText.classList.remove("animate__fadeIn");
            void dynamicText.offsetWidth; // Trigger reflow to restart animation
            dynamicText.classList.add("animate__animated", "animate__fadeIn");
            index = (index + 1) % phrases.length;
        }, 2000); // Change text every 2 seconds
    } else {
        console.error("Element with id 'dynamic-text' not found."); // Debugging log
    }
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! Your message has been sent.");
    });
}
