const uri = 'https://localhost:7174/PwaTesting';

// Adiciona um listener ao formulário para enviar a imagem quando o formulário for enviado
document.getElementById('uploadForm').addEventListener('submit', function (event) {
	event.preventDefault();

	var input = document.getElementById('backCameraImageInput');

	if (input && input.files.length == 0) {
		input = document.getElementById('imageInput')
	}

	if (input && input.files.length > 0) {
		sendImage(input.files[0]);
	} else {
		console.error('No file selected.');
	}
});

// Função para enviar a imagem
async function sendImage(file) {
	const formData = new FormData();
	formData.append('image', file);

	console.log("Sending image:", file);
	try {
		const response = await fetch(uri, {
			method: 'POST',
			body: formData
		});
		
		console.log("passou do fetch");
		if (response.ok) {
			console.log("passou do response.ok");
			const result = await response.json();
			console.log('File uploaded successfully:', result.filePath);
		} else {
			console.log("response n foi ok");
			console.error('Failed to upload file:', response.statusText);
		}
	} catch (error) {
		console.error('Error uploading file:', error);
	}
}