/*
window.onload = function() {
    var audio = document.getElementById("background-audio");
    
    if (audio.canPlayType("audio/mpeg") !== "") {
        audio.src = "your-audio-file.mp3";
    } else if (audio.canPlayType("audio/ogg") !== "") {
        audio.src = "your-audio-file.ogg";
    } else {
        audio.innerHTML = "Your browser does not support the audio element.";
    }
    
    audio.autoplay = true;
    audio.loop = true;
};
*/


window.onload = function() {
    var audio = document.getElementById("background-audio");
    audio.src = "./audio/audio.mp3";
    audio.autoplay = true;
    audio.loop = true;
};
