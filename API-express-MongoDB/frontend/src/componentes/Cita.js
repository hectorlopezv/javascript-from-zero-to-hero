import React, {Fragment} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


const Cita = (props) => {
    const {cita} = props;
   
    if(!cita){
        
        return (<Redirect push to="/" />);
    }

    //elmina un registro

    const eliminarCita = (id) => {
        console.log('IM here');
        console.log(id);
        
        
          //redirecionamos a el home page ota vez
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                clienteAxios.delete(`/pacientes/${id}`)
                .then(() => {
                    props.setconsultar(true);
                    props.history.push("/");                        
                })
                .catch(error => console.log(error));

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })


      

    }
    return ( 
    <Fragment>

         <h1 className="my-5">Nombre cita: {cita.nombre} </h1>

         <div className="container mt-5 py-5">
             <div className="row">
                 <div className="col-12 mb-5 d-flex justify-content-center">
                     <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                 </div>
             </div>

             <div className="col-md-8 mx-auto">
                 <div className="list-group">
                     <div className="p-5 list-group-item list-group-item-action
                     flex-column align-items-center">
                                                        <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{cita.nombre}</h3>
                                    <small className="fecha-alta">
                                        {cita.fecha} - {cita.hora}
                                    </small>
                                </div>

                                <p className="mb-0">
                                    {cita.sintomas}
                                </p>
                                <div className="contacto py-3">
                                    <p>Dueño: {cita.propietario}</p>
                                    <p>Teléfono: {cita.telefono}</p>
                                </div> 

                                <div className="d-flex">
                                    <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                    onClick={() => eliminarCita(cita._id) } 
                                    >
                                        Eliminar &times;
                                    </button>
                                </div>
                     </div>
                 </div>
             </div>
        </div> 
    </Fragment>
    
   
    );
}
 
export default withRouter(Cita);