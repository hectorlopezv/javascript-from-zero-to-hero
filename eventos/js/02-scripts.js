const nav = document.querySelector('.navegacion');


//registrar un evento

nav.addEventListener('click', () =>
    {
        console.log('Clicking');
        nav.style.backgroundColor = 'transparent';
    }
);

nav.addEventListener('mouseenter', () => 
    {
        console.log('entrando a la navegacion');
        nav.style.backgroundColor = 'white';
    }
);