import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useContext} from 'react';
import { Context } from '../../store/appContext'
import "./Login.css"


const Login = () => {
    const [ usuarios, bienvenido, errorLogin] = useContext(Context)
    const [ logCorreo, setLogCorreo ] = useState("")
    const [ logContrasenia, setLogContrasenia ] = useState("")
    //const login = parseInt(localStorage.getItem('usuario'))
    const [entro, setEntro] = useState([])
    let usuBuscado = {};


    const validarLogin = (contrasenia, email) => {
        usuBuscado = (usuarios.find(usu => usu.email == email && usu.pass == contrasenia))
        if (usuBuscado != null) {
            bienvenido(usuBuscado.name)
        } else {
            errorLogin(email)
        }
    }

        /*const guardarLogin = (e) =>{
        e.preventDefault()
        setLogin([{email: logCorreo, pass: logContrasenia}, ...login])}

        useEffect(()=>{
            localStorage.setItem('login', JSON.stringify(login))
        },[login])
        const validacionUser = () =>{
            setEntro(login.find(log=>logCorreo && logContrasenia === log.email && log.pass))
        }*/
    

    return ( 
        
        <div className='formRegis container-fluid bg-dark d-flex justify-content-center mt-4'>
            <div className='row container shadow formMapa'>
                <div className='col-6'>
                        <h4 className=' tituloLogin mt-5'>INICIA SESION</h4>
                        
                        <div className="mb-5">
                            <input type="email" className="form-control"  placeholder="correo electronico"onChange={(e)=>setLogCorreo(e.target.value)}/>
                            
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