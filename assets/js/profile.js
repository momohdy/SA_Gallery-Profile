let currentIndex = 0;

function setSrcOfImage(imgOrder) {
    const img = document.querySelector(`#${imgOrder}`);

    // Retrieve the array of favorite images from local storage
    const storedFavImages = JSON.parse(localStorage.getItem('favImages')) || [];

    // Check if there are any favorite images
    if (storedFavImages.length > 0) {
        // Set the source of the image based on the current index
        img.src = `assets/${storedFavImages[currentIndex]}`;

        // Increment the index for the next time this function is called
        currentIndex = (currentIndex + 1) % storedFavImages.length;
    } else {
        // If no favorite images are stored, you can provide a default image source
        img.src = 'assets/img/blank.png';
    }
}
