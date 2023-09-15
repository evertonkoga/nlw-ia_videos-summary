import { server } from './server.js';

const form = document.querySelector('#form');
const input = document.querySelector('#url');
const content = document.querySelector('#content');
const summary = document.querySelector('#summary');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    content.classList.add("placeholder");
    summary.classList.add("placeholder");

    const videoURL = input.value;

    if(!videoURL.includes('shorts')){
        return content.textContent = "Esse video não parece ser um short.";
    }

    const [_, param] = videoURL.split('/shorts/');
    const [videoId] = param.split('?si=');

    content.textContent = `Extraindo o texto do áudio...`;
    
    const transcription = await server.get(`/summary/${videoId}`);
    const transcriptionResult = transcription.data.result;
    content.textContent = transcriptionResult;
    content.classList.remove("placeholder");
});