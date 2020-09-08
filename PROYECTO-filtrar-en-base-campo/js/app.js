//VARIABLES
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;



// GENERAR OBJECTOS DE LA BUSQUERDA
const datosBusqueda = 
{
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}
console.log(datosBusqueda);

//eventos
document.addEventListener('DOMContentLoaded', () => 
    {
        mostrarAutos(autos);//muestra los autos al cargar

        //lena las opciones de años
        llenarSelect();
        
    }
);




//event lister para los select de busquerdan
marca.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.marca = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
        
    }
);

year.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.year = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
    }
);

minimo.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.minimo = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
    }
);


maximo.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.maximo = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
    }
);


puertas.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.puertas = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
    }
);

transmision.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.transmision = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
    }
);


color.addEventListener('change', (e)=>
    {
        console.log(e.target.value);
        datosBusqueda.color = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto();
    }
);


//FUNCIONES
function mostrarAutos(autos)
{

    limpiarHtml();
    autos.forEach( (auto) => 
        {
            const {marca, modelo, year,precio,puertas,color,transmision} = auto
           // console.log(auto);
            const autoHTML = document.createElement('p');
            autoHTML.textContent = `${marca} ${modelo} ${year} ${precio} 
            ${puertas} ${color} ${transmision}
            `

            //insertar en el html;
            resultado.appendChild(autoHTML);
        }
    );
}


// Generea los años del selectores
function llenarSelect ()
{
    console.log('llenando el select ....');
    for (let i = max; i > min; i--)
    {
        console.log(i);
        const option_year = document.createElement('option');
        console.log(option_year);
        option_year.value = i;
        option_year.textContent = i;

        year.appendChild(option_year);//agregas las pciones de año
    }
}

//Funcion que filtra en base a la busqueda

function filtrarAuto()
{
    console.log('Probando');
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    .filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    console.log(resultado);
    


    //mostrar un mensaje si no hay resultado que
    if (resultado.length)
    {
        mostrarAutos(resultado);
    }
    else 
    {
        noResultado();

    }
}

function filtrarMarca(auto)
{
    const  { marca } = datosBusqueda;

    if(marca)
    {
        return auto.marca === marca;// si es falso te devuel un objeto con esa bu
        //busquerda
    }
    return auto;//para no perder referencia del objecto

}


function filtrarYear(auto)
{
    const  { marca, modelo, year,precio,puertas,color,transmision } = datosBusqueda;

    if(year)
    {
        return auto.year === parseInt(year);
    }
    return auto;
}



function filtrarMin (auto) 
{
    const  { marca, modelo, year,maximo, minimo,puertas,color,transmision } = datosBusqueda;

    if(minimo)
    {
        return auto.precio >= parseInt(minimo);
    }
    return auto;

}

function filtrarMax (auto) 
{
    const  { marca, modelo, year, minimo, maximo ,puertas,color,transmision } = datosBusqueda;

    if(maximo)
    {
        return auto.precio <= parseInt(maximo);
    }
    return auto;

    
}

function filtrarPuertas (auto) 
{
    const  { marca, modelo, year,min, max,puertas,color,transmision } = datosBusqueda;

    if(puertas)
    {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision (auto) 
{
    const  { marca, modelo, year,min, max,puertas,transmision,color } = datosBusqueda;

    if(transmision)
    {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor (auto) 
{
    const  { marca, modelo, year,min, max,puertas,transmision, color } = datosBusqueda;

    if(color)
    {
        return auto.color === color;
    }
    return auto;


}

//limpiar HTML

function limpiarHtml()
{
    while(resultado.firstChild)
    {
        resultado.removeChild(resultado.firstChild);

    }

}


//no RESULTADO in
function noResultado()
{
    limpiarHtml();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}