//object literal

const pr = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
    mostrarInfo: function (){
        console.log(`el producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
//this references the same object

console.log(pr);

pr.mostrarInfo();