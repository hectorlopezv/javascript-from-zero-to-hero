//enventos de teclado

const busqueda = document.querySelector('.busqueda');


busqueda.addEventListener('input', (e) => 
    {
        if(e.target.value === '')
        {
            console.log('fallo la validacion');
        }
        console.log('presionado tecla');
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.target.value);
    }
);