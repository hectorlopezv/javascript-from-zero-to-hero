import React, {Fragment, useState} from 'react';//archivo del entry point contiene todos los componentes
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

const App = () => {

   
  
  //[valor, f]--> f es para modificar el state
  //Definimos los estados simples usando UseState
   //definimos un state
  const [cantidad , guardarCantidad] = useState(0);
  const [valor, setvalor] = useState('');
  //estado para pagar para el componente // para que en formlario se haga el setvalor
  // y aqui pasemos al nuevo componente de demostrara el valor
  const [total, settotal] = useState(0);

  //state de cuando la persona rpeisona el submit para mostar el btone
  const [cargando, setcargando] = useState(false);

  let componente;
  //carga condicional de componentes
  //si esta autenticado ve algo
  // si no esta autenticado ve otra cosa
  // carga condicional de 3 componentes
  if (cargando){
    componente = <Spinner />;
  }
  else if (total === 0)
  {
    componente = <Mensaje />
  }
  else
  {
    componente = <Resultado 
        total = {total}
        valor={valor}
        cantidad={cantidad}
      />
  }
  

  return (     
    <Fragment>
      <Header
        cantidad= {cantidad}
        //eventos de react envez de docuiment.addeventlistener('click')
        // todos los eventos comienzan en ON
       //onChange = {leerCantidad}//definimos la funcion igual que addeventlistener
      />

      <div className="container">
        <Formulario 
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        valor={valor}
        setvalor={setvalor}
        total={total}
        settotal={settotal}
        setcargando={setcargando}
        />
        
        <div className="mensajes">
            
            {componente}

        </div>
        
      </div>

    </Fragment> 
  );
}
 
export default App;


