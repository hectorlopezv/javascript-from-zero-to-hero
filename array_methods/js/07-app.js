const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

//.concat
const resx = meses1.concat(meses2, meses3);
console.log(resx);


// spread operator

const resultado12 = [...meses1, ...meses2, ...meses3, ...'Hector'];

console.log(resultado12);