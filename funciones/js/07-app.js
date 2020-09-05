

iniciarApp();

function iniciarApp()
{
    console.log('Iniciando app..');
    segundaFuncion();

}

function segundaFuncion() 
{
    console.log('desde la segunda funcion');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado (usuario) 
{
    console.log('Autenticado usuario... espere...');
    console.log(`${usuario} autenticado exitosamente`);
}