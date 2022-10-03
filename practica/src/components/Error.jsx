export const Error = ({message , feedback}) => {
    return (
        <div className="invalid-feedback" id={feedback}>
            
            {message}
        </div>
    )
}