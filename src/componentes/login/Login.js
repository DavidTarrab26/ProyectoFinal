import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"


const Login = () => {
    return ( 
        
        <div className='formRegis bg-dark d-flex justify-content-center'>
        <div className='row container shadow formMapa'>
                <div className='col-6'>
                         <h4 className=' tituloLogin mt-5'>INICIA SESION</h4>
                           
                        <div className="form-floating mb-5">
                            <input type="email" className="form-control"  placeholder="name@example.com"/>
                            <label>Correo electronico</label>
                        </div>
                        
                        
                        <div class="row mb-3">
                            <input type="password" class="form-control" placeholder="Contraseña"/>
                        </div>
                        <div>
                            <button className="btn botonRegis mb-4" type="submit">ENVIAR</button>
                        </div>
                </div>
            </div>
    </div>
  
     );
}
 
export default Login;