import { Error } from "./Error"

export const InputCustom = ({ controller, handle }) => {
    return Object.keys(controller).map((item, index) => (
        
            <div className="form-floating mb-3" key={ index }>
                <input type="text" className={controller[item].error ? 'form-control is-invalid' : 'form-control is-valid'}  
                    id={ controller[item].name } aria-describedby="error" name={ controller[item].name } value={ controller[item].value }  
                    placeholder={ controller[item].label } onChange={ handle } />
                <label htmlFor={ controller[item].name } className="form-label">{ controller[item].label }</label>
            
                {
                    controller[item].error ? <Error  message={controller[item].errors[0]} feedback={controller[item].name}/> :false
                }
            </div>
    ))
        
    
}