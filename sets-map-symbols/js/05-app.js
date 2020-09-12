const sym = Symbol('1');
const sym2 = Symbol('2');


const nombre = Symbol();
const apellido =Symbol();
const persona = 
{


}    
//agregar nombre y apellido como llaves del objecto
persona[nombre] = 'Juan';
persona[apellido] = 'uno de mis apellidos';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

//definir una descripcion del symbolo
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] ='Pedro';
console.log(cliente);