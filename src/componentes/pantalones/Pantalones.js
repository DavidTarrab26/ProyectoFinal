import { useContext, useEffect, useState } from 'react';
import {Context} from '../../store/appContext'
import './Pantalones.css'
import { Link } from 'react-router-dom'

const Pantalones = () => {
    const {productos} = useContext(Context)
    const [ pantalones, setPantalones ] = useState([]) 

    useEffect (() => {
        setPantalones(productos.filter(produc => produc.categoria === "Jogger"))
    },[productos])

    
    return ( 
        <div>
            {pantalones.length > 0 ?
                <div className='container'>
<<<<<<< HEAD
                    <h2 className='text-center mb-5'>PANTALONES</h2>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {pantalones.map((pantalon, index)=>(
                            <div className='my-3 mx-2 contenedorCardPantalon' key={index}>
                                <img src={require(`../../assets/img/photo-white-background/${pantalon.img}`)} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                                <div className='d-flex justify-content-between'>
                                    <div className='textoCards'>
                                        <h6 className='mt-2'>{pantalon.texto}</h6>
                                        <h6 className='precio'>${pantalon.precio}</h6>
                                    </div>
                                    <div className='mt-3'>
                                    <Link to={`/${pantalon.id}`}><button className='btn btn-dark btnCards'>Ver mas</button></Link>
                                    {/* <button onClick={()=>agregarAlCarrito(pantalon, pantalon.precio)}>Agragar Al Carrito</button> */}
=======
                    <h2 className='text-center mb-5 mt-3 txt'>PANTALONES</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='row'>
                            {pantalones.map((pantalon, index)=>(
                                <div className='col-md-3 my-3 borde-card 'key={index}>
                                    <div className=''>
                                        <img src={require(`../../assets/img/photo-white-background/${pantalon.img}`)} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                                        <div className='d-flex justify-content-between'>
                                            <div className='textoCards'>
                                                <h6 className='mt-2'>{pantalon.texto}</h6>
                                                <h6 className='precio'>${pantalon.precio}</h6>
                                            </div>
                                            <div className='mt-3'>
                                            <Link to={`/${pantalon.id}`}><button className='btn btn-dark btnCards p-2'>Ver mas</button></Link>
                                            <button onClick={()=>agregarAlCarrito(pantalon, pantalon.precio)}>Agragar Al Carrito</button>
                                            </div>
                                        </div>
>>>>>>> 922eb801fc9ea68f7fb18e0e1e6ac4d8b5ba660f
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            :
                ''
            }
        </div>
     );
}
 
export default Pantalones;