import './Admin.css'
import { useState } from 'react'

const Admin = () => {
    const [ usuario, setUsuario ] = useState("admin")
    const [ contrasenia, setContrasenia] = useState("admin123")
    const [inputUsuario, setInputUsuario] = useState('')
    const [inputContrasenia, setInputContrasenia] = useState('')
    const [cuentaIngresada, setCuentaIngresada] = useState('incompleto')

    const validacionAdmin = (e) =>{
        e.preventDefault()
        if(inputUsuario === usuario && inputContrasenia === contrasenia){
            setCuentaIngresada('true')
        }else{
            setCuentaIngresada('false')
        }
    }

    return ( 
        <>
        {cuentaIngresada === 'incompleto' ?
            <div className='altura d-flex justify-content-center'>
            <form className='formAdmin mt-5'>
                <div className="mb-3 mx-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>setInputUsuario(e.target.value)} />
                </div>
                <div className="mb-3 mx-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setInputContrasenia(e.target.value)} />
                </div>
                <button className="btn btn-primary mx-3" onClick={(event)=>validacionAdmin(event)}>Submit</button>
            </form>
            </div>
        :
        cuentaIngresada === 'true' ?
        <p>panel de control</p>
        :
        <div className='altura d-flex justify-content-center'>
            <form className='formAdmin mt-5'>
                <div className="mb-3 mx-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>setInputUsuario(e.target.value)} />
                </div>
                <div className="mb-3 mx-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setInputContrasenia(e.target.value)} />
                </div>
                <button className="btn btn-primary mx-3" onClick={(event)=>validacionAdmin(event)}>Submit</button>
                <p>Datos incorrectos</p>
            </form>
            </div>
        }
    </>
     );
}
 
export default Admin;