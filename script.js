document.addEventListener("DOMContentLoaded", function () {
    function alphaDetect() {
        let video = document.createElement("video");
        return video.canPlayType('video/webm; codecs="vp9"') !== "";
    }

    if (!alphaDetect()) {
        document.body.style.backgroundColor = "blue";
        let creepVideo = document.getElementById("creep");
        if (creepVideo) {
            creepVideo.style.display = "none";
        } else {
          console.log("Video explosion non trouvée");
        }
    } else {
        document.body.style.backgroundColor = "red";
    }
});
