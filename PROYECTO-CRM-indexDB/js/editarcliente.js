(function() {
    // verificar el ID del la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    const formulario = document.querySelector('#formulario');
    //console.log(parametrosURL);
    //console.log(parametrosURL.values())
    /*
    for (let it of parametros.values()) {
        console.log(it)
    }*/
    let DB;
    let idCliente;
    document.addEventListener('DOMContentLoaded',() => 
        {
            //conectarDB();// como esto se demora toca esperarlo
            const abrirConexion = window.indexedDB.open('crm', 3);
            abrirConexion.onerror= function() {console.log('hubo un error')};
            abrirConexion.onsuccess = function()
            {
                DB = abrirConexion.result;//conectar una instancia a la conexion de la base de datos
            }
        
            idCliente = parametrosURL.get('id');
            console.log(idCliente);
            // MIRAMOS SI EXISTE NE LA BASE DE DATOS
            if (idCliente)
            {
                setTimeout(() =>{
                    obtenerClientes(idCliente);
                }, 1000)
                
            }
            formulario.addEventListener('submit', actualizarCliente);
        });
    


    function obtenerClientes(id)
    {
        console.log(id);
        const transaction = DB.transaction(['crm'],'readonly');
        const objectStore = transaction.objectStore('crm');
        const cliente = objectStore.openCursor();
        cliente.onsuccess = function (e)
        {
            const cursor = e.target.result;
            if(cursor)
            {
                if(cursor.value.id === Number(id))
                {
                    console.log(cursor.value);
                    //llenar formularios
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }

        }

        
    }
    function llenarFormulario(datosCliente)
    {
        const {nombre, email, telefono, empresa, id} = datosCliente;
        const nombreEdit = document.querySelector('#nombre');
        const emailEdit = document.querySelector('#email');
        const telefonoEdit = document.querySelector('#telefono');
        const empresaEdit = document.querySelector('#empresa');

        nombreEdit.value = nombre;
        emailEdit.value = email;
        telefonoEdit.value = telefono;
        empresaEdit.value = empresa;
    }

    function actualizarCliente(e)
    {
        e.preventDefault();
        console.log('entro aqui')
        const nombreACT = document.querySelector('#nombre').value;
        const emailACT = document.querySelector('#email').value;
        const telefonoACT = document.querySelector('#telefono').value;
        const empresaACT = document.querySelector('#empresa').value;
        if(nombreACT === '' || emailACT === '' || telefonoACT === ''|| empresaACT === '')
        {
            console.log('CAMPOS INVALIDOS');
            imprimirAlerta('Todos Los Campos Son Obligatorios', 'error');
            return;
        }
        const clienteAct = 
        {
            nombre:nombreACT,
            email:emailACT,
            telefono:telefonoACT,
            empresa:empresaACT,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'],'readwrite');//creando la trasaccion
        const objectStore = transaction.objectStore('crm');//el que hace la acciones
        objectStore.put(clienteAct);//la operacion
        transaction.oncomplete = () => 
        {

            setTimeout(() =>{
                window.location.href = "index.html";
            },2000)
        }
        transaction.onerror = (e)=> console.log('error');
        


    }


})();