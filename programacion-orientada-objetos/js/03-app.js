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


//HERENCIA
class Empresa extends Cliente 
{
    constructor(nombre, saldo, telefono, categoria)
    {
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida()
    {
        return `Bienvenido al cajero de empresas`;
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('codigo con juan', 500, 1051999, 'Aprendizaje en Linea');
console.log(empresa);
console.log(empresa.monstrarInformacion());

console.log(Cliente.bienvenida());