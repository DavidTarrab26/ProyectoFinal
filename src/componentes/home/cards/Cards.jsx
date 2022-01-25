import { useContext } from 'react';
import {Context} from '../../../store/appContext'
import './Cards.css'
import foto1 from '../../../assets/img/photo-white-background/IMG-20210510-WA0047.png'

const Cards = () => {
    const {pantalones} = useContext(Context)
    return ( 
        <div>
            {pantalones.length > 0 ?
                <div className='container'>
                    <h2 className='text-center mb-5'>OFERTAS!!</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='row'>
                            {pantalones.map((pantalon, index)=>(
                                <div className='col-md-3 my-3' key={index}>
                                    <div className=''>
                                        <img src={pantalon.img} className='fotosPantalon shadow' alt="Imagen pantalon"/>
                                        <div className='d-flex justify-content-between'>
                                            <div className='textoCards'>
                                                <h6 className='mt-2'>{pantalon.texto}</h6>
                                                <h6 className='precio'>${pantalon.precio}</h6>
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
 
export default Cards;