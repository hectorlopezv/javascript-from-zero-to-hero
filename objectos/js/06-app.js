
const prx = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    dispoible: true,
    informacion : 
    {
         peso: '1 kg',
         medidas: 
         {
             tallas: 'x xl xxl'
         },
         fabricacion: 
         {
             pais: 'chinas colombia'
         }
    }

}

const {nombre, informacion:{medidas:{tallas} } } = prx;

console.log(prx);

console.log(nombre);
console.log(medidas);
console.log(tallas);