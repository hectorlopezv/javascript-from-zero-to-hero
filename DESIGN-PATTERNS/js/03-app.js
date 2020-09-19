//Singleton
// es una clase que seria solo 1 instancia validation
// es como un super objecto con toda la informacion general
// no se permite multiples instancias solamente 1
//returna la instancia del mismo siempre

let instancia = null;// si la instancia esta vacia crea el objectos
// de otro modo no crea nada
// como prevenir creacion de mutliples instancias
class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }
        else {
            return instancia;
        }
    }
}


const persona = new Persona('Juan','h@gmail.com');
console.log(persona);
console.log(instancia);