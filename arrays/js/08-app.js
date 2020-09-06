const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//desctructuring de objects
const { nombre, precio } = producto;//const name = producto.name ...etc
console.log(nombre);
console.log(precio);


//desctructuring in arrays

const numeros = [10,20,30,40,50];

//nombre variables es el que deseas
//const [primero, segundo, tercero] =  numeros;
//const [, , tercero] = numeros;
//console.log(primero);

const [primero, , ...tercero] = numeros;
console.log(tercero);
console.log(primero);