function showFirst() {
    document.getElementById("message1").classList.remove("hidden");

    document.getElementById("message1").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function showSecond() {
    document.getElementById("message2").classList.remove("hidden");

    document.getElementById("message2").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function showGallery() {
    const gallery = document.getElementById("memories");

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function openImage(image) {
    const viewer = document.getElementById("imageViewer");
    const largeImage = document.getElementById("largeImage");

    largeImage.src = image.src;
    viewer.style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}

function makeMeSmile() {

    const messages = [
        "Your smile makes everything beautiful ❤️",
        "You are stronger than you think 💪",
        "Never forget how special you are 🌸",
        "Your kindness is your superpower 🥰",
        "Keep smiling, beautiful soul! 😊",
        "Warning: Your smile is contagious 😂",
        "A good friend deserves endless happiness ❤️"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("smile-message").textContent =
        randomMessage;
}
