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

captureBtn.addEventListener('click', function () {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convertendo a imagem para base64
    const capturedImageDataUrl = canvas.toDataURL('image/jpeg', 0.5); // Altere a qualidade conforme necessário

    // Redirecionar para a página de contato com a imagem em base64 na URL
    window.location.href = 'contact.html?image=' + encodeURIComponent(capturedImageDataUrl);
});
