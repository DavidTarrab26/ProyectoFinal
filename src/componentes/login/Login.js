import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from 'react';
import "./Login.css"


const Login = () => {

    const [ logCorreo, setLogCorreo ] = useState("")
    const [ logContrasenia, setLogContrasenia ] = useState("")
    const login = parseInt(localStorage.getItem('usuario'))
    const [entro, setEntro] = useState([])

    /* const guardarLogin = (e) =>{
        e.preventDefault()
        setLogin([{email: logCorreo, pass: logContrasenia}, ...login])}

        useEffect(()=>{
            localStorage.setItem('login', JSON.stringify(login))
        },[login]) */
        const validacionUser = () =>{
            setEntro(login.find(log=>logCorreo && logContrasenia === log.email && log.pass))
        }
    

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
                            <button className="btn botonRegis mb-4"/*  onClick={(event)=>guardarLogin(event)} */> Entrar</button>
                        </div>
                </div>
            </div>
        </div>
      
     );
}

export default Login;