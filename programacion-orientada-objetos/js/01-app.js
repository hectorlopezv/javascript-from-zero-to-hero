class Cliente 
{
    constructor(nombre, saldo)
    {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    monstrarInformacion()
    {
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`;
    }
    static bienvenida()
    {
        return `Bienvenido al cajero`;
    }
}


///insanciar clase cliente com
const juan = new Cliente('juan', 400);
console.log(juan.monstrarInformacion());
console.log(juan);

console.log(Cliente.bienvenida());


const Cliente2 = class 
{
    constructor(nombre, saldo)
    {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

//instanciar cliente2
const juan2 = new Cliente2('juan2', 600);
console.log(juan2);

