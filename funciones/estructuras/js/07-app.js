const efectivo = 300;
const credito = 400;
const dispoible = efectivo + credito;

const totalPagar = 600;

if ( efectivo > totalPagar || credito > totalPagar || dispoible > totalPagar)
{
    console.log('si podemos pagar');
}
else 
{
    console.log('fondos insuficientes');
}

