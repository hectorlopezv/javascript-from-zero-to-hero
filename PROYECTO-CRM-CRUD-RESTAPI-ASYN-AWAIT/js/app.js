import { obtenerClientes, eliminarCliente } from './API.js'
// interaccion con la parte visual UI
(function(){
//hacer las variables local y evitar colisiones
const listado = document.querySelector('#listado-clientes');
document.addEventListener('DOMContentLoaded', mostrarClientes);
listado.addEventListener('click', confirmarEliminar);

function confirmarEliminar(e){
    
    if(e.target.classList.contains('eliminar')){
        console.log('diste click en eliminar');
        const clienteId = parseInt(e.target.dataset.cliente);
        console.log(clienteId);
        const confirmar = confirm('Estas Seguro en Eliminar');
        console.log(confirmar);
        

        if (confirmar){
            eliminarCliente(clienteId);
           e.target.parentElement.parentElement.remove();
        }
    }

}
async function mostrarClientes() {
    //consultar la API y llenar la tabla
    const clientes = await obtenerClientes();//sucede que la funcion aun no se a completado la
    // y nos retorna el resultado
    // la solucion es sampar otroa asyn-await
    
    clientes.forEach( cliente =>{
        const { nombre, email, telefono,empresa, id} =  cliente;
        console.log(cliente);
        const row = document.createElement('tr');
        row.innerHTML += `
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${telefono}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${empresa}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
    `;
    listado.appendChild(row);


    });
}
})();