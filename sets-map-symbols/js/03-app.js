const cliente = new Map();
cliente.set('nombre','karen');
cliente.set('tipo','premium');
cliente.set('saldo', 3000);
cliente.set(true,true);
cliente.set([0], true);
console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('tipo'));

const paciente = new Map([ ['nombre','paciente'],    ['cuarto','no definido'] ]);
console.log(paciente);

cliente.forEach((datos, index)=>
{
    console.log(datos);
});