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
            <div className="row">
                {ofertas.map((oferta, index) => (
                <div className='col-md-3 my-3' key={index}>
                   <div className=''>
                       <img src={require(`../../../assets/img/photo-white-background/${oferta.img}`)} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                       <div className='d-flex justify-content-between'>
                           <div className='textoCards'>
                               <h6 className='mt-2'>{oferta.texto}</h6>
                               <h6 className='precio'>${oferta.precio}</h6>
                           </div>
                           <div className='mt-3'>
                               <button className='btn btn-dark btnCards'>Ver mas</button>
                           </div>
                       </div>
                   </div>
               </div>
                ))}
            </div>

        </div>
     );
}
 
export default Promocion;