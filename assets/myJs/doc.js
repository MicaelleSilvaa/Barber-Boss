function startVideoFromCamera() {
    const specs = { video: { width: 320, aspectRatio: 3 / 4 } }
    navigator.mediaDevices.getUserMedia(specs).then(stream => {
        const videoElement = document.querySelector("#video")
        videoElement.srcObject = stream
    }).catch(error => {
        console.log(error)
    })
}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)

const video = document.getElementById('video');
const captureBtn = document.getElementById('capture-btn');

let capturedImageDataUrl;

captureBtn.addEventListener('click', function () {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    capturedImageDataUrl = canvas.toDataURL('image/png');

    window.location.href = 'contact.html?image=' + encodeURIComponent(capturedImageDataUrl);
});
