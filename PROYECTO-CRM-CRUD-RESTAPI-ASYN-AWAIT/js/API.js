const url = ' http://localhost:4000/clientes';


//cuando se crea un cliente
export const  nuevoCliente = async cliente =>{
    console.log(cliente);
    try {
        //METODO POST FETCH
        // esperamos que fetch termine de traer todo
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //esperado y exitoos entonces cambioamos de paigna para ver los clientes
        window.location.href = 'index.html';
    } catch(error){
        console.log(error);
    }
}


//update client in the JSON server database emulation --API REST endpoints
export const updateCliente = async cliente => {
    try {
        const {id} = cliente
        
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// cunado queremos elminar cliente por ID
export const eliminarCliente = async id=>{
    try {
        //hacemos que TENGAMOS que esperar que se elimine cliente 
        // de la base de datos y no de forma asyncrona 
        await fetch(`${url}/${id}`, {method: 'DELETE'})

    } catch (error) {
        console.log(error);
    }
}

// obtener cliente individual
export const ObtenerClienteByID = async id =>{
    try {
        console.log('hector');
        const resultado = await fetch (`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }

}

//cuando consultamos los clientes
export const obtenerClientes = async () =>{
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        
        return clientes;
    } catch (error) {
        console.log(error);
        
    }
}