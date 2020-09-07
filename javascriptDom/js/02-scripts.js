const header = document.getElementsByClassName('header');

const hero = document.getElementsByClassName('hero');

console.log(hero);
console.log(header);

// si la clase existe mas de una vez
const contenedores =  document.getElementsByClassName('contenedor');

console.log(contenedores);

//cuando no existe ---- manda un html collection vacio
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);