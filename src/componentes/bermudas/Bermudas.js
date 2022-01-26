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
                    <h2 className='text-center mb-5'>BERMUDAS</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='row'>
                            {bermudas.map((bermuda, index)=>(
                                <div className='col-md-3 my-3' key={index}>
                                    <div className=''>
                                        <img src={require(`../../assets/img/shorts-white-background/${bermuda.img}`)} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                                        <div className='contenedorFoto'>
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            :
                ''
            }
        </div>
     );
}
 
export default Bermudas;