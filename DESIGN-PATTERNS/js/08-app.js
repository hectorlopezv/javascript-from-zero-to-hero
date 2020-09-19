function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;// seria el que le dice el MEDIADOR
}

//el vendedor tendra metodos no disponibles para comprador basicamente
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`tenemos el siguiente articulo ${articulo}, inciamos con un precio de ${precio}`);
    }, 
    vendido: comprador => {
        console.log('vendido a ${comprador}');
    }
}
function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null; // la sala es la forma de media entre los objectos
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}



//comprador y vendedor se comunican por medio de SUBASTA
function Subasta(){// este seria el objecto mediador
    let compradores = {};

    return {// seria la instancia actual de la subasta
        registrar: usuario => {
            //lama a compradores
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//crear objectos
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de Autos');

// la idea es que comunique que SUBASTA comunique a comprardor y vendedor
const subasta = new Subasta();// salsa subasta

vendedor.oferta('mustan 66', 600);
//tenemos que registar los OBJECTOS a participar
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

// aqui es donde llega el mediador de la subasta
juan.oferta(350, juan);
pablo.oferta(450, pablo);

juan.oferta(600, juan);
pablo.oferta(700, pablo);

vendedor.vendido('pablo');

