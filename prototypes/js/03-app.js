function Cliente(nombre, saldo)
{
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function ()
    { 
        let tipo;
        if (this.saldo > 100) {
            tipo = 'Gold';
        } else if (this.saldo > 50) {
            tipo = 'Platinum';
        } else
        {
            tipo = 'Normal';
        }
    
        return tipo;
    }


Cliente.prototype.nombreClienteSaldo = function ()
{
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, 
    Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function (retira)
{
    this.saldo -= retira;
}




//instarciarlo
const pedro = new Cliente('pedro', 6000);
console.log(pedro);

pedro.tipoCliente();