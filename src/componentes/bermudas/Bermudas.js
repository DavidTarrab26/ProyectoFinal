import { useContext, useState, useEffect } from 'react';
import { Context } from '../../store/appContext';
import './Bermudas.css'
import { Link } from 'react-router-dom'

const Bermudas = () => {
    const {productos} = useContext(Context)
    const [ bermudas, setBermudas ] = useState([]) 

    useEffect (() => {
        setBermudas(productos.filter((produc) => produc.categoria === "Bermuda"))
    },[productos])

    
    return ( 
        <div>
            {bermudas.length > 0 ?
                <div className='container'>
                    <h2 className='text-center mb-5 mt-3'>BERMUDAS</h2>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {bermudas.map((bermuda, index)=>(
                            <div className='my-3 mx-2 contenedorCardBermuda' key={index}>
                            <img src={require(`../../assets/img/photo-white-background/${bermuda.img}`)} className='fotosBermuda shadow' alt="Imagen pantalon"/>
                            <div className='d-flex justify-content-between'>
                                <div className='textoCards'>
                                    <h6 className='mt-2'>{bermuda.texto}</h6>
                                    <h6 className='precio'>${bermuda.precio}</h6>
                                </div>
                                <div className='mt-3'>
                                <Link to={`/${bermuda.id}`}><button className='btn btn-dark btnCards'>Ver mas</button></Link>
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
 
export default Bermudas;