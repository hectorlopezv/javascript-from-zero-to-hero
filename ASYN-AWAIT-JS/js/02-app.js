function descargarClientes(){
    return new Promise((resolve, reject) =>{
        const error = false;

        setTimeout(() =>{
            if(!error){
                resolve('el LIstado de cliente se descargo GOOD')
            }
            else{
                reject('fallo las descarga very Bad');
            }
        }, 3000)
    });
}

//ASYNC AWAIT

async function ejecutar(){
    try {
        const respuesta = await descargarClientes();
        console.log(2 + 3);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
        
    }
}

ejecutar();