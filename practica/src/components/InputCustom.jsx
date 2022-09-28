export const InputCustom = ({ controller, handle }) => {
    return Object.keys(controller).map((item, index) => (
        <div className="form-control mb-3" key={ index }>
            <input type="text" className={controller[item].error ? 'form-control is-invalid' : 
            'form-control is-valid'} id={ controller[item].name }
            name={ controller[item].name } value={ controller[item].value }  
            placeholder={ controller[item].label } onChange={ handle } />
            <label htmlFor={ controller[item].name }
            className="form-label">{ controller[item].label }</label>
        </div>
    ))
        
    
}