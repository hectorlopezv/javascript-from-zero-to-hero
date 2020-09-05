"Use strict";

const pr = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
}

Object.seal( pr );
pr.disponible = false;
pr.img = "imagen.jpg";
delete pr.precio;

pr.precio = 550;

console.log(pr);

