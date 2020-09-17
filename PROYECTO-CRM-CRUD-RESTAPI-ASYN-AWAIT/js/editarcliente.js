//efii
import {ObtenerClienteByID, updateCliente } from './API.js';
(function(){
    document.addEventListener('DOMContentLoaded', async () =>{
        const listado = document.querySelector('#listado-clientes');
        console.log('hola');
        const parametrosURL = new URLSearchParams(window.location.search);
        const id = parametrosURL.get('id');
        console.log(id);
        ///ya teniendo el id toca consultar la base de datos
        const cliente = await ObtenerClienteByID(id);// we hag issues beacause the data was not returned from
        //imediatly so we need to place a await to wait for the data or block until we get that dataset
        // in a synchronus way
        console.log(cliente);
        // fill the from for better user experience
        const nombreF = document.querySelector('#nombre');
        const emailF = document.querySelector('#email');
        const telefonoF= document.querySelector('#telefono');
        const empresaF = document.querySelector('#empresa');
        console.log(cliente);
        const {nombre,email,telefono,empresa} = cliente
        nombreF.value = nombre;
        emailF.value = email;
        telefonoF.value = telefono;
        empresaF.value = empresa;
        
        // update the data
        formulario.addEventListener('submit', async (e)=>{
          e.preventDefault();


            const cliente = await ObtenerClienteByID(id);
            // cambiamos valores
            cliente.nombre = nombreF.value;
            cliente.email = emailF.value;
            cliente.telefono = telefonoF.value;
            cliente.empresa = empresaF.value;
            
            //hacemos el PUT
            updateCliente(cliente);
            console.log(cliente);
        });



    });


})();