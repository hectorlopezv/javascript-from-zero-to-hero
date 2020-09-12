function *crearGenerador()
{
    yield 1;
    yield 'juan';
    yield 3+3;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());



// Generador para carrito de compreas

function *generadorCarrito(carrito)
{
    for (let i = 0; i < carrito.length; i++)
    {
        yield carrito[i];
    }
}

const carrito = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const iterador_2 = generadorCarrito(carrito);
console.log(iterador_2.next());