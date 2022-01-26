import { useContext, useState } from "react";
import { Context } from '../../../store/appContext'
import CardsAdmin from "./cardsAdmin";


const PanelDeControl = () => {
    const { productos, setProductos } = useContext(Context);
    const [ agregarProd, setAgregarProd ] = useState(false)
    const [newPrecio, setNewPrecio ] = useState(0)
    const [cambPrecio, setCambPrecio] = useState(false)
    const [ mostrar, setMostrar ] = useState(false)

    {/*{id: "1", img: "panta1.png", alt: "Jogger azul", categoria: "Jogger", texto: "Jogger azul", enStock: true, precio: 2500, costo: 1900, promocion: true, talles:["S", "L", "M"], verfoto: false} */}
    //Obtengo todos los datos del producto que voy a agregar
    const [ newProducto, setNewProducto ] = useState({})
    const [ aidi, setAidi ] = useState('')
    const [ imagen, setImagen ] = useState('')
    const [ categoria, setCategoria] = useState('')
    const [texto, setTexto] = useState('')
    const [enStock, setEnStock] = useState(false)
    const [precio, setPrecio] = useState('')
    const [costo, setCosto] = useState('')
    const [promocion, setPromocion] = useState(false)
    const [talles, setTalles] = useState([])
    const [verFoto, setVerFoto] = useState(false)

    const agregarProducto = (aidi, imagen, categoria, texto, enStock, precio, costo, promocion, talles, verFoto) => {
        setNewProducto({id: aidi, img: imagen, categoria: categoria, texto: texto, enStock: enStock, precio: precio, costo: costo, promocion: promocion, talles: talles, verFoto: verFoto})
        if (enStock === "true" ) {
            setEnStock(true)
        } if (promocion === "true") {
            setPromocion(true)
        } if (verFoto === "true") {
            setVerFoto(true)
        }
        setProductos([newProducto, ...productos]);
        setAgregarProd(true)
    }

    const seAgrego = () => {
        setAgregarProd(false)
    }

    const eliminar = (id) => {
        setProductos(productos.filter((produc) =>produc.id != id))
    }

    /*const verImagen = (id) => {
    }*/

    const verImagen = () => {
        setMostrar(true)
    }

    const quitarImagen = () => {
        setMostrar(false)
    }

    const cambiarPrecio = (e, producto) => {
        e.preventDefault()
        setCambPrecio(true)
        if (setNewPrecio > 0) {
            producto.precio = newPrecio;
        }
        console.log(producto.precio)
    }

    const terminarCambio =() => {
        setCambPrecio(false)
    }
    
    return (
        <>
            <div className="text-center p-2">
                <h1>PANEL DE CONTROL</h1>
            </div>
            <div className="m-4">
                {!agregarProd ?
                 <button className="btn btn-warning p-2" onClick={() => agregarProducto(aidi, imagen, categoria, texto, enStock, precio, costo, promocion, talles, verFoto)}>AGREGAR PRODUCTO</button>

                 :
                <>
                {/*Le pido al admin los datos del producto a agregar */}
                <div className='formRegis d-flex justify-content-center'>
                    <div className='row container shadow formMapa'>
                        <div className='col-6'>
                        <h4 className='mt-2'>REGISTRA UN NUEVO PRODUCTO</h4>
                        <div className="row g-3 my-5 ">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="ID" aria-label="ID" onChange={(e)=>setAidi(e.target.value)}style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Imagen" aria-label="Imagen" onChange={(e)=>setImagen(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Categoria" aria-label="Categoria" onChange={(e)=>setCategoria(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Texto" aria-label="Texto" onChange={(e)=>setTexto(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="En Stock (Inserte true o false)" aria-label="EnStock" onChange={(e)=>setEnStock(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Precio" aria-label="Precio" onChange={(e)=>setPrecio(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Costo" aria-label="Costo" onChange={(e)=>setCosto(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Promocion (Inserte true o false)" aria-label="Promocion" onChange={(e)=>setPromocion(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Talles" aria-label="Talles" onChange={(e)=>setTalles(e.target.value)} style={{width: "300px"}}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Ver foto (Inserte true o false)" aria-label="Foto" onChange={(e)=>setVerFoto(e.target.value)} style={{width: "300px"}}/>
                            </div>
                        </div>
                            <button className="btn btn-warning m-2" onClick={() => seAgrego()} style={{width: "300px"}}>Listo</button>
                        </div>
                    </div>
                </div>
                 </>


                
                
                
                }
            </div>
            {productos.length > 0 ?
                <div className='container'>
                    <h2 className='text-center mb-5'>PRODUCTOS</h2>
                    <div className='d-flex justify-content-center '>
                        <div className='row'>
                        {productos.map((producto)=>(
                                <CardsAdmin key={producto.id} {...producto}>
                                    {/*Muestra la imagen de la card */}
                                    <div>
                                        {!mostrar ?
                                            <div className="d-flex align-items-end">
                                                <button className="btn btn-primary"  onClick={() => verImagen(producto.id)}>VER IMAGEN</button>
                                            </div>
                                        :
                                        <div className="" style={{ display: producto.verfoto ? "block" : "none"}}>
                                            <img  src={require(`../../../assets/img/photo-white-background/${producto.img}`)} className='fotosPantalon shadow' alt="Imagen producto"/>
                                            <button className="btn btn-primary" onClick={() => quitarImagen()}>Ocultar</button>
                                        </div>
                                        }
                                    </div>
                                    {/*Cambia el precio de la card */}
                                    <div>
                                        <button className="btn btn-warning mt-2" onClick={() => cambiarPrecio(producto)}>CAMBIAR PRECIO</button>
                                        {cambPrecio ?
                                        <div>
                                            <div className="row m-3">
                                                <input type="number" className="form-control" placeholder="Nuevo precio" onChange={(e)=>setNewPrecio(e.target.value)}/>
                                            </div>
                                            <button className="btn btn-warning mt-2" onClick={() => terminarCambio()}>Listo</button>
                                        </div>
                                        :
                                        ''
                                        }
                                    </div>
                                    {/*Elimina ese producto de la lista */}
                                    <div>
                                        <button className="btn btn-danger mt-2" onClick={() => eliminar(producto.id)}>ELIMINAR</button>
                                    </div>

                                </CardsAdmin>
                            ))}
                        </div>
                    </div>
                </div>
            :
                ''
            }
        
        
        
        
        
        
        
        
        
        </>
     );
}
 
export default PanelDeControl;