export const ErrorCustom = ({error}) =>{
    return (
        <>
            {
                (error.error) ? error.errors.map((item, index) => (
                    <div key={index} className = "text-danger">{item}</div>
                )): <></>
            }
        
        </>
    )
    
}