import './Footer.css'
import ig from '../../assets/img/logos-footer/ig.png'
import fb from '../../assets/img/logos-footer/fb.png'
import wpp from '../../assets/img/logos-footer/wpp.png'

const Footer = () => {
    return ( 
        <div className='conteiner-fluid'>
            <div className='d-flex justify-content-between'>
                <h5 className='seguinos mt-2'>Seguinos en nuestras redes!!</h5>
                <div>
                    <img src={ig} alt="logo instagram" className='logo' />
                    <img src={fb} alt="logo de facebook" className='logo' />
                    <img src={wpp} alt="logo de whatsapp" className='logo' />
                </div>
            </div>
            <div className='row container'>
                <div className='col-md-6 d-flex'>
                    <div className="row g-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nombre" aria-label="nombre"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"/>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="usuario@gmail.com"/>
                            <label>Direccion Email</label>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            <label>Comentario</label>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1684274519075!2d-58.47720938476977!3d-34.62518378045399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc992bb24894f%3A0xe3586e85d74603a8!2sHelguera%20571%2C%20C1406%20API%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1643070601675!5m2!1ses!2sar" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;