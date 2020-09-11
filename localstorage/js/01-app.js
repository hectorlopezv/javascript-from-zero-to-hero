localStorage.setItem('nombre', 'valor');
sessionStorage.setItem('hector', 'bebe');

const producto = {
    nombre : 'Monitor 24 pulgadas',
    precio: 300,
}

const productoString =JSON.stringify(producto);
console.log('hector');
console.log(typeof(productoString));
console.log(productoString);
localStorage.setItem('producto', productoString);

const meses = ["Enero", "Febrero", "Mayo"];
console.log(meses);
const mesesStr = JSON.stringify(meses);
console.log(mesesStr);
console.log(typeof(mesesStr));
localStorage.setItem('meses', mesesStr);
