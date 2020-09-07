const enlace = document.createElement('a');
console.log(enlace);

//agregando el text
enlace.textContent = 'Nuevo Bebe';

enlace.href = '/nuevo-enlace';

enlace.target = '_blank';


// seleccionar la navegacion de

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//set nuevo attributo
enlace.setAttribute('data-enlace', 'nuevo-enlace');

//agregar clase de
enlace.classList.add('datico');

//agregar funcion para
enlace.onclick = miFunction;

// selecionar la navegacion y agregar elemento
navegacion.appendChild(enlace);

// seleccionar y agregar usando insertBefore
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFunction()
{
    alert('Diste click');
}


//crear una Card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');



const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


// crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

// añadiendo al division

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);

console.log(document.querySelector('.card') );

//crear la imagen para el card
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';
img.alt = "Texto Alternativo";


console.log(img);

//creamdp el card

const card = document.createElement('div');
card.classList.add('card');

//assignar info
card.appendChild(img);
card.appendChild(info);

console.log(card);


//insertar en el html5

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
