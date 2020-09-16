//
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxt.addEventListener('click', obtenerDatos);

function obtenerDatos() 
{
    const url = 'data/dato.txt';

    fetch(url)
    .then( (respuesta) => {
        console.log(respuesta);
        return respuesta.text();
    })
    .then( datos => {
        console.log(datos);
    })
    .catch(error=> console.log(error));
}