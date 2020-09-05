//Object literal
const pr = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
}


// Object Constructor

function Producto(nombre, precio) 
{
    this.nombre = nombre;
    this.precio = precio;
    this.dispoible = true;
}

const px1 =  new Producto("carrito", 500);
console.log(px1);