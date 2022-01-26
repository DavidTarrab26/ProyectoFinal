



const CardsAdmin = ({id, precio, enStock, texto, promocion, img, children}) => {
    return ( 
        <div className='col-md-3 m-3 border' style={{height: '20%'}}>
            <div className=''>
                <div className='contenedorFoto'>
                    <div className='d-flex'>
                        <div className='textoCards'>
                            <img  src={require(`../../../../assets/img/photo-white-background/${img}`)} className='fotosPantalon shadow' alt="Imagen producto"/>
                            <h6 className='mt-2 text-center'>{texto}</h6>
                            <h6 className='mt-2'> ID: {id}</h6>
                            <h6 className='mt-2'> EN STOCK: {enStock} </h6>
                            <div className="d-flex justify-content-between">
                                <h6 className=''>PRECIO: ${precio}</h6>
                            </div>
                            <h6 className='mt-2'> EN PROMOCION: {promocion} </h6>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
     );
}
 
export default CardsAdmin;