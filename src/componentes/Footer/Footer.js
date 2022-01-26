import './Footer.css'
import ig from '../../assets/img/logos-footer/ig.png'
import fb from '../../assets/img/logos-footer/fb.png'
import wpp from '../../assets/img/logos-footer/wpp.png'

const Footer = () => {
    return ( 
        <>
            {/* sguinos en nuestras redes con sus logos */}
            <div className='d-flex justify-content-between container'>
                <h5 className='seguinos mt-2'>Seguinos en nuestras redes!!</h5>
                <div>
                    <img src={ig} alt="logo instagram" className='logo' />
                    <img src={fb} alt="logo de facebook" className='logo' />
                    <img src={wpp} alt="logo de whatsapp" className='logo' />
                </div>
            </div>
            
            {/* Footer */}
            <div className='d-flex justify-content-center mt-5'>
                <p>Derechos reservados ©</p>
                <p className='mx-2'>hecho por Moshi, Eitan y David</p>
            </div>
        </>
     );
}
 
export default Footer;