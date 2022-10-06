export const MainLayout = ({contenido}) =>{
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col col-sm-12">
                        {contenido}
                    </div>
                </div>
            </div>
        
        </>
    );
};