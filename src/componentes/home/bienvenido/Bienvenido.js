import './Bienvenido.css'

const Bienvenido = () => {
    return ( 
        <div className="container-fluid" style={{height: "500px"}} >
            <div className=" borde" style={{marginTop: "4%"}}>
                <div className="d-flex text-center justify-content-center pt-2">
                    <h1 className="bienvenido">THE TROUSER</h1>
                </div>
                <div className="d-flex text-center justify-content-center">
                    <h1 className="bienvenido">STORE</h1>
                </div>
                <div className="d-flex text-center justify-content-center p-4">
                    <h5 className="slogan">JUNTOS DESDE 1998</h5>
                </div>
            </div>

        </div>
     );
}
 
export default Bienvenido;