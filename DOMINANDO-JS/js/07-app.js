// EVENT BUBBLING_
console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');


setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(resolve =>{
    resolve('Desconocido ...');
}).then(console.log)

console.log('ultimo')

function hola(){
    console.log('hola');
}

hola();