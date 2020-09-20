/// importamso el archivo CSS
//INSTALANDO los loaders necesarios es posible importar otros archivos el
// APARTDE CSS
//import '../css/style.css';
import '../css/style.scss';
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito);

class Hector{
    constructor(nombre){
        this.nombre = nombre;
    }
}


const cliente = new Hector('Hector');
console.log(cliente);
console.log(cliente.nombre);
console.log('Desde el Inicio');