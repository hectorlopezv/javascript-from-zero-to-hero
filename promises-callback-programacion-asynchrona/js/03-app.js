const aplicarDescuento = new Promise( (resolve, reject) =>
    {
        const descuento = true;
        
        if(descuento)
        {
            resolve('Descuento Aplicado');
        }
        else
        {
            reject('No se pudo aplicar el descuento');
        }

    }
);

console.log(aplicarDescuento);
//hay 3 valores posibles para.... para un promise
// fullfiled - el promise se cumplio
//reject- no se cumplio
//pending - no se sabe si no se va a cumplir o rechazar, es cuando no se define nada en el promise
aplicarDescuento
    .then(resultado =>{
        console.log(resultado);
        descuento(resultado)
    })
    .catch(error =>{
        console.log(error);
    })

function descuento(mensaje)
{
    console.log('hola')
    console.log(mensaje);
}