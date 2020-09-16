//USAR ASYN await en CON fetch  en un una rest-api

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){
    fetch(url)
    .then(response => response.json())
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
    console.log('hectorcito');
}

/*
//usando ASYN con Fetch----- asyn siempre epsera que la promise se cumpla
// nuestro asyn necesita try catch para administrar los errors
async function obtenerDatos(){
    try{
        const respuesta = await fetch(url);// que nos devuleve el objecto response
        console.log(respuesta);
        const resultado = await respuesta.json();// esperamos el promise que lo devuela JSON
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
*/
