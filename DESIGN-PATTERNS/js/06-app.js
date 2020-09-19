class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona :${this.nombre} Emai: ${this.email}`);
    },

    monstrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

//aplicando el patron MIXIN
// ahora todas las funciones objecto funcionesPersona estaran incluidads en la clase persona
Object.assign(Persona.prototype, funcionesPersona);

//anadir funcionesPersona a la clase de Persona
const cliente = new Persona('Juan', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.monstrarNombre();