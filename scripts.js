// Set the slideIndex to 1 and show the first slide
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main function to show slides
function showSlides(n) {
  var i;
  // Get all the slides and dots with class name "mySlides" and "dot", respectively
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // If slideIndex is greater than the number of slides, reset it to 1
  if (n > slides.length) {slideIndex = 1}    
  // If slideIndex is less than 1, set it to the number of slides
  if (n < 1) {slideIndex = slides.length}
  // Hide all the slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // Remove the "active" class from all the dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Show the current slide and add the "active" class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
