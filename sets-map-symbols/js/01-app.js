//SETS
const carrito = new Set();
carrito.add('camisa');
carrito.add('Goku');
carrito.add('vegetea');


console.log(carrito);
console.log(carrito.has('camisa'));
console.log(carrito.entries());
carrito.delete('camisa');
console.log(carrito);


// son iterables osea todo lo que le puedas aplicar un foor loop
carrito.forEach(producto=>
{
    console.log(producto);
});

carrito.clear();
console.log(carrito);

//del siguiente areglo, eliminar los duplicados
const numeros = [10,20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);