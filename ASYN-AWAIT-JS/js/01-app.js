console.log(1 + 1);
try {
    hola();// si hay un error la siguiente linea no s ejecuta
} catch (error) {//administrar el error
    //usarlo en partes crtiticas app
    //autenticar usurario, conectar api, conectar una base de datos
    //acciones de en que caso que falle siga funcionando la
    //y podamnos obtener un mensaje de error
    console.log(error);
}

console.log(2 + 2);