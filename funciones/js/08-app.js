function sumar(a, b)
{
    return a + b;
}

const res = sumar(2,2);

console.log(res);


//ejemplo mas avanzador

let total = 0;

function agregarCarrito(precio)
{
    return total+= precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}
const totalPagar = calcularImpuesto(300);
console.log(total);

console.log(`el total a pagar es de ${totalPagar}`);