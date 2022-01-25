import { useContext } from 'react';
import { Context } from '../../store/appContext';
import bermuda1 from '../../assets/img/shorts-white-background/IMG-20211008-WA0002.png'
import './Bermudas.css'

const Bermudas = () => {
    const {bermudas} = useContext(Context) 
    return ( 
        <div>
            {bermudas.length > 0 ?
                <div className='container'>
                    <h2 className='text-center mb-5'>BERMUDAS</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='row'>
                            {bermudas.map((bermuda, index)=>(
                                <div className='col-md-3 my-3' key={index}>
                                    <div className='contenedorFoto'>
                                        <img src={bermuda1} className='fotosbermuda shadow'/>
                                        <div className='d-flex justify-content-between'>
                                            <div className='textoCards'>
                                                <h6 className='mt-2'>{bermuda.texto}</h6>
                                                <h6 className='precio'>${bermuda.precio}</h6>
                                            </div>
                                            <div className='mt-3'>
                                                <button className='btn btn-dark btnCards'>Ver mas</button>
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