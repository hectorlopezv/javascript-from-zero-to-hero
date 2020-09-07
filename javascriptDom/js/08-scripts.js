const navegacion = document.querySelector('.navegacion');

console.log(navegacion);

console.log(navegacion.childNodes);// los espacios son considerados elementos
console.log(navegacion.children); // lista unicamente elementos


console.log(navegacion.children[0]);

console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);



const card = document.querySelector('.card');
console.log(card);
console.log(card.children);

console.log(card.children[0]);
console.log(card.children[1]);

console.log(card.children[1].children ) ;
console.log(card.children[1].children[0]);

//cambiamos el primero titulo del

card.children[1].children[0].textContent = 'Helllo Bebes';

console.log(card.children[1].children[1].textContent);

// Traversing del hijo al padre

console.log(card.parentNode);
console.log(card.parentElement);



console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);


//previous element

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

// cojer el ultimo y priver hijos
console.log(navegacion.firstElementChild); 

console.log(navegacion.lastElementChild);

