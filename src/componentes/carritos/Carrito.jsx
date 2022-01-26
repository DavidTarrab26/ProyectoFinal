import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {carrito, precios} = useContext(Context)

    return ( 
        <>
        {carrito.length > 0 ?
        <div>
            <div className='d-flex justify-content-center'>
                <div className='row'>
                    {carrito.map((carro, index)=>(
                        <div className='col-md-4 my-3' key={index}>
                            <div>
                                <img src={require(`../../assets/img/photo-white-background/${carro.img}`)} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                                <div className='d-flex justify-content-between'>
                                    <div className='textoCards'>
                                        <h6 className='mt-2'>{carro.texto}</h6>
                                        <h6 className='precio'>${carro.precio}</h6>
                                    </div>
                                    <div className='mt-3'>
                                    <button className='btn btn-danger'>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h6 className='text-center mt-4'>TOTAL: ${precios}</h6>
            <div className='d-flex justify-content-center mt-2'>
                <button className='btn btn-success'>Finalizar Compra</button>
            </div>
        </div>
        :
        <h2>Debe agregar elementos a su carrito</h2>
        
        }
        </>
     );
}
 
export default Carrito;