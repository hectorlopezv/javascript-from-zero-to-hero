//Closures
/*
const cliente = 'Juan';

function monstarCLiente(){
    const cliente = 'Pablo';
    console.log(cliente);
}

console.log(cliente);
mostrarCliente();
*/

const obtenerCliente = () => {
    const nombre = 'Juan';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre();
}
const cliente = obtenerCliente();
cliente();