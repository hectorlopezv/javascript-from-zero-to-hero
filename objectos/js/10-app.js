const pr = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
}

const medidas = 
{
    peso: '1kg',
    medida: '1m',
}

console.log(pr);
console.log(medidas);
console.log(Object.assign(pr, medidas));
console.log( {...pr, ...medidas} );