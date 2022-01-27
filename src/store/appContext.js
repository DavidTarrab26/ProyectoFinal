import { createContext, useState, useEffect} from "react";

export const Context = createContext(null)



const AppProvider = ({children}) => {
    const [productos, setProductos] = useState([
        {id: 1, img: "panta1.png", alt: "Jogger beige con bolsillo", categoria: "Jogger", texto: "Jogger beige con bolsillo", estado: "En Stock", precio: 2500, promocion: true, talles:["S", "L", "M"]},
        {id: 2, img: "panta2.png", alt: "Jogger estilo militar gris", categoria: "Jogger", texto: "Jogger azul", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "3", img: "panta3.png", alt: "Jogger azul", categoria: "Jogger", texto: "Jogger estilo militar gris", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "4", img: "panta4.png", alt: "Jogger gris plata", categoria: "Jogger", texto: "Jogger gris plata", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "5", img: "panta5.png", alt: "Jogger gris y negro", categoria: "Jogger", texto: "Jogger gris y negro", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "6", img: "panta6.png", alt: "Jogger gris estilo jean", categoria: "Jogger", texto: "Jogger gris estilo jean", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "7", img: "panta7.png", alt: "Jogger rojo estilo principe de gales", categoria: "Jogger", texto: "Jogger principe de gales", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "8", img: "panta8.png", alt: "Jogger beige clarito", categoria: "Jogger", texto: "Jogger beige clarito", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "9", img: "panta9.png", alt: "Jogger verde oscuro", categoria: "Jogger", texto: "Jogger verde oscuro", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "10", img: "panta10.png", alt:"Jogger miliar con rayas verdes", categoria: "Jogger", texto: "Jogger miliar con rayas verdes", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "11", img: "panta11.png", alt: "Jogger beige clarito", categoria: "Jogger", texto: "Jogger beige clarito", estado: "En Stock", precio: 2500, promocion: false, talles: ["S", "M", "L"]},
        {id: "12",img: "panta12.png", alt: "Jogger negro", categoria: "Jogger", texto: "Jogger negro", estado: "En Stock", precio: 2500, promocion: true, talles: ["S", "M", "L"]},
        {id: "13", img: "short1.png", alt: "Bermuda azul Hawaiana", categoria: "Bermuda", texto: "Bermuda azul Hawaiana", estado: "En Stock", precio: 2300, promocion: false, talles: ["S", "M", "L"]},
        {id: "14", img: "short2.png", alt: "Bermuda jogger amarilla con linea blanca", categoria: "Bermuda", texto: "Bermuda jogger amarilla", estado: "En Stock", precio: 2300, promocion: false, talles: ["S", "M", "L"]},
        {id: "15", img: "short3.png", alt: "Bermuda jogger beige", categoria: "Bermuda", texto: "Bermuda jogger beige", estado: "En Stock", precio: 2300, promocion: true, talles: ["S", "M", "L"]},
        {id: "16", img: "short4.png", alt: "Bermuda jogger azul", categoria: "Bermuda", texto: "Bermuda jogger azul", estado: "En Stock", precio: 2300, promocion: true, talles: ["S", "M", "L"]},
        {id: "17", img: "short5.png", alt: "Bermuda amarilla Hawaiana", categoria: "Bermuda", texto: "Bermuda amarilla Hawaiana", estado: "En Stock", precio: 2300, promocion: false, talles: ["S", "M", "L"]},
        {id: "18", img: "short6.png", alt: "Bermuda marron con bolsillo", categoria: "Bermuda", texto: "Bermuda marron con bolsillo", estado: "En Stock", precio: 2300}
    ])
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) ??[])
    const [precios, setPrecios] = useState(0)
    //Agrega a la lista de pantalones los pantalones
    //En cada componente poner un filter, segun el titulo

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    /* Funcion para agregar productos al carrito */
    const agregarAlCarrito = (producto, precio) =>{
        setCarrito([producto, ...carrito])
        setPrecios(precio+precios)
    }


    return (
        <Context.Provider value={{productos, setProductos, carrito, setCarrito, agregarAlCarrito, precios, setPrecios}}>
            {children}
        </Context.Provider>
    );
}


export default AppProvider;