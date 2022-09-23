import { useState } from "react"

export const CreatePage = () =>{
    const [values,setValues] = useState({
        name: 'Juan',
        app: 'Rainer'
    })    
    
    const handlechange =({target})=>{
    //setValues({name: target.value})
    setValues({...values,[target.name]:target.value})

            
    }
    return (
        <>
            <div className="cardy-body">
                {values.name}
                
                <input 
                    value={values.name}
                    onChange ={handlechange}
                    name='name'
                />
                <br />
                <br />
                <input 
                    values={values.app} 
                    onChange ={handlechange}
                    name='app'
                
                />
            </div>
        </>
    )
}