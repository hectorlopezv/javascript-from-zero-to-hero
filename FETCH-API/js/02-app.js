//cargar JSON
const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos()
{
    fetch('data/empleado.json')
    .then(respuesta =>respuesta.json())
    .then(datos=> mostrarHTML(datos) )
}

function mostrarHTML({empresa,id,nombre,trabajo})
{
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML= `
    <p>Empleado: ${nombre}</p>
    `;
}