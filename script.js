document.addEventListener("DOMContentLoaded", function () {
    function alphaDetect() {
        let video = document.createElement("video");
        return video.canPlayType('video/webm; codecs="vp9"') !== "";
    }

    if (!alphaDetect()) {
        let creepVideo = document.getElementById("creep");
        if (creepVideo) {
            creepVideo.style.display = "none";
        }
    }
});

