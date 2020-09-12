//campos formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//Section Citas
const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector('#nueva-cita');
// modo deiccion
let editando;
//Registro eventos
eventListeners();
function eventListeners() 
{
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

//objecto con la informacion cita
const citaObj = 
{
    mascota:'',
    propietario:'',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//Agregar datos al objecto de cita
function datosCita(e)
{
    citaObj[e.target.name] = e.target.value;
    
}

//Clases
class UI
{
    //elimar agreas html en la pagina
    imprimirAlerta(mensaje, tipo)
    {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        // agregar clas en base del error
        if (tipo === 'error')
        {
            divMensaje.classList.add('alert-danger');
        }
        else
        {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent  = mensaje;
        //agregar al HTML

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //quitar la alerta desppues de 5 segundos
        setTimeout(()=>{
            divMensaje.remove();
        },3000)
    }
    imprimirCitas({citas})
    {
        this.limpiarHtml();
        console.log('en imprimir', citas);
        citas.forEach((cita)=>
        {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //Scirpt de elemtnos de cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent =mascota;


            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = 
            ` 
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;
            
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = 
            ` 
                <span class="font-weight-bolder">Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = 
            ` 
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = 
            ` 
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = 
            ` 
                <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
            `;

            //Boton para eliminar esta CITA
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML ='Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
            btnEliminar.onclick = () =>
            {
                eliminarCita(id);
                console.log('Eliminar');
            }

            //añade boton para editar el
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML= `Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`
            btnEditar.onclick = () => cargarEdicion(cita);

            //agregando al div
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);
            //agregar citas
            contenedorCitas.appendChild(divCita);
        });

    }
    limpiarHtml()
    {
        while(contenedorCitas.firstChild)
        {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}

//classes CITAS - Maneja elimnar y agregas citas en las listas
class Citas 
{
    constructor()
    {
        this.citas = []
    }
    agregarCita(cita)
    {
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    
    }
    //agregar citas
    //quitar citas
    eliminarCitas(id)
    {
        console.log('antes', this.citas);
        this.citas = this.citas.filter(cita=>cita.id !== id);
        console.log('despues', this.citas); 
    }
    actualizarCita(citaActualizada)
    {   
        const x = this.citas.map( cita => citaActualizada.id === cita.id? citaActualizada: cita );
        this.citas = [...x];
        console.log('lista act', this.citas);
    }
    

}



const ui = new UI();
const administrarCitas = new Citas();


//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e)
{
    e.preventDefault();
    //validar objecto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //Validar que no esten vacios
    if(mascota === '' && propietario === '' 
    && telefono === '' && fecha === '' && hora === '' && sintomas === '')
    {
        console.log('todos los campos son obligatorios');
        ui.imprimirAlerta('todos los campos son obligatorios', 'error');
        return;
    }


    if(editando)
    {
        console.log('modo edicion');
        ui.imprimirAlerta('Editado correctamente');
        editando = false;
        administrarCitas.actualizarCita({...citaObj});
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
    }
    else
    {
        console.log('modo nueva cita');
        //genear un id unico
        citaObj.id = Date.now();
        //agregando la cita a la lista
        administrarCitas.agregarCita({...citaObj});//pasamos una copia de citaobj
        //mensaje agregado correctamen
        ui.imprimirAlerta('Se agrego correctamente');
    }


    formulario.reset();

    //reiniciar objecto tambien
    reinciarObjecto();
    
    //agregando la citas al HTML
    console.log({...citaObj});
    ui.imprimirCitas(administrarCitas);

}
function eliminarCita(id)
{
    administrarCitas.eliminarCitas(id);

    //mostart mensaje
    ui.imprimirAlerta('la cita se elimino correctamente');

    ui.imprimirCitas(administrarCitas);


}
function reinciarObjecto()
{
    citaObj.mascota='',
    citaObj.propietario=''
    citaObj.telefono='',
    citaObj.fecha='',
    citaObj.hora='',
    citaObj.sintomas='',
    citaObj.id=''
}

// cargar los datos y el modo de edicion

function cargarEdicion(cita)
{
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    //llenar los input
    console.log(cita);

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    //lenar el objecto pq esta reseteado
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas=sintomas;
    citaObj.id = id;

    //cambiar texto del button para
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    editando = true;

}