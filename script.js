function alphaDetect() {
    let video = document.createElement("video");
    return video.canPlayType('video/webm; codecs="vp9"') !== "";
}

if (!alphaDetect()) {
    document.getElementById("creep").style.display = "none";
}
