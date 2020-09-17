// Funciones que retornan una funcion
const obtenerCliente = () => () => console.log('Juan Pablo');

const fn = obtenerCliente();

fn();