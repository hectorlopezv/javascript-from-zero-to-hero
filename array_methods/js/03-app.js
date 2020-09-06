const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carr = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un forEach

let total = 0;

carrito.forEach( pr => total += pr.precio );

console.log(total);

// ahora con Reduce

let resu =  carrito.reduce( (total, valor_actual) => total + valor_actual.precio, 0
)

console.log(resu);