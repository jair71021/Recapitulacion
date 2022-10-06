import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { InputCustom } from "../components/InputCustom.jsx";
export const EditPage = () =>{

    const {waifu} = useParams();
    console.log(waifu);

    //TODO: UseState es un Hook y es un estado de un componente
    const [values, setValues] = useState({
        names: {
            value : 'Fernando',
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
    });
    

    useEffect(()=>{
        const getWifu = async () =>{
            try {
                const {
                    data: {data},
                } = await axios.get(`http://127.0.0.1:3000/show/${waifu}`);
                setValues({...values, names: {...values['names'], value: data.name}});
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        getWifu();
    },[]);
    const handleChange = ({target : {name, value}}) =>{
        setValues({...values, [name]:{...values[name], value }});
        value.match(/[a-zA-z]/) ? setValues({...values, [name]: {...values[name], value, error: false } }) : setValues({...values, [name]: {...values[name], value, error: true } });

        
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:3000/update/${waifu}`,{
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
                            <div><h2 className="text-center">Editar</h2></div>
                        </div>
                        <div className="card-body">
                            <InputCustom controller={values} handle={handleChange}/>
                        </div>
                        <div className="card-footer">
                            <div className="text-center mt-3">
                                <NavLink to={`/`} className="btn btn-outline-success w-25 me-2">Cancelar</NavLink>
                                <button   className="btn btn-outline-secondory w-50"  type="submit">Guardar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}