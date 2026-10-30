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
        "Dhoolla-caddayntaadu waxay qurxisaa maalintayda ❤️",
        "Waxaad ka xoog badan tahay sida aad mooddo 💪",
        "Ha illoobin inaad tahay qof qaali ah 🌸",
        "Naxariistaadu waa awooddaada 🥰",
        "Mar walba dhoolla-caddee, qurux badan tushtu waa f....d! 😊",
        "Digniin: Qosolkaagu waa mid dadka kale qaadsiiya xanunka masayrka 😂",
        "Saaxiib wanaagsan wuxuu mudan yahay farxad aan dhammaad lahayn ❤️"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("smile-message").textContent =
        randomMessage;
}
