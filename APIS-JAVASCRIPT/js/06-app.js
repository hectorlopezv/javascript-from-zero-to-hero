const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI()
{
    //objecto 
    const SpeechRecognition = webkitSpeechRecognition;
    //instanciando objecto speech recognition
    const recognition = new SpeechRecognition();
    //etapas arrancar-conenzar escuchar-temirnal hablar usuario-mostramos resultados

    recognition.start();


    recognition.onstart = function()
    {
        //funciones que se ejecutar una vez comienza recognition
        salida.classList.add('mostrar');
        salida.textContent= 'Escuchando....'
    }


    //cunado temrina de grabar se ejecuta...
    //se dejo de grabar cuando uno deja de hablar
    recognition.onspeechend = function()
    {
        salida.textContent = 'se dejo de grabar ...';
        recognition.stop();
    }

    // los resultados del microfono hacia texto en JS
    recognition.onresult = function(e)
    {
        const {confidence, transcript} = e.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML = `Grabando: ${transcript} con un confianza de ${confidence}`;

        salida.appendChild(speech);
    }


}