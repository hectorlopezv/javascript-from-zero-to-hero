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





for (let i = 0; i < carrito.length; i++) {
    //console.log(carrito[i]);
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`)
}


carrito.forEach(
    function name(producto) {
        console.log(`Nombre: ${producto.nombre} -  Precio: ${producto.precio}`)
    }
)

