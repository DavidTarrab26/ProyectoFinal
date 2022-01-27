import { useContext, useEffect, useState } from 'react';
import {Context} from '../../store/appContext';
import { useParams } from 'react-router-dom';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const {productos, agregarAlCarrito} = useContext(Context)
    const [ prodADetallar, setProdADetallar] = useState({});
    const {talles} = prodADetallar
    console.log(talles)
    

    //Si encuntra un producto con ese id lo devuelve
   useEffect(()=>{
        setProdADetallar(productos.find((produc) => produc.id == id))
        console.log(prodADetallar)
   },[])

    return (
        <>
            <div className='d-flex justify-content-center contenedorDetalle'>
                <img src={require(`../../assets/img/photo-white-background/panta1.png`)} className='fotosPantalonDetalle shadow' alt="Imagen pantalon"/>
                <div className='textoDetalle'>
                    <h2>{prodADetallar.texto}</h2>
                    <p className='mt-4'>Talles disponibles :</p>
                        {/* {talles = undefined ?
                        talles.map((talle)=>(
                            <button className='btn btn-outline-dark mb-3 mx-2'>{talle}</button>
                        ))
                        :
                        <p>cargando talles</p>
                        }  */}
                    <p>Descripcion del producto:</p>
                    <p>100% cotton</p>
                    <button className='btn btn-success' onClick={()=>agregarAlCarrito(prodADetallar, prodADetallar.precio)}>Agragar Al Carrito</button>
                </div>
                
            </div>
        </>
    );
}
 
export default Detalle;