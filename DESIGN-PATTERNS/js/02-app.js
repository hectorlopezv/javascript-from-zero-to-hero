//Constructor pattern
//una clase base de donde heredar todos
//son clases que solo se pueden extendere
// como cuando tiene un demon(estado base)
// y por raza les darias otra cualidades(extendiendo la clase base)
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Miguel', 'hectorvmlopez@gmail.com', ' Codigo con Juan')