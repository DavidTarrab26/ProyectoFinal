import Bienvenido from "../home/bienvenido";
import Promocion from "../home/promocion";
import ig from '../../assets/img/logos-footer/ig.png'
import fb from '../../assets/img/logos-footer/fb.png'
import wpp from '../../assets/img/logos-footer/wpp.png'



const Home = () => {
    return ( 
        <>
            <Bienvenido />
            <Promocion />
            {/* FORM */}
            <div className='d-flex justify-content-center'>
                <div className='row container shadow formMapa'>
                    <div className='col-6'>
                    <h4 className='mt-2'>Contactenos</h4>
                        <div className="row g-3 my-5">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="apellido" aria-label="Last name"/>
                            </div>
                        </div>
                        <div className="form-floating mb-5">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label>e-mail</label>
                        </div>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            <label>Comentarios</label>
                        </div>
                        <div>
                            <button className="btn btn-warning mb-4" type="submit">Enviar</button>
                        </div>
                    </div>
                    
                    {/* MAPA */}
                    <div className='col-md-6'>
                        <h4>Donde estamos?</h4>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.965824766981!2d-58.44071463841338!3d-34.605025684016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6d41caa929%3A0x13be7fe92c2a2016!2sAv.%20Angel%20Gallardo%20551%2C%20C1414%20CABA!5e0!3m2!1ses!2sar!4v1642138711228!5m2!1ses!2sar" width="600" height="450" style={{border: "0"}} loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
             {/* sguinos en nuestras redes con sus logos */}
             <div className='d-flex justify-content-center container mt-5'>
                <h5 className='seguinos mt-2'>Follow us</h5>
                <div>
                    <img src={ig} alt="logo instagram" className='logo' />
                    <img src={fb} alt="logo de facebook" className='logo' />
                    <img src={wpp} alt="logo de whatsapp" className='logo' />
                </div>
            </div>
        </>
     );
}
 
export default Home;