//variables.
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =  document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener()
{   
    //cunado agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
    
    //eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrito de computadoras

    vaciarCarritoBtn.addEventListener('click', () =>
    {
        console.log('vaciando carrito');
        articulosCarrito = [];//resetamos el queuque
        LimpiarHTML();
    });
}




//eliminar un curso del carrito
function eliminarCurso(e)
{
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso'))
    {
        console.log(e.target);
        const cursoId = e.target.getAttribute('data-id');
        console.log(cursoId);

        //eliminar del arreglo por el data-id
        articulosCarrito = articulosCarrito.filter(curso => 
            {
                if(curso.id !== cursoId)
                {
                    return curso;
                }else if (curso.id === cursoId && curso.cantidad > 1)
                {
                    curso.cantidad--
                    return curso;
                }
                
            });
        console.log(articulosCarrito);
        carritoHTML(); //iterar sobre el carrito y mostrar su html
    }
}


//Funciones

function agregarCurso(e)
{
    e.preventDefault();
    
    //console.log(e.target.classList);
    if (e.target.classList.contains('agregar-carrito'))
    {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);

    }
   
}


//leer el contenido de html y extraer la informacion del curso
function leerDatosCurso(curso)
{
    const infoCurso = 
    {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    // si ya existe solo actualialos la cantidad de otro modo añadimos al carro
    //revisa si un elemento ya existe en un carrito de
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if(existe)
    {
        const cursos = articulosCarrito.map(curso => 
            {
                if (curso.id === infoCurso.id)
                {
                    curso.cantidad++;
                    return curso;//iteramos con el map pero necesitamos devolver algo pq el map devuelve algo
                }
                else
                {
                    return curso;//retorna los no duplicados
                }

            });

        articulosCarrito = [...cursos];
    }
    else
    {
        articulosCarrito = [...articulosCarrito, infoCurso];
      
    }
    //console.log(infoCurso);
    //agregar elemetnos al arreglo de Carro
    
    console.log(articulosCarrito);
      carritoHTML();
}


function carritoHTML()
{

    //Limpiar el HTML
    LimpiarHTML();


    //recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso =>
        {  
            const {imagen, titulo, precio, cantidad, id} = curso;
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
                <img src="${imagen}" width= "100px"
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
            `;
            
            //agrega el html del carrito en el tbody
            contenedorCarrito.appendChild(row);
        }

    );
}



//Elimina los cursos de tbody

function LimpiarHTML()
{
    //forma lenta de hacerlo
    //contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) //se ejecuta mientras haya hijos
    {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

    }
    
}


//mi solution chambona

/*
function carritoHTML()
{
    articulosCarrito.forEach( curso =>
        {   //console.log('imprimo curso');
            //console.log(curso);
            const row = document.createElement('tr');
            row.innerHTML = `<td>${curso.titulo}</td>`;
            //agregar el html del carrito en e tbody
            console.log(contenedorCarrito.children);
            for (let item of contenedorCarrito.children)
            {
                console.log('imprimendo el ', curso.titulo);
                console.log(item.textContent);

                console.log(item);

                //console.log(item.textContent === curso.titulo);
                //console.log(typeof(item.textContent) , typeof(curso.titulo));
                //console.log(item.textContent.length, curso.titulo.length);
                
                if (item.textContent === curso.titulo)
                {
                    console.log('ya existe BEBE');
                    
                }
            }
            //const existe =  curso.some( pr => pr.titulo = curso.titulo);
            
            //console.log(existe);

            contenedorCarrito.appendChild(row);
        }

    )
}

*/