import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import "./Registrarse.css"

const Registrarse = () => {
    const [ nombre, setNombre ] = useState("")
    const [ apellido, setApellido ] = useState("")
    const [ correo, setCorreo ] = useState("")
    const [ contrasenia, setContrasenia ] = useState("")
    const [usuario, setUsuario] = useState([])
    console.log(usuario)

    const guardarUsuario = (e) =>{
        e.preventDefault()
        setUsuario([{name: nombre,surname: apellido, email: correo, pass: contrasenia}, ...usuario])
        
        
    }
    useEffect(()=>{
        localStorage.setItem('usuario', JSON.stringify(usuario))
    },[usuario])
    

    return ( 
    <div className='formRegis d-flex justify-content-center mt-4'>
        <div className='row container shadow formMapa'>
                <div className='col-6'>
                         <h4 className='mt-2'>REGISTRATE PARA COMPRAR EN NUESTRA APP</h4>
                            <div className="row g-3 my-5">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"onChange={(e)=>setNombre(e.target.value)}/>
                                </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" onChange={(e)=>setApellido(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-5">
                            <input type="email" className="form-control"  placeholder="correo electronico" onChange={(e)=>setCorreo(e.target.value)}/>
                            
                        </div>
                        <div className="row mb-3">
                            <input type="password" className="form-control" placeholder="Contraseña" onChange={(e)=>setContrasenia(e.target.value)}/>
                        </div>
                        <div>
                            <button className="btn botonRegis  mb-4" onClick={(event)=>guardarUsuario(event)}>Registrarse</button>
                        </div>
                </div>
            </div>
    </div>
    );
}
                            
                        
                            
                            
                        
 
export default Registrarse;