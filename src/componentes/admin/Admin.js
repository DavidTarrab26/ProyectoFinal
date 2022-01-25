import './Admin.css'
import { useState } from 'react'

const Admin = () => {
    const [ usuario, setUsuario ] = useState("administrador")
    const [ contrasenia, setContrasenia] = useState("contrasenia")




    return ( 
        <h2>Admin</h2>
     );
}
 
export default Admin;