const carrito = [];
//definir un producto de

const producto = 
{
    nombre: "Monitor 32 pulgdas",
    precio: 400,
}

const producto2 = {
    nombre: "Celular",
    precio: 800,
}

carrito.push(producto2);
carrito.push(producto);


const producto3 = {
    nombre: "teclado",
    precio: 50,
}

carrito.unshift(producto3);

console.table(carrito);

//delete carrito[2];
//OR
carrito.pop();
console.table(carrito);

//eliminar de incio del arreglo
carrito.shift()

console.table(carrito);
