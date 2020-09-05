"Use strict";

const pr = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
}

Object.freeze( pr );
pr.disponible = false;
pr.img = "imagen.jpg";
delete pr.precio;
console.log(pr);

