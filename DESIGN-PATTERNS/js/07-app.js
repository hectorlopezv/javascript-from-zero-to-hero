//NAME-SPACE DESING PATTERN
// la idea es tener un objecto donde todo se guardara ahi
//para evitar colisiones
const restaApp = {};

restaApp.platillos 

//aqui se guardo todo en este array
restaApp.platillos = [
    {
        platillos: 'Pizza', 
        precio: 25
    },

    {
        platillos: 'Hamburgesa', 
        precio: 20
    },

    {
        platillos: 'Hot Dog', 
        precio: 10
    }
];

restaApp.funciones = {
    monstrarMenu: platillos => {
        console.log(`Biendvendios a nuestro menu`);
        cosole.log(platillos);
    },

    ordernar: id => {
        console.log(` tu Platillo ${restauranteApp.platillos[id].platillo}`)
    }
}

//en vez de usar un
//--> mostrarMenu();
const { platillos } = restaApp;
//se usa
//restaApp.funciones.monstrarMenu(platillos);
//es muy dificil que haya colisiones de nombres con este modo de llamarlo