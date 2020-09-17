import { monstrarAlerta } from './funciones.js';
import { nuevoCliente } from './API.js'
(function () {
    //Variables
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);


    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente= {
            nombre,email,telefono,empresa
        }
        if( validar(cliente) ){
            monstrarAlerta('todos campos son obligatorios');
            return;
        }
        monstrarAlerta('Paso Validacion');
        //paso validacion entonces creamos el nuevo cliente
        nuevoCliente(cliente);
        
    }

    function validar(obj){
        return !Object.values(obj).every(el => el !== '');
    }


})();