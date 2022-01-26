import { useContext, useState } from 'react';
import { Context } from '../../store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {carrito, setCarrito, precios, setPrecios} = useContext(Context)

    const eliminar = (id, preciomenos) =>{
        setCarrito(carrito.filter(carro=> carro.id != id))
        setPrecios(precios-preciomenos)


    return ( 
        <>
        {carrito.length > 0 ?
        <div>
            <div className='d-flex justify-content-center flex-wrap'>
                {carrito.map((carro, index)=>(
                    <div className='my-3 mx-2 contentCardCarrito' key={index}>
                        <div>
                            <img src={require(`../../assets/img/photo-white-background/${carro.img}`)} className='fotosCarrito shadow' alt="Imagen pantalon"/>
                            <div className='d-flex justify-content-between'>
                                <div className='textoCards'>
                                    <h6 className='mt-2'>{carro.texto}</h6>
                                    <h6 className='precio'>${carro.precio}</h6>
                                </div>
                                <div className='mt-3'>
                                <button className='btn btn-danger' onClick={()=>eliminar(carro.id, carro.precio)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h6 className='text-center mt-4 total'>TOTAL: ${precios}</h6>
            <div className='d-flex justify-content-center mt-2'>
                <button className='btn btn-warning'>Finalizar Compra</button>
            </div>
        </div>
        :
        <h2 className='text-center p-5'>AGREGUE ELEMENTOS AL CARRITO</h2>
        
        }
        </>
     );
}
 
export default Carrito;