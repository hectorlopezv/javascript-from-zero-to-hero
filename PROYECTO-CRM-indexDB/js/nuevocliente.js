//OPERACION CREATE DEL CRUD
(function() {
    //IFE PARA MANTENER LAS VARIABLES LOCALES NADA Mensaje
    // NO PERMITE QUE SEAS EXPORTADAS
    let DB;
    const formulario = document.querySelector('#formulario');
    document.addEventListener('DOMContentLoaded', () =>
    {
        conectarDB();
        const abrirConexion = window.indexedDB.open('crm', 3);
        abrirConexion.onerror= function() {console.log('hubo un error')};
        abrirConexion.onsuccess = function()
        {
            DB = abrirConexion.result;//conectar una instancia a la conexion de la base de datos
        }
        formulario.addEventListener('submit', validarCliente);
    });


    function validarCliente(e)
    {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        if(nombre === '' || email === '' || telefono === ''|| empresa === '')
        {
            console.log('CAMPOS INVALIDOS');
            imprimirAlerta('Todos Los Campos Son Obligatorios', 'error');
            return;
        }
        //crear objecto a la informacion
        const cliente = 
        {//crea la llave y valor con nombre:nombre
            nombre,email,telefono,empresa, id:Date.now()
        }// el html haceuna validadicon
        //crear el transaction
        crearNuevoCliente(cliente);

        console.log(cliente);
        console.log('Valid');    
    }

    function crearNuevoCliente(cliente)
    {
        //crear transaccion
        const transaction = DB.transaction(['crm'],'readwrite');//creando la trasaccion
        const objectStore = transaction.objectStore('crm');//el que hace la acciones
        objectStore.add(cliente);//la operacion
        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error')};
        transaction.oncomplete = function(){console.log('cliente agregado')};
        transaction.onerror = function() {console.log('hubo un error')};

        imprimirAlerta('agregado correctamente');
        setTimeout(() =>{
            window.location.href='index.html';
        },1000)
    }

    function limpiarHTML() {
        
    }


})();