import { useContext, useEffect, useState } from 'react';
import {Context} from '../../store/appContext';
import { useParams } from 'react-router-dom';
import './Detalle.css'

const Detalle = () => {
    const { id } = useParams();
    const {productos} = useContext(Context)
    const [ prodADetallar, setProdADetallar] = useState([]);

    //Si encuntra un producto con ese id lo devuelve
   useEffect(()=>{
        setProdADetallar(productos.find((produc) => produc.id === id))
   },[])

    return (
        <>
        <div className='d-flex justify-content-center contenedorDetalle'>
            <img src={require(`../../assets/img/photo-white-background/${prodADetallar.img}`)} className='fotosPantalonDetalle shadow' alt="Imagen pantalon"/>
            <div className='textoDetalle'>
                <h2>{prodADetallar.texto}</h2>
                <p className='mt-4'>Talles disponibles :</p>
                {prodADetallar.talles.map((talle)=>(
                <button className='btn btn-outline-dark mb-3 mx-2'>{talle}</button>
            ))}
                <p>Descripcion del producto:</p>
                <p>100% cotton</p>
            </div>
        </div>
        </>
    );
}
 
export default Detalle;