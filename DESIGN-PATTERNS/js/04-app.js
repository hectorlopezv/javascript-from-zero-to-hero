//Factory 
// Es un patron de creacion en
// crea objecto BASADO EN CIERTAS condiciones
//aunque esos objectos comparten alguinos atributos
// las condiciones los hacen diferentes
class InputHtml{// crea el objecto html para
    // todos comparten los atributos dee  ser un objecto HTML
    // y de tener los mismo atributos
    constructor(type, nombre){
        this.type = type;// esta seria la condicion VA A SER DE DIFERENTE TIPO DEPENDIENDO DE LA CONDICION
        this.nombre = nombre;
    }
    // ESTE LA FUNCION DEL MODEL POR DECIRLO ASI LOS ATRIBUTOS QUE COMPARTIRIAN


    crearInput(){
        // Y ESTE YA SERIA EL DIFERENCIADOR DE LOS OBJECTOS
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory{
    crearElemento(tipo, nombre){

        switch (tipo) {// las condiciones
            case 'text':
                return new InputHtml('text', nombre);//deleuve el tipo dependiendo de la condicon
                
                break;
            case 'tel':
                return new InputHtml('tel', nombre);//dele
                break
            case 'email':
                return new InputHtml('email', nombre);//dele
                break
            default:
                break;
        }



    }
}


const factory = new HTMLFactory();// ESTE es el FACTORY

const elementHTML= factory.crearElemento('text', 'hector');//instnciamos la clase incial

console.log(elementHTML.crearInput());// cremaos el objecto

//elemento 2 HTML
const elemento2 = factory.crearElemento('tel', 'andres');
console.log(elemento2.crearInput() );// creamos el nuevo objecto html5

//elemento 3 HTML
const element3 = factory.crearElemento('email', 'pepe');
console.log(element3.crearInput() );

