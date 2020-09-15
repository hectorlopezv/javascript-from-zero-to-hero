function conectarDB()//entablar conexion
{
    ///conecta a crm
    const abrirConexion = window.indexedDB.open('crm', 3);
    abrirConexion.onerror= function() {console.log('hubo un error')};
    abrirConexion.onsuccess = function()
    {
        DB = abrirConexion.result;//conectar una instancia a la conexion de la base de datos
    }
}



function imprimirAlerta(mensaje, tipo)
{
    const alerta = document.querySelector('.alerta');
    if(!alerta)// si alerta no esta definido
    {

        //crear alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('alerta','px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center','border');
        //dependiendo del mensaje se agrega un estilo
        if(tipo === 'error')
        {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        }
        else
        {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700')
        }
        //añadiendo el mensaje al html
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);
        setTimeout(() =>{divMensaje.remove()},3000);
    }
}