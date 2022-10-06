import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const HomePage = () =>{
    const [value, setValues] = useState([]);

    useEffect(
        () =>{
            (async () =>{
                try {
                    const {data:{
                        data
                    }} = await axios.get('http://localhost:3000/');
                    setValues(data);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            })() // Invocacion por si misma --> invocarse autoaticamente.
        },[]
    );
    const handleClick = async waifu =>{
        try {
            const response = await axios.delete(
                `http://127.0.0.1:3000/delete/${waifu}`
            );
            const fetchData = async () =>{
                const{
                    data : {data},
                } = await axios.get("http://127.0.0.1:3000");
                setValues(data);
            };
            fetchData();
            
        } catch (error) {
            console.log(error)
            
        }
    }
    
    return (
        <>
            <a href="http://localhost:5173/create" className="btn btn-outline-success">Agregar nueva Wifu</a>
            <div className="table-responsibe mt-3">
                <table className="table table-dark table-hover text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            value.map((item, index) =>(
                                <tr key={index}>
                                    <td>
                                        {item._id}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td><NavLink to={`/edit/${item._id}`} className="btn btn-warning">Editar</NavLink></td>
                                    <td><button onClick = {() => handleClick(item._id)} className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}