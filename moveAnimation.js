// Select the image element

const images = document.querySelectorAll("img");
images.forEach(function(image) {
    image.style.opacity = "0.1";
});

// Animate each image appearing and disappearing continuously
var animation = setInterval(function() {
    images.forEach(function(image) {
        var opacity = parseFloat(image.style.opacity);
        if (opacity >= 0.5) {
            opacity = 0.1;
        }
        image.style.transition = "opacity 1s ease-in-out";
        image.style.opacity = (opacity + 0.1).toFixed(1);
    });
}, 1000);