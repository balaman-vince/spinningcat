let button1 = document.getElementById("click1");
let playgif = document.getElementById("centerimg");
let audio = document.getElementById("audio1");

let originalSrc = playgif.src;
let gifSrc = playgif.getAttribute("gifp");

function spinAndPlay() {
    playgif.src = gifSrc;

    audio.currentTime = 0;
    audio.play();

    setTimeout(function() {
        playgif.src = originalSrc;
    }, 3000);
}

button1.addEventListener("click", spinAndPlay);
