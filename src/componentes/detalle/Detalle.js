import { useContext, useEffect, useState } from 'react';
import {Context} from '../../store/appContext';
import { useParams } from 'react-router-dom';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const {productos, agregarAlCarrito} = useContext(Context)
    const [ texto, setTexto ] = useState('')
    const [imagen, setImagen ] = useState()
    const [tamanio, setTamanio] = useState()
    const [ tamaños, setTamaños] = useState([])
    let prodADetallar = {};
    

    //Si encuntra un producto con ese id lo devuelve
   useEffect(()=>{
        prodADetallar = (productos.find((produc) => produc.id == id))
        setTexto(prodADetallar.texto)
        setTamanio(prodADetallar.talles)
        setTamaños([...tamaños, tamanio])
        /*setImagen(prodADetallar.img)*/
        console.log(prodADetallar.img)
        console.log(prodADetallar.talles)
   },[])

    return (
        <>
            <div className='d-flex justify-content-center contenedorDetalle'>
                {/* <img src={require(`../../assets/img/photo-white-background/${prodADetallar.img}`)} className='fotosPantalonDetalle shadow' alt="Imagen pantalon"/> */}
                <div className='textoDetalle'>
                    <h2>{texto}</h2>
                    <p className='mt-4'>Talles disponibles :</p>
                        {tamaños.map((talle, index)=>(
                            <div key={index}>
                                <button className='btn btn-outline-dark mb-3 mx-2'>{talle}</button>
                            </div>
                        ))
                        }
                    <p>Descripcion del producto:</p>
                    <p>100% cotton</p>
                    <button className='btn btn-warning' onClick={()=>agregarAlCarrito(prodADetallar, prodADetallar.precio)}>Agregar al Carrito</button>
                </div>
                
            </div>
        </>
    );
}
 
export default Detalle;