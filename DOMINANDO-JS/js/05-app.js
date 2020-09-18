//Explicit Binding WAYS
function persona(el1, el2){
    console.log(this);
    console.log(el1);
    console.log(el2);
    console.log(this.nombre)
    //console.log(`Mi Nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}


const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['HEAVY METAL', 'ROCK'];
//objecto se pasan como aprametros
// arrays se passan como argumentos de la funcion
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//APPLY
persona.apply(informacion, musicaFavorita);

//BIND
console.log('BIND');
const nuevFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevFn();

// NEW bindind
 function Auto(modelo, color){
     this.modelo = modelo;
     this.color = color;
 }

 const auto = new Auto('Camaro', 'Negro');
 console.log(auto);




 // Windows bindings
 window.color = 'negro';
 function hola(){
     console.log(window.color);
 }
 hola();