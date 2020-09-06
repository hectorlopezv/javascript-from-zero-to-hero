const carrito = [
    {
        nombre: 'Monitor 27 pulgadas', precio: 500
    },

    {
        nombre: 'Television', precio: 100
    },

    {
        nombre: 'Tablet', precio: 200
    },

    {
        nombre: 'Audifonos', precio: 400
    },

    {
        nombre: 'Teclado', precio: 250
    },

    {
        nombre: 'Celular', precio: 700
    }
]



const nuevoArreglo = carrito.map(
    function (producto) 
    {
        return `${producto.nombre} - Precio ${producto.precio}`;

    }
)

const nuevoArreglo2 = carrito.forEach(
    function name(producto) {
        return `Nombre: ${producto.nombre} -  Precio: ${producto.precio}`;
    }
)


console.log(nuevoArreglo);
console.log(nuevoArreglo2);
