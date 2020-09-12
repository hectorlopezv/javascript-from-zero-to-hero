//constructores

function Seguro(marca, year, tipo)
{
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Prototypes Seguro
Seguro.prototype.cotizarSeguro = function()
{
    /*
        1 - Americano 1.15
        2 - Asiatico 1.05
        3 - Europeo 1.35
    */ 
    const precioBase = 100;
    let cantidad;
    switch (this.marca) {
        case '1':
            cantidad = precioBase * 1.15;
            break;
        case '2':
            cantidad = precioBase * 1.05;
            break;
        case '3':
            cantidad = precioBase * 1.35;
            break
        default:
            cantidad = precioBase * 2;
            break;
    }
    let max = new Date().getFullYear();

    //por cada año le va a restar 3% del valor actual;
    cantidad = cantidad- cantidad *0.03 * (max-this.year)
    console.log(cantidad);
    // si es basico se multiplica por 30% else 50%
    console.log(this.tipo);
    if(this.tipo === 'basico')
    {
        cantidad *= 1.30;
    }
    else 
    {
        cantidad *= 1.50;
    }
    console.log(cantidad);
    return cantidad;
}


function UI()
{

}
//Prototypes UI

//llenar años
UI.prototype.llenarOpciones = ()=>
    {
        let max = new Date().getFullYear();
        let min = max - 20;
        const yearSelector = document.querySelector('#year');

        for (; max > min; max--) {
            const option_ = document.createElement('option');
            option_.textContent = max;
            yearSelector.appendChild(option_);
        }

    }
// muestra alertas en pantalla
UI.prototype.monstrarMensaje = function (mensaje, tipo)
{
    const div = document.createElement('div');

    if(tipo === 'error')
    {
        div.classList.add('error');
    }
    else 
    {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;


    //insertar en html

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));
    setTimeout(() =>{div.remove()},2000)

}

//mostrar resultados
UI.prototype.mostrarResultados = function (total, seguro)
{
    //crear un div
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML= 
    `
        <p class="header"> Tu Resumen</p>
        <p class="font-bold"> Total: ${total}</p>
    `;   

    // DIV result
    const resDiv = document.querySelector('#resultado');
    

    //mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    
    //timer for spinner
    setTimeout(() =>// es como asynchrono
        {

            spinner.style.display = 'none';// se borra spiner
            resDiv.appendChild(div);// se añade el div cuando pasen los 3 segundos
        }, 4003
    )

    //ADING DIV
    
    console.log(resDiv);
    console.log("bebesito");


 

}

//crear OBJECTOS
const userInterface = new UI();


//events
document.addEventListener('DOMContentLoaded', ()=>
    {
        userInterface.llenarOpciones();
        console.log(UI);

    }
);

eventListeners();
function eventListeners()
{
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}



//Funciones
function cotizarSeguro(e)
{
    e.preventDefault();
    //leer la marca sleeccionada
    const marca = document.querySelector('#marca').value;
    console.log(marca);
    
    // leer el año cursoSeleccionado
    const year = document.querySelector('#year').value;
    console.log(year);

    // leer seguro sleeccionado
    const seguro = document.querySelector('input[name="tipo"]:checked').value;
    console.log(seguro);

    if (marca === '' || year === '' || seguro === '')
    {
        //mopstramos mensaje de error
        
        userInterface.monstrarMensaje('todos los campos son obligatorios', 'error');
        console.log('no paso validation');
        return;
    }
    
    
    //mostramos resultado
    //userInterface.monstrarMensaje('valido')
    console.log('paso validation');

    userInterface.monstrarMensaje('Cotizando....', 'exito');

    //esconeido cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados !== null)
    {
        resultados.remove();

    }
    //si paso validacion es HORA de cotizacion

    const cotizacionRequest = new Seguro(marca, year, seguro);
    console.log(cotizacionRequest);

    // cotizar SEGUROS
    const total = cotizacionRequest.cotizarSeguro();

    //pintar variable
    userInterface.mostrarResultados(total, cotizacionRequest);
}




//Variables

