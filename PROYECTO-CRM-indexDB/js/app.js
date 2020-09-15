(function () {

    const listadoCliente= document.querySelector('#listado-clientes');
    let DB;
    document.addEventListener('DOMContentLoaded', ()=>
    {
        crearDB();

        //en caso qu exista la base de datos crm
        if(window.indexedDB.open('crm', 3))
        {
            obtenerClientes();
        }
        listadoCliente.addEventListener('click', eliminarRegistro);
    });
    function limpiarHTML()
    {
        while(listadoCliente.firstChild)
        {
            listadoCliente.removeChild(listadoCliente.firstChild);
        }
    }
    function eliminarRegistro(e)
    {
        console.log(e.target)
        console.log(e.target.dataset);
        console.log(e.target.dataset.cliente)
        const confirmar = confirm('Deseas eliminar este cliente');
        console.log(confirmar);
        if (confirmar)
        {
            const transaction = DB.transaction(['crm'],'readwrite');
            const objectStore= transaction.objectStore('crm');
            objectStore.delete(Number(e.target.dataset.cliente));
            transaction.oncomplete = () => console.log('eliminado');
            transaction.onerror = ()=> console.log('ocurrio un error');
            //limpiarHTML();
            //obtenerClientes();
            e.target.parentElement.parentElement.remove();
        }
    }
    // cre la base de datos de indexDB
    function crearDB() 
    {
        //crea la database basicamente o la conecta si ya existe
        const crearDB = window.indexedDB.open('crm', 3);
        crearDB.onerror = () => console.log('hubo un error');
        crearDB.onsuccess = ()=> DB = crearDB.result;
        crearDB.onupgradeneeded = function(e)
        {   
            const db = e.target.result;// la base de datos
            //crea el objecto de la tabla y su configuracion
            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true});
            // añadimos las columnas
            objectStore.createIndex('nombre','nombre',{unique: false});
            objectStore.createIndex('email','email',{unique: true});
            objectStore.createIndex('telefono','telefono',{unique: false});
            objectStore.createIndex('empresa','empresa',{unique: false});
            objectStore.createIndex('id','id',{unique: true});
            console.log('listo y creado la database con sus configuraciones');
        }
    }
    function obtenerClientes()
    {
        const abrirConexion = window.indexedDB.open('crm', 3);
        abrirConexion.onerror= () => console.log('hubo un erro');
        abrirConexion.onsuccess = function()
        {
            DB = abrirConexion.result;
            const objectStore = DB.transaction('crm').objectStore('crm');
            //cursores es como un for each si se abre existosamente
            objectStore.openCursor().onsuccess = function(e)
            {
                //ponerse en la posicion 0 y devolver el valor
                const cursor = e.target.result;
                //cursosr es el iterador ene ste caso
                if(cursor)
                {
                    const { nombre,empresa,email, telefono, id} = cursor.value;

                    console.log(cursor.value);
                    //creando la tabla
                    
                    listadoCliente.innerHTML += ` <tr>
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
                        <a href="#" data-cliente="${id}" class="eliminar text-red-600 hover:text-red-900">Eliminar</a>
                    </td>
                </tr>
                `;

                    
                    cursor.continue();
                }
                else
                {
                    console.log('upas algo salio mal con el cursor');
                }

            }
        }
    }

})();