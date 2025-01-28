function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


function adjustTextColor() {
    const body = document.getElementById('body');
    const text = document.getElementById('nava');

    // Get the computed background color of the body
    const bgColor = window.getComputedStyle(body).backgroundColor;

    // Parse the RGB values
    const rgb = bgColor.match(/\d+/g).map(Number);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    // Set text color based on brightness
    text.style.color = brightness > 128 ? 'black' : 'white';
  }

  // Change background color for testing (you can remove this)
  document.getElementById('body').style.backgroundColor = '#3498db'; // Light blue
  adjustTextColor(); // Adjust the text color