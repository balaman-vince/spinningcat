let button1 = document.getElementById("click1");
let playgif = document.getElementById("centerimg");

let originalSrc = playgif.src; // Store the original image
let gifSrc = playgif.getAttribute("gifp"); // Get the GIF source

function showGifForSeconds() {
    playgif.src = gifSrc; // Change to GIF

    // Set a timer to revert back to the original image after 3 seconds
    setTimeout(function() {
        playgif.src = originalSrc; // Change back to the original static image
    }, 3000); // 3000ms = 3 seconds
}

button1.addEventListener("click", showGifForSeconds);
