const ca = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//con un for each

let re = '';
ca.forEach( (pr, index) => 
{
    if(pr.nombre === 'Tablet')
    {
        re = ca[index];
    }
}
);
console.log(re);

//con .find


const res2 = ca.find(pr => pr.precio === 100);

console.log(res2);