import * as UI from './interfaz.js';// syntaxis modulo
import API from './api.js';

console.log(UI);

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e)
{
    e.preventDefault();
    // validar datos del formulario de
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' && cancion === ''){
        // el usuario no puso los datos mosntrara error
        UI.divMensajesh.textContent = 'Error... todo los mensajes osn obligatorios';
        UI.divMensajesh.classList.add('error');
        setTimeout(() =>{
            UI.divMensajesh.textContent = '';
            UI.divMensajesh.classList.remove('error'); 
        },3000);
        return;
    }
    const busqueda = new API(artista ,cancion);
    busqueda.consultarAPI();
 


}




