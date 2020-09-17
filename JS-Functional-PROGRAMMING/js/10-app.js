//Composition una alternativa a las classes
// meter un objecto en otro objecto
// cuando tienes funciones que se pueden compartir entre diferentes objectos
// uso de clases en vez de Classes
// una funciones que puedes usar en diferente sobjectos en lugar de instanciar y heredar funciones 
// uno define que funciones son necesarias para cada objecto

//esta es la funcion de composite
const obtenerNombre = info =>   ( {//esto basicamente es un objecto
    /// funciones que vamos a compartir
    // se le pon espacio como es una funcion dentro de otra
    // una declaracion normal
    monstrarNombre()
    {
        console.log(`Nombre: $:{info.nombre}`);
    }, 

   hola: {
        hector: 'bebe',
    }
});

//Ejemplo 2 pero ahora recibe parametro
const guardarEmail = info => ( {
    
    agregarEmail(email){
        console.log('hector');// hace referencia al info del objecto que llame
        info.email = email; // el objecto manda un puntero 
                            //y se modifica su estado como un dictionario
    }
    
});

//Ejemplo 3 Obtener Email
const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(info.email);
    }
});

//altenativa a clases basicamente................................................................
//usar funciones de utilidad y ir agregandola segun necesidad de
//como un mixin mas que todo pero aqui es llamado composite
function Cliente(nombre, email, empresa){
    let info  = {
        nombre, 
        email, 
        empresa
    }
    // esto agrega la funcion a cliente basicamente y le pasa INFO
    return Object.assign(
        info,
        obtenerNombre(info), guardarEmail(info), obtenerEmail(info), obtenerEmpresa(info)
    )

}


const obtenerEmpresa = info => ({
    monstrarEmpresa(){
        console.log(info.empresa)
    }
})

function Empleado(nombre, email, empresa){
    let info  = {
        nombre, 
        email, 
        empresa
    }
    // esto agrega la funcion a cliente basicamente y le pasa INFO
    return Object.assign(
        info,
        obtenerNombre(info)// aqui se asignan las funciones
    )

}

const cliente = Cliente('Juan', 'correo@corre.com', 'Codigo con Juan');
console.log(cliente)
cliente.monstrarNombre();
console.log(cliente.hola);
const empleado = Empleado('Pedro', 'correo@corre.com', 'programador');

//composite que recibe parametro
cliente.agregarEmail('cliente holita')
console.log(cliente);
cliente.mostrarEmail();
cliente.monstrarEmpresa();
