// script.js

async function startVideo() {
    const video = document.getElementById('video');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
    }
}

window.onload = function () {
    startVideo();
};
