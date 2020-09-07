//const encabezado = document.querySelector('.contenido-hero h1').textContent;

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//console.log(encabezado.innerHTML); //se trae todo el html 
//console.log(encabezado.innerText); // no se trae lo que esta hidden
//console.log(encabezado.textContent); // se trae el html



document.querySelector('.contenido-hero h1').innerHTML = 'Nuevo Heading';


const imagen = document.querySelector('.card img');
console.log(imagen);

imagen.src = 'img/hacer2.jpg';