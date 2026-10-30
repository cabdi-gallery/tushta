function showSurprise() {
  const surprise = document.getElementById("surprise");

  surprise.style.display = "block";
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
