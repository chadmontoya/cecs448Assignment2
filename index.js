const imgPanels = document.querySelectorAll('.img-panel'); // Get all image panels

imgPanels.forEach((imgPanel) => { // Iterate through all image panels
  imgPanel.addEventListener('click', () => { // Put click event listener on each one
    removeActive(); // Call helper function to remove all active classes from each image panel
    imgPanel.classList.add('active'); // When an image panel is clicked, add the active class to it
  });
});

function removeActive() {
  imgPanels.forEach(imgPanel => { // Iterate through all image panels
      imgPanel.classList.remove('active'); // Remove the active class from each image panel
  });
}