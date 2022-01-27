import { createContext, useState, useEffect} from "react";
import toast, { Toaster } from 'react-hot-toast';


export const Context = createContext(null)



const AppProvider = ({children}) => {
    const [productos, setProductos] = useState([
        {id: 1, img: "panta2.png", alt: "Jogger azul", categoria: "Jogger", texto: "Jogger azul", enStock: true, precio: 2500, promocion: true, talles:["S", "L", "M"], verfoto: false},
            {id: 2, img: "panta8.png", categoria: "Jogger", texto: "Jogger estilo militar gris", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 3, img: "panta1.png", categoria: "Jogger", texto: "Jogger beige con bolsillo", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 4, img: "panta14.png", categoria: "Jogger", texto: "Jogger gris plata", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 5, img: "panta3.png", categoria: "Jogger", texto: "Jogger gris y negro", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 6, img: "panta13.png", categoria: "Jogger", texto: "Jogger gris estilo jean", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 7, img: "panta12.png", categoria: "Jogger", texto: "Jogger rojo estilo principe de gales", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 8, img: "panta11.png", categoria: "Jogger", texto: "Jogger beige clarito", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 9, img: "panta10.png", categoria: "Jogger", texto: "Jogger verde oscuro", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 10, img: "panta7.png", categoria: "Jogger", texto: "Jogger miliar con rayas verdes", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 12,img: "panta4.png", categoria: "Jogger", texto: "Jogger negro", enStock: true, precio: 2500, promocion: true, talles: ["S", "M", "L"], verfoto: false},
            {id: 13, img: "short1.png", categoria: "Bermuda", texto: "Bermuda azul Hawaiana", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 14, img: "short6.png", categoria: "Bermuda", texto: "Bermuda jogger amarilla con linea blanca", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 15, img: "short5.png", categoria: "Bermuda", texto: "Bermuda jogger beige", enStock: true, precio: 2300, promocion: true, talles: ["S", "M", "L"], verfoto: false},
            {id: 16, img: "short4.png", categoria: "Bermuda", texto: "Bermuda jogger azul", enStock: true, precio: 2300, promocion: true, talles: ["S", "M", "L"], verfoto: false},
            {id: 17, img: "short3.png", categoria: "Bermuda", texto: "Bermuda amarilla Hawaiana", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: 18, img: "short2.png", categoria: "Bermuda", texto: "Bermuda marron con bolsillo", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false}
    ])
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) ??[])
    const [precios, setPrecios] = useState(0)
    
    //estado del login 
    const [registrado, setRegistrado] =useState(false)

    //Lista de usuarios
    const [usuarios, setUsuarios] = useState([
        {name: "Moshe", surname: "fuks", email: "moshi01@gmail.com", pass: "moshi01"}
    ])

    
    //Agrega a la lista de pantalones los pantalones
    //En cada componente poner un filter, segun el titulo

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    /* Funcion para agregar productos al carrito */
    const agregarAlCarrito = (producto, precio) =>{
        setCarrito([producto, ...carrito])
        setPrecios(precio+precios)
        toast.success("Se agrego a tu carrito")
    }

   const registroOk = () => {
        toast.success("Su cuenta a sido agregada")
    }

    const noRegistrado = () => {
        toast.error("No se ha podido registrar")
    }

    const prodAgregado = (produc) => {
        toast.success(`Se agrego ${produc} a la lista de productos `)
    }

    const bienvenido = (nombre) => {
        toast.success(`Bienvenido ${nombre}`)
    }

    const errorLogin = (email) => {
        toast.error(`Error alingresar con el email: ${email}`  )
    }




    return (
        <Context.Provider value={{productos, setProductos, carrito, setCarrito, agregarAlCarrito, precios, registrado, registroOk, noRegistrado, setPrecios, prodAgregado, setRegistrado, usuarios, setUsuarios, bienvenido, errorLogin}}>
            <div><Toaster /></div>
            {children}
        </Context.Provider>
    );
}


export default AppProvider;