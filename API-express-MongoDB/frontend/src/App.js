import React, {Fragment, useState, useEffect, useParams} from 'react';
import logo from './logo.svg';
//importamos el ROUTER
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//componentes
import Pacientes from './componentes/Pacientes';
import NuevaCita from './componentes/NuevaCita';
import Cita from './componentes/Cita';
import Error from './componentes/Error';

//importamos el CLIENTE axios
import clienteAxios from './config/axios';





function App() {
  //cada ruta tiene que ir dentro de un switch
  //ROUTING en la parte del cliente
  //ROUTE seria la ruta a ir

//usar el state de la app
//las guardamos en un arreglo
//para poder usar los metodos de arreglos
const [citas, setcitas] = useState([]);
const [consultar, setconsultar] = useState(true);

useEffect(() => {
    if(consultar)
    {
        const consultarAPI = () => {
          clienteAxios.get(`/pacientes`)
          .then(respuesta => {
            setcitas(respuesta.data)
            setconsultar(false);
          }  )
          .catch(error => console.log(error) );
        };
        consultarAPI();
    }


  }, [consultar]);


  return (
    <Router>
      
      <Switch>
          <Route 
            exact path="/"
            component={
              () => {
                return ( <Pacientes citas={citas}/> )
              }
            }
            
          />

          <Route 
            exact path="/nueva"
            component={() =>{
              return (<NuevaCita setconsultar={setconsultar}/>)
            }}
          />

          <Route 
            exact path="/cita/:id"
            render={(props) => {
              //sacmoa la cita en especifico y la mandamos como un props
              const cita = citas.filter (cita => cita._id === props.match.params.id);

              return (
                <Cita cita={cita[0]}
                setconsultar={setconsultar}
                />
              );

            }}
          />
          <Route 
            path="*"
            component={Error}
          />

      </Switch>
    
    </Router>
   
    
  );
}

export default App;
