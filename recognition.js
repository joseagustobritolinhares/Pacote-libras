// recognition.js

function onOpenCvReady() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const downloadButton = document.getElementById('downloadResults');
    let resultsData = '';

    function processFrame() {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const src = cv.imread(canvas);
        const dst = new cv.Mat();

        // Converter para escala de cinza
        cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
        cv.Canny(src, dst, 50, 100);
        cv.imshow(canvas, dst);

        src.delete();
        dst.delete();

        // Adicionar lógica de reconhecimento e atualização de resultados
        resultsData = 'Simulação de resultados de reconhecimento'; // Substitua com resultados reais

        requestAnimationFrame(processFrame);
    }

    function saveResults() {
        const blob = new Blob([resultsData], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resultados.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    downloadButton.addEventListener('click', saveResults);

    processFrame();
}

cv['onRuntimeInitialized'] = onOpenCvReady;
