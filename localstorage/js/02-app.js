const nombre = localStorage.getItem('nombre2');
console.log(nombre);


const productoJSON =localStorage.getItem('producto');
const meses_ = localStorage.getItem('meses');
console.log(productoJSON);
console.log(JSON.parse(productoJSON));
console.log(JSON.parse(meses_));