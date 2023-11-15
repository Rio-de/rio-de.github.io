document.addEventListener('DOMContentLoaded', function() {
  // Get references to all buttons and hidden contents
  var toggleButtons = document.querySelectorAll('.toggleButton');
  var hiddenContents = document.querySelectorAll('.hiddenContent');

  // Add click event listeners to all toggle buttons
  toggleButtons.forEach(function(toggleButton, index) {
    toggleButton.addEventListener('click', function() {
      // Toggle the display property of the corresponding hidden content
      var computedStyle = window.getComputedStyle(hiddenContents[index]);

      if (computedStyle.display === 'none') {
        hiddenContents[index].style.display = 'block';
      } else {
        hiddenContents[index].style.display = 'none';
      }
    });
  });
});
