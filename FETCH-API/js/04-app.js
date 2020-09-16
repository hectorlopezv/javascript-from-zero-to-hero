//cargar DESDE una API
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);



function obtenerDatos(datos)
{
    const url = 'https://picsum.photos/list';
    fetch(url)
    .then(response => response.json())
    .then(response => mostrarHTML(response));
}

function mostrarHTML(empleados)
{
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach((empleado)=>{
        const {author, post_url} = empleado;
        html += `<p>Empleado: ${author}</p>
                    <a href="${post_url} target="_blank">Ver Imagen</a>`
    });
    contenido.innerHTML = html;
}