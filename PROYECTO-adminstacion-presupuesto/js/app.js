// Variables y Selectores de
const formulario = document.querySelector('#agregar-gasto');
const listado = document.querySelector('#gastos ul');


//Eventos de
eventListeners();
function eventListeners() 
{
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);// VALIDAR formulario
}


// Classes
class Presupuesto
{
    constructor(presupuesto)
    {
        this.presupuesto = Number(presupuesto);
        this.restante = this.presupuesto;
        this.gastos = [];
    }

    nuevoGasto(gasto)
    {
        const existe = this.gastos.some( obj =>  obj.name === gasto.name);
        console.log('esto es el valor', existe);

        //const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

        if (existe)
        {
            console.log('entro1');
            const new_gastos = this.gastos.map(
                (gasto_obj)=>
                {
                    if (gasto_obj.name === gasto.name)
                    {
                        gasto_obj.cantidad += gasto.cantidad;
                        return gasto_obj;
                    }
                    else
                    {
                        return gasto_obj;
                    }
                }
            );
            this.gastos = [...new_gastos];
        }
        else 
        {
            console.log('entr2');
            this.gastos = [...this.gastos, gasto];
        }

        console.log(this.gastos);
        this.calcularRestante();

    }

    calcularRestante()
    {
        if(this.gastos.length > 0)
        {
            const gastado = this.gastos.reduce(
                (total, gasto)=> total += gasto.cantidad, 0
            );

        console.log('gastado hasta ahora');
        console.log(gastado);
        this.restante = this.presupuesto - gastado;
        }
    }
    eliminarGasto(id)
    {
        this.gastos = presupuesto.gastos.filter(gastos => gastos.id !== id);
        console.log(this.gastos);
        this.calcularRestante();
    }
}




class UI
{
    insertarPresupuesto(cantidad)
    {
        const {presupuesto, restante} = cantidad;
        
        //Agregar el HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo)
    {
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error')
        {
            divMensaje.classList.add('alert-danger');
        }else
        {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje
        divMensaje.textContent = mensaje;

        //Insertar en el html del carrito en
        
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() =>{
            divMensaje.remove();
        },3000)
    }
    actualizarRestante(restante)
    {
        document.querySelector('#restante').textContent = restante;
    }
    comprobrarPresupuesto(presupuestoObj)
    {
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        //comprobar 25%
        if( (presupuesto / 4) > restante)
        {
            console.log('ya gastatste 25');
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger');
        }
        else if ((presupuesto / 2) > restante)
        {
            console.log('ya gastatste 50');
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }
        // sie el total < 0
        if (restante <= 0)
        {
            userInterface.imprimirAlerta('el presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

    mostrarGastos(gastos)
    {
        //console.log('Working');
        this.limpiarHtml();
        gastos.forEach( gasto =>
                {
                    const {  id, name, cantidad} = gasto;

                    //Crear un LI
                    const nuevoGasto = document.createElement('li');
                    nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
                    //nuevoGasto.setAttribute('data-id', id);
                    nuevoGasto.dataset.id = id;

                    //agregar el HTML del gasto
                    nuevoGasto.innerHTML = `${name} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

                    //boton para borrar el gasto
                    const btnBorrar = document.createElement('button');
                    btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
                    btnBorrar.innerHTML = 'Borrar &times;';
                    btnBorrar.onclick = () =>
                    {
                        eliminarGasto(id);
                    }
                    nuevoGasto.appendChild(btnBorrar);

                    //agregar el HTML
                    listado.appendChild(nuevoGasto);
             }
            ); 
    }



    limpiarHtml(){
        while(listado.firstChild)
        {
            listado.removeChild(listado.firstChild);
        }
    }

}

//instanciar classes
let presupuesto;
const userInterface = new UI();
// Funciones

function preguntarPresupuesto() 
{
    const presupuestoUsuario = prompt('cual es tu presupuesto');


    //console.log(presupuestoUsuario);
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0)
    {
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
    userInterface.insertarPresupuesto(presupuesto);
}



//añade gastosa
function agregarGasto(e)
{
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const gasto = document.querySelector('#cantidad').value;


    //validadr
    if (nombre === '' || cantidad === '')
    {
        console.log('Ambos campos son obligatorios');
        userInterface.imprimirAlerta('Campos son obligatorios', 'error');
    }
    else if (gasto <= 0)
    {
        userInterface.imprimirAlerta('Gasto no valido', 'error');
    }

    //agregar gasto o modificar presupuestoUsuario para poder eliminarlo o guardarlo
    const gasto_obj =
     {
        id: Date.now(),
        name: nombre,
        cantidad: parseInt(gasto)
     }
     //añade nuevo gasto si no esta ya agregado
     
     presupuesto.nuevoGasto(gasto_obj);
     userInterface.imprimirAlerta('Gasto agregado Correctamente');

    //agregar gasto al html si RESTANTE es >=0
    const {gastos, restante} = presupuesto;
    userInterface.mostrarGastos(gastos);
    userInterface.actualizarRestante(restante);
    
    userInterface.comprobrarPresupuesto(presupuesto);
    formulario.reset();

}
function eliminarGasto(id)
{
    presupuesto.eliminarGasto(id);
    const {gastos, restante} = presupuesto;
    userInterface.mostrarGastos(gastos);
    userInterface.actualizarRestante(restante);
    userInterface.comprobrarPresupuesto(presupuesto);
}
