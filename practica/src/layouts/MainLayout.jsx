export const MainLayout = (prop) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <h5 className="card-header">Practica</h5>
                        <div className="card-body">
                            { prop.router }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}