import { useContext, useEffect, useState } from 'react';
import {Context} from '../../store/appContext';
import { useParams } from 'react-router-dom';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const {productos, agregarAlCarrito, logeado, logeate} = useContext(Context)
    const [prodADetallar, setProdADetallar ] = useState({})
    

    //Si encuntra un producto con ese id lo devuelve
   useEffect(()=>{
        setProdADetallar((productos.find((produc) => produc.id == id)))
        if (!logeado){
            logeate()
        }
   },[])
 

    return (
        <>
        {prodADetallar != null ?
            <div className='d-flex justify-content-center contenedorDetalle flex-wrap'>
                <img src={require(`../../assets/img/photo-white-background/panta1.png`)} className='fotosPantalonDetalle shadow' alt="Imagen pantalon"/>
                <div className='textoDetalle'>
                    <h2>{prodADetallar.texto}</h2>
                    <h2 style={{color: "red"}}>${prodADetallar.precio}</h2>
                    <p className='mt-4'>Talles disponibles :</p>
                        {/* {prodADetallar.talles.map((talle, index)=>(
                            <div key={index}>
                                <button className='btn btn-outline-dark mb-3 mx-2'>{talle}</button>
                            </div>
                        ))} */}
                    {prodADetallar.enStock ? <p>Hay Stock</p> : <p>Por el momento no contamos con ese producto</p>}
                    <h6>Descripcion del producto:</h6>
                    <p>100% cotton</p>
                    <p>Ideal para el verano!!</p>
                    <p>Made in Argentina</p>
                    <button className='btn btn-warning' disabled={!logeado} onClick={()=>agregarAlCarrito(prodADetallar, prodADetallar.precio)}>Agregar al Carrito</button>
                 </div>
                
            </div> 
            
            :

            "Cargando"
        }
        </>
    );
}
 
export default Detalle;