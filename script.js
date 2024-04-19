// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the skills section
    var skillsSection = document.querySelector('.skills');

    // Select all images inside the skills section
    var images = skillsSection.querySelectorAll('img');

    // Apply fade-in animation to each image
    images.forEach(function (image) {
        fadeLoop(image);
    });

    // Define the fade loop function
    function fadeLoop(element) {
        // Set initial opacity to 0
        element.style.opacity = '0';

        // Define the fade-in animation
        function fadeIn() {
            var opacity = 0;
            var fadeInInterval = setInterval(function () {
                if (opacity < 1) {
                    opacity += 0.1;
                    element.style.opacity = opacity;
                } else {
                    clearInterval(fadeInInterval);
                    // Call fadeOut after a delay
                    setTimeout(fadeOut, 1000); // Adjust the delay before fading out
                }
            }, 100); // Adjust the interval for smoother animation
        }

        // Define the fade-out animation
        function fadeOut() {
            var opacity = 1;
            var fadeOutInterval = setInterval(function () {
                if (opacity > 0) {
                    opacity -= 0.1;
                    element.style.opacity = opacity;
                } else {
                    clearInterval(fadeOutInterval);
                    // Call fadeIn again after a delay to start the loop
                    setTimeout(fadeIn, 1000); // Adjust the delay before fading in
                }
            }, 100); // Adjust the interval for smoother animation
        }

        // Start the fade loop by calling fadeIn
        fadeIn();
    }
});
