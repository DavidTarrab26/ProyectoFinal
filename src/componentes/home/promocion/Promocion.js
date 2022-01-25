import { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";



const Promocion = () => {
    const { productos } = useContext(Context)
    const [ ofertas, setOfertas ] = useState([])

    useEffect (() => {
        setOfertas(productos.filter((produc) => produc.promocion))
    },[])
    console.log(ofertas)

    

    return ( 
        <div className="container-fluid">
            <div className="d-flex text-center justify-content-center p-4">
                <h2> OFERTAS </h2>
            </div>
            <div>
                {ofertas.map((oferta) => (
                    <h1>{oferta.titulo}</h1>
                ))}
            </div>

        </div>
     );
}
 
export default Promocion;