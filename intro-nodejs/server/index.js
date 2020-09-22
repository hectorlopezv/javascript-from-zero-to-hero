// express server js config file................................
//mismo que haproxy.cfg


//require es metodo de importar de nodejs
// o podrias usar import normalmente y usar babel para que haga el downgrade
// a require automaticamente 
const express = require('express');
const path = require('path');
const configs = require('./config');
//traemos la libreria de body-parser para ver el formulario de
const bodyParser = require('body-parser');
//importando el ORM
const db = require('./config/database');

//cargando las variables
require('dotenv').config({path: 'variables.env'})
/* asyn wait function
async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
  }
*/
db.authenticate()// autentica que haya conexion a la base de datos
.then (e => console.log('hola bebe'))
.catch(error => console.log(error));


//importar express
const routes = require('./routes/routes');
//configurar express
const app = express()
let port = 3001

//config files 
const config = configs[app.get('env')];

//creamos la variable en el locals
app.locals.titulo = config.nombresito;

//hablitar pugg
//aggregar caracteristicas
app.set('view engine', 'pug');

//anadir las vistas
app.set('views', path.join(__dirname, './views'));

//validar si estamso en desarrollo o en produccion

 
//responder a un endPOINT en particular
/*
app.use('/', (req, res, next) => {
    // el endpoint es / el homepage
    // el req es lo que hacemos en el request........ en es endpoint
    // el res.. es lo que vamos a ahcer en el response
    res.send('Hola Mundo en NodeJS');
    console.log('hector');

});
*/
//donde encontrora los archivos estaticos carga una caperta estatica
app.use(express.static('public'));

//muesta el ano actual -- usamos un use como se aplicara en todos
//y genera la ruta 
//los verbos de http
app.use('/', (req, res, next) => {
    //crear una fecha
    const fecha = new Date();
    console.log(fecha.getFullYear());
    res.locals.fechaActual = fecha.getFullYear();//anadimos la variables al local
    res.locals.ruta = req.path;
    return next();//autrorizmos que siga la ejecusion del programa
})
//ejecutamos el middleware 
// se ejecutara en basicamente todos los request...
//parsea el formulario y te devuelve un objecto que podremos usar
//parse req.body y lo combierte en un objecto literal
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//cargamos las rutas....

app.use('/', routes() );//para que reaccione a cualquier metodo http
//will handle routes from /, /any , /etcc

/** puerto y host para la app */
const host =  process.env.HOST || '0.0.0.0';
port = process.env.PORT || 3000;

app.listen(port, () => console.log(` Listening at http://localhost:${port}`) )