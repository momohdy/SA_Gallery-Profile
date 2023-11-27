function addToFavorites(imageSrc, btnNumber) {
    // Get the existing array from local storage or create an empty array if it doesn't exist
    const existingFavImages = JSON.parse(localStorage.getItem('favImages')) || [];

    // Add the new image source to the array
    existingFavImages.push(imageSrc);

    // Save the updated array back to local storage
    localStorage.setItem('favImages', JSON.stringify(existingFavImages));

    // Print it to the console
    console.log('Image source added to local storage:', imageSrc);

    const button = document.querySelector(`.btn-${btnNumber}`)
    button.classList.add('fav-button-clicked');

    
}
