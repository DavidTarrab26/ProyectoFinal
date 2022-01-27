import { useContext, useEffect, useState } from 'react';
import {Context} from '../../store/appContext';
import { useParams } from 'react-router-dom';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const {productos, agregarAlCarrito} = useContext(Context)
<<<<<<< HEAD
    const [ texto, setTexto ] = useState('')
    const [imagen, setImagen ] = useState()
    const [tamanio, setTamanio] = useState()
    const [ tamaños, setTamaños] = useState([])
    let prodADetallar = {hola: 'hola'};
=======
    const [prodADetallar, setProdADetallar ] = useState({})
    const [ tamanios, setTamanios] = useState([])
>>>>>>> cbdd02ac02c486b31ada6328e577d9d1a646f6d8
    

    //Si encuntra un producto con ese id lo devuelve
   useEffect(()=>{
        setProdADetallar((productos.find((produc) => produc.id == id)))
        console.log(prodADetallar.talles)
   },[])
 

    return (
        <>
        {prodADetallar != null ?
            <div className='d-flex justify-content-center contenedorDetalle'>
                {/*<img src={require(`../../assets/img/photo-white-background/${prodADetallar.img}`)} className='fotosPantalonDetalle shadow' alt="Imagen pantalon"/>*/}
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
                    <button className='btn btn-warning' onClick={()=>agregarAlCarrito(prodADetallar, prodADetallar.precio)}>Agregar al Carrito</button>
                </div>
                
            </div> 
            
            :

            "Cargando"
        }
        </>
    );
}
 
export default Detalle;