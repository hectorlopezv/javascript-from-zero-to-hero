const pr = '           Monitor 20 pulgadas                                                     ';

console.log(pr);
console.log(pr.length);


// eliminar el inico
console.log( pr.trimStart() );
console.log(pr.trimEnd() );

//function chainings
console.log(pr.trimStart().trimEnd());
