import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ErrorCustom } from "../components/Erorr.jsx";
import { InputCustom } from "../components/InputCustom.jsx";
export const CreatePage = () =>{
    //TODO: UseState es un Hook y es un estado de un componente
    const [values, setValues] = useState({
        names: {
            value : '',
            error : false,
            errors : ['nombre invalido'],
            name : 'names',
            label: 'Nombre',
        },
        // app : {
        //     value : 'Sebastian',
        //     error: false,
        //     errors: ['apellido paterno incorrecto'],
        //     name : 'app',
        //     label : 'Apellido'
        // },
        // apm : {
        //     value : 'Orozco',
        //     error: false,
        //     errors: ['apellido materno incorrecto'],
        //     name : 'apm',
        //     label : 'Apellido_Materno'
        // },
    })
    const handleChange = ({target : {name, value}}) =>{
        setValues({...values, [name]:{...values[name], value }});
        value.match(/[a-zA-z]/) ? setValues({...values, [name]: {...values[name], value, error: false } }) : setValues({...values, [name]: {...values[name], value, error: true } });

        
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:3000/create", {
                name : values.names.value,
            });
            console.log(response);
            
        } catch (error) {
            console.log(e);
        }
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="card mt-2">
                        <div className="card-header">
                            <div><h2 className="text-center">Inputs Inteligentes</h2></div>
                        </div>
                        <div className="card-body">
                            <InputCustom controller={values} handle={handleChange}/>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <NavLink to={`/`} className = "btn btn-outline-success w-25 me-3">Regresar</NavLink>
                        <button  className="btn btn-outline-secondary w-50"  type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        </>
    );
}