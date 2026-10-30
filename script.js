function showFirst() {
    const section = document.getElementById("message1");
    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function showSecond() {
    const section = document.getElementById("message2");
    section.classList.remove("hidden");

    section.scrollIntoView({
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

/* Voice message */

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function toggleVoice() {
    const audio = document.getElementById("voiceAudio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("voiceAudio");
    const playBtn = document.getElementById("playBtn");
    const seekBar = document.getElementById("seekBar");
    const curTime = document.getElementById("curTime");
    const durTime = document.getElementById("durTime");

    audio.addEventListener("loadedmetadata", function () {
        durTime.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("play", function () {
        playBtn.textContent = "⏸";
        playBtn.setAttribute("aria-label", "Pause");
    });

    audio.addEventListener("pause", function () {
        playBtn.textContent = "▶";
        playBtn.setAttribute("aria-label", "Play");
    });

    audio.addEventListener("timeupdate", function () {
        if (audio.duration) {
            seekBar.value = (audio.currentTime / audio.duration) * 100;
            seekBar.style.setProperty("--progress", seekBar.value + "%");
        }
        curTime.textContent = formatTime(audio.currentTime);
    });

    // Drag the bar to jump to another part
    seekBar.addEventListener("input", function () {
        if (audio.duration) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
    });
});

/* Full screen image viewer */

function openImage(image) {
    const viewer = document.getElementById("imageViewer");
    const largeImage = document.getElementById("largeImage");

    largeImage.src = image.src;
    viewer.style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}

// Esc key closes the image
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeImage();
    }
});

/* Smile generator */

const smileMessages = [
    "Dhoolla-caddayntaadu waxay qurxisaa maalintayda ❤️",
    "Waxaad ka xoog badan tahay sida aad mooddo 💪",
    "Ha illoobin inaad tahay qof qaali ah 🌸",
    "Naxariistaadu waa awooddaada 🥰",
    "Mar walba dhoolla-caddee, naf qurux badan! 😊",
    "Digniin: Qosolkaagu waa mid dadka kale qaadsiiya 😂",
    "Saaxiib wanaagsan wuxuu mudan yahay farxad aan dhammaad lahayn ❤️"
];

let lastSmileIndex = -1;

function makeMeSmile(event) {
    // Pick a random message that is different from the last one
    let index;
    do {
        index = Math.floor(Math.random() * smileMessages.length);
    } while (index === lastSmileIndex);

    lastSmileIndex = index;

    document.getElementById("smile-message").textContent =
        smileMessages[index];

    launchHearts(event);
}

/* Floating hearts */

function launchHearts(event) {
    const hearts = ["❤️", "💗", "💖", "💕", "🌸"];

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        const baseX = event ? event.clientX : window.innerWidth / 2;
        const x = baseX + (Math.random() * 120 - 60);

        heart.style.left = x + "px";
        heart.style.fontSize = 18 + Math.random() * 18 + "px";
        heart.style.animationDelay = Math.random() * 0.4 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 2800);
    }
}
