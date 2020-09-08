//VARIABLES
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');
//VARIABLES PARA CAMPOS

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

 const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners(){
    //cargar la app esta ya cargada
    document.addEventListener('DOMContentLoaded', iniciarApp);


    //campos del formulario

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Reinicia el formulario
    btnReset.addEventListener('submit', enviarEmail);


    // ENVIAR Email
    formulario.addEventListener('submit', enviarEmail)
    {

    }
}


//FUNCIONES
function iniciarApp()
{   btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//valida el formulario de
function validarFormulario(e)
{
    if(e.target.value.length > 0)
    {   

        //eliminar los errores

        const error = document.querySelector('p.error');
        if(error)
        {
            error.remove();
        }
        

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

    }
    else
    {
        e.target.classList.add('border', 'border-green-500');   
        e.target.classList.add('border', 'border-red-500');
        monstrarError('Todos lo campos son obligatorios');
    }

    if(e.target.type === 'email')
    {
        
        
        if (er.test(e.target.value) ) 
        {
            const error = document.querySelector('p.error');
            if(error)
            {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }
        else
        {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            monstrarError('email no es valido');
        }



    }

    if (er.test(email.value) !== '' && asunto.value !== '' && mensaje.value !== '') 
    {

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    
    }

}


//
function monstrarError(mensaje)
{
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100',
    'text-red-500', 'p-3', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0)
    {
        formulario.appendChild(mensajeError);
    }
    
}


//Enviar el Email para
function enviarEmail(e)
{
    e.preventDefault();
    console.log('enviando....');
    const spinner = document.querySelector('#spinner');



    console.log(spinner);
    spinner.style.display = 'flex';

    //Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout( () =>
        {
            console.log('esta funcion se jecuta despues de 3 segundos');
            spinner.style.display = 'none';

            const parrafo = document.createElement('p');
            parrafo.textContent = 'El mensaje se envio correctamente';
            
            parrafo.classList.add('text-center', 'my-10', 'p-5', 'bg-green-50', 'font-bold', 'uppercase');
            //inserta el parrafo antes del spinner
            formulario.insertBefore(parrafo, spinner);

            setTimeout(() =>
                {
                    parrafo.remove(); //remove
                    resetearFormulario();
                }
           , 5000 );



        }
    , 3000);
}

// Funcion que resetea el formulario

function resetearFormulario()
{
    formulario.reset();
    iniciarApp();
}