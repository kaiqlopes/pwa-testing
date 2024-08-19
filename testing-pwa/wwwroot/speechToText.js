const recognizer = new webkitSpeechRecognition();
const transcription = document.getElementById('transcription');

document.getElementById('startRecognition').addEventListener('click', function (event) {
    event.preventDefault();

    recognizer.lang = 'pt-BR';
    recognizer.continuous = true;
    recognizer.interimResults = true;
    
    console.log('Recognition started');
    recognizer.start();
});

document.getElementById('stopRecognition').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Recognition stopped');
    recognizer.stop();
});


recognizer.addEventListener('result', function (event) {
    transcription.value = '';

    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        if (event.results[i].isFinal) {
            transcription.value += event.results[i][0].transcript;
            confidence.value = event.results[i][0].confidence;
        } else {
            transcription.value += event.results[i][0].transcript;
        }
    }
});

recognizer.addEventListener('error', function (event) {
    console.error('Recognition error:', event.error);
});

recognizer.addEventListener('end', function () {
    console.log('Recognition ended');
});

