// Event Bubbling solucion usando DELEGATION

const cardDiv = document.querySelector('.card');



cardDiv.addEventListener('click', (e) =>
    {
        e.stopPropagation();
        console.log(e.target);
        console.log('click en card');
        if (e.target.classList.contains('titulo'))
        {
            console.log('diste click en titulo');
        }
        
        if (e.target.classList.contains('precio'))
        {
            console.log('diste click en precio');
        }
    }
);
