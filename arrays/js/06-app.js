const carrito = [];
//definir un producto de

const producto = 
{
    nombre: "Monitor 32 pulgdas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "teclado",
    precio: 50
}

let resultado;

resultado = [...carrito, producto];

console.log(carrito)


console.log(resultado);

resultado = [...resultado, producto2];
console.log(resultado);