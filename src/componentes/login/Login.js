import { useState, useContext} from 'react';
import { Context } from '../../store/appContext'
import "./Login.css"


const Login = () => {
    const { usuarios, bienvenido, errorLogin, setLogeado } = useContext(Context)
    const [ logCorreo, setLogCorreo ] = useState("")
    const [ logContrasenia, setLogContrasenia ] = useState("")
    let usuBuscado = {};


    const validarLogin = (email, contrasenia) => {
        usuBuscado = (usuarios.find(usu => usu.email == email && usu.pass == contrasenia))
        if (usuBuscado != null) {
            bienvenido(usuBuscado.name)
            setLogeado(true)
        } else {
            errorLogin(email)
        }
    }

    return ( 
        
        <div className='formRegis container-fluid bg-dark d-flex justify-content-center mt-4'>
            <div className='row container shadow formMapa'>
                <div className='col-6'>
                        <h4 className=' tituloLogin mt-5'>INICIA SESION</h4>
                        
                        <div className="mb-5">
                            <input type="text" className="form-control"  placeholder="correo electronico" onChange={(e)=>setLogCorreo(e.target.value)}/>
                        </div>
                        <div class="row mb-3">
                            <input type="password" class="form-control" placeholder="Contraseña" onChange={(e)=>setLogContrasenia(e.target.value)}/>
                        </div>
                        <div>
                            <button className="btn botonRegis mb-4" onClick={()=>validarLogin(logCorreo, logContrasenia)}> Entrar</button>
                        </div>
                </div>
            </div>
        </div>
      
     );
}

export default Login;