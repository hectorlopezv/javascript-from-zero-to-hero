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


function Persona(nombre,saldo, telefono)
{
    //this.nombre = nombre;
    //this.saldo = saldo;
    //usando herencia
    Cliente.call(this,nombre, saldo);
    this.telefono = telefono;
}
//copiar protype a otro objecto
Persona.prototype= Object.create(Cliente.prototype);

//PARA MANTENER CONSTRUCTOR PERSONAS
Persona.prototype.constructor= Cliente;
// instalarciarlo
const juan = new Persona('Juan', 5000, 3205552871);
console.log(juan);