//antes de currying de
/*
const suma = (a, b, c) => {
    return a + b + c;
}
*/
//despues de curryng
const suma = (a, b, c) => a + b + c;
// usando curring y partiendolo en pedazos como un PIPELINE
const parcial = a => (b, c) => suma(a, b, c);

//esto retorna la funcion que toma (b, c)
const primerNumero = parcial(5);
//ejecutando la segunda funcion 
const resultado = primerNumero(4, 3);
//const resultadoParcial = parcial(5)(4)(3);// curring y partials... basicamente
console.log(resultado);



