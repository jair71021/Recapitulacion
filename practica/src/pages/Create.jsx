import { useState } from "react"
import { InputCustom } from "../components/InputCustom"
export const Create = () => {

    const [values, setValues] = useState({
        names: {
            value: 'Jair',
            error: false,
            errors: ['Nombre(s) invalido'],
            name: 'names',
            label: 'Nombre(s)'
        },
        first_surname: {
            value: 'Suarez',
            error: false,
            errors: ['Apellido paterno invalido'],
            name: 'first_surname',
            label: 'Apellido Paterno'
        }
        ,
        second_surname: {
            value: 'Romero',
            error: false,
            errors: ['Apellido materno invalido'],
            name: 'second_surname',
            label: 'Apellido Materno'
        }
    })

    const handle_input = ({ target: { name, value } }) => {
        setValues({...values, [name]: {...values[name], value } })
        value.match(/[A-Za-z]/) ? setValues({...values, [name]: {...values[name], value, error: false } }) : setValues({...values, [name]: {...values[name], value, error: true } })
    }

    return (<>
        <div className="alert alert-warning" role="alert">
            { values.names.value + ' ' + values.first_surname.value + ' ' + values.second_surname.value }
        </div>

        <InputCustom controller={ values } handle={ handle_input } />

        {/* <div className="form-floating mb-3">
            <input type="text" className="form-control" id="names" name="names" value={ values.names }  placeholder="Nombre(s)" onChange={ handle_input } />
            <label htmlFor="names" className="form-label">Nombre(s)</label>
        </div>
        <div className="form-floating">
            <input type="text" className="form-control" id="surname" name="surname" value={ values.surname } placeholder="Apellido" onChange={ handle_input } />
            <label htmlFor="surname" className="form-label">Apellido</label>
        </div> */}
    </>)
}