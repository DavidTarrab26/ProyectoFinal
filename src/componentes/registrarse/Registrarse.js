import 'bootstrap/dist/css/bootstrap.min.css';
import "./Registrarse.css"

const Registrarse = () => {
    return ( 
    <div className='formRegis d-flex justify-content-center'>
        <div className='row container shadow formMapa'>
                <div className='col-6'>
                         <h4 className='mt-2'>REGISTRATE PARA COMPRAR EN NUESTRA APP</h4>
                            <div className="row g-3 my-5">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"/>
                                </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"/>
                            </div>
                        </div>
                        <div className="form-floating mb-5">
                            <input type="email" className="form-control"  placeholder="name@example.com"/>
                            <label>Correo electronico</label>
                        </div>
                        <div className="row mb-3">
                            <input type="password" className="form-control" placeholder="Contraseña"/>
                        </div>
                        <div>
                            <button className="btn botonRegis mb-4" type="submit">ENVIAR</button>
                        </div>
                </div>
            </div>
    </div>
    );
}
                            
                        
                            
                            
                        
 
export default Registrarse;