import { useState } from "react"

export const CreatePage = () =>{
    const [values,setValues] = useState({
        name: 'Juan' ,
        app: 'Rainer'
    })    
    
    const handleChange =({target})=>{
    //setValues({name: target.value})
    setValues({...values, name:target.value, app: target.value })

            
    }
    return (
        <>
          <div className="card-body">
            { values.name }
            <br />
            { values.app}
            <input type="text" className="form-control" 
                value={ values.name }
                onChange={ handleChange } />
            <br />
            <input type="text" className="form-control"
                value={ values.app } 
                onChange={ handleChange } />
        </div>
        
        </>
    )
}