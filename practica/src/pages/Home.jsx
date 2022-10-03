import axios from "axios"
import { useEffect , useState} from "react"

export const Home = () => {
    const [value,setValues] =useState ([])
        useEffect(()=>{
            (async ()=>{
                try {
                    const {data}= await axios.get('https://jsonplaceholder.typicode.com/users')
                    setValues(data)
                   // console.log(data);
                
                } catch (error) {
                    console.eror(error);
                }     
            })()
        },[]
    )
    console.log(value);
    return (<>


        <div className="table-reponsive">
            <table className="table table-striped">
                <thead >
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        
                    </tr>
                                
                </thead>
                <tbody>
                    {value.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            
                        </tr>
                    ))}
                </tbody>
    
            </table>
        </div>
    
    
    </>)
}