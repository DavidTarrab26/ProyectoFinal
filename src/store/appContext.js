import { createContext, useState, useEffect} from "react";
import Swal from "sweetalert2"

export const Context = createContext(null)



const AppProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) ??[])
    const [precios, setPrecios] = useState(0)
    console.log(precios)
    //Agrega a la lista de pantalones los pantalones
    //En cada componente poner un filter, segun el titulo
    useEffect (() => {
        setProductos([
            {id: "1", img: "panta2.png", alt: "Jogger azul", categoria: "Jogger", texto: "Jogger azul", enStock: true, precio: 2500, promocion: true, talles:["S", "L", "M"], verfoto: false},
            {id: "2", img: "panta8.png", alt: "Jogger estilo militar gris", categoria: "Jogger", texto: "Jogger estilo militar gris", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "3", img: "panta1.png", alt: "Jogger beige con bolsillo", categoria: "Jogger", texto: "Jogger beige con bolsillo", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "4", img: "panta14.png", alt: "Jogger gris plata", categoria: "Jogger", texto: "Jogger gris plata", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "5", img: "panta3.png", alt: "Jogger gris y negro", categoria: "Jogger", texto: "Jogger gris y negro", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "6", img: "panta13.png", alt: "Jogger gris estilo jean", categoria: "Jogger", texto: "Jogger gris estilo jean", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "7", img: "panta12.png", alt: "Jogger rojo estilo principe de gales", categoria: "Jogger", texto: "Jogger rojo estilo principe de gales", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "8", img: "panta11.png", alt: "Jogger beige clarito", categoria: "Jogger", texto: "Jogger beige clarito", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "9", img: "panta10.png", alt: "Jogger verde oscuro", categoria: "Jogger", texto: "Jogger verde oscuro", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "10", img: "panta7.png", alt:"Jogger miliar con rayas verdes", categoria: "Jogger", texto: "Jogger miliar con rayas verdes", enStock: true, precio: 2500, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "12",img: "panta4.png", alt: "Jogger negro", categoria: "Jogger", texto: "Jogger negro", enStock: true, precio: 2500, promocion: true, talles: ["S", "M", "L"], verfoto: false},
            {id: "13", img: "short1.png", alt: "Bermuda azul Hawaiana", categoria: "Bermuda", texto: "Bermuda azul Hawaiana", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "14", img: "short6.png", alt: "Bermuda jogger amarilla con linea blanca", categoria: "Bermuda", texto: "Bermuda jogger amarilla con linea blanca", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "15", img: "short5.png", alt: "Bermuda jogger beige", categoria: "Bermuda", texto: "Bermuda jogger beige", enStock: true, precio: 2300, promocion: true, talles: ["S", "M", "L"], verfoto: false},
            {id: "16", img: "short4.png", alt: "Bermuda jogger azul", categoria: "Bermuda", texto: "Bermuda jogger azul", enStock: true, precio: 2300, promocion: true, talles: ["S", "M", "L"], verfoto: false},
            {id: "17", img: "short3.png", alt: "Bermuda amarilla Hawaiana", categoria: "Bermuda", texto: "Bermuda amarilla Hawaiana", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false},
            {id: "18", img: "short2.png", alt: "Bermuda marron con bolsillo", categoria: "Bermuda", texto: "Bermuda marron con bolsillo", enStock: true, precio: 2300, promocion: false, talles: ["S", "M", "L"], verfoto: false}
        ])
    },[])

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    /* Funcion para agregar productos al carrito */
    const agregarAlCarrito = (producto, precio) =>{
        setCarrito([producto, ...carrito])
        setPrecios(precio+precios)
        Swal("Se agrego al carrito ");
    }


    return (
        <Context.Provider value={{productos, setProductos, carrito, setCarrito, agregarAlCarrito, precios}}>
            {children}
        </Context.Provider>
    );
}


export default AppProvider;