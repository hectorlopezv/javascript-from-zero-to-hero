class Cliente 
{
    //make name private
    #nombre;
    setNombre(nombre)
    {
        this.#nombre = nombre;
    }

    getNombre()
    {
        return this.#nombre
    }
}


const juan = new Cliente();
console.log(juan);
juan.setNombre('juan'),
console.log(juan.getNombre());
console.log(juan);
