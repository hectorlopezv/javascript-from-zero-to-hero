const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
console.log(btnFlotante);
console.log(footer);
console.log(getComputedStyle(footer).bottom);
btnFlotante.addEventListener('click', () => 
    {
        let bottom_value = getComputedStyle(footer).bottom;
        console.log('Diste click en el boton');
        console.log(bottom_value);
        
        //btnFlotante.classList.add('btn-flotante.activo');
        if (bottom_value === '0px')
        {
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.textContent= 'X Cerrar';
        }
        else
        {
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.textContent = 'Idioma y Moneda';
        }
    }

);