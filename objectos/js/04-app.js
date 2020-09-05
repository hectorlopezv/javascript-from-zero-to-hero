//objecto literal
const pr = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
}




//desctructuring objectos
const nombre = pr.nombre;
console.log(nombre);


//extraer valor de objectos
cons { nombre } = pr;
console.log(nombre);

cons { precio } = pr;

console.log(precio);

cons {nombre, precio } = pr;
 
console.log(pr);
