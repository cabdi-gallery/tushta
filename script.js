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
