import { createContext, useState, useEffect} from "react";

export const Context = createContext(null)

const AppProvider = ({children}) => {
    const [pantalones, setPantalones] = useState([])
    const [bermudas, setBermudas] = useState([])
    const [productos, setProductos] = useState([])

    //Agrega a la lista de pantalones los pantalones
    useEffect (() => {
        setPantalones([
            {id: 1, img: "./img/photo-white-background/IMG-20210510-WA0050.png", alt: "Jogger azul", titulo: "Jogger", texto: "Jogger azul", estado: "En Stock", precio: "2500", promocion: true},
            {id: 2, img: "./img/photo-white-background/IMG-20211022-WA0074.png", alt: "Jogger estilo militar gris", titulo: "Jogger", texto: "Jogger estilo militar gris", estado: "En Stock", precio: "2500", promocion: false},
            {id: 3, img: "./img/photo-white-background/IMG-20210510-WA0047.png", alt: "Jogger beige con bolsillo", titulo: "Jogger", texto: "Jogger beige con bolsillo", estado: "En Stock", precio: "2500", promocion: false},
            {id: 4, img: "./img/photo-white-background/IMG-20210510-WA0054.png", alt: "Jogger gris plata", titulo: "Jogger", texto: "Jogger gris plata", estado: "En Stock", precio: "2500", promocion: false},
            {id: 5, img: "./img/photo-white-background/IMG-20211129-WA0068.png", alt: "Jogger gris y negro", titulo: "Jogger", texto: "Jogger gris y negro", estado: "En Stock", precio: "2500", promocion: false},
            {id: 6, img: "./img/photo-white-background/IMG-20210510-WA0056.png", alt: "Jogger gris estilo jean", titulo: "Jogger", texto: "Jogger gris estilo jean", estado: "En Stock", precio: "2500", promocion: false},
            {id: 7, img: "./img/photo-white-background/IMG-20210510-WA0057.png", alt: "Jogger rojo estilo principe de gales", titulo: "Jogger", texto: "Jogger rojo estilo principe de gales", estado: "En Stock", precio: "2500", promocion: false},
            {id: 8, img: "./img/photo-white-background/IMG-20210510-WA0060.png", alt: "Jogger beige clarito", titulo: "Jogger", texto: "Jogger beige clarito", estado: "En Stock", precio: "2500", promocion: false},
            {id: 9, img: "./img/photo-white-background/IMG-20210510-WA0063.png", alt: "Jogger verde oscuro", titulo: "Jogger", texto: "Jogger verde oscuro", estado: "En Stock", precio: "2500", promocion: false},
            {id: 10, img: "./img/photo-white-background/IMG-20211129-WA0059.png", alt:"Jogger miliar con rayas verdes", titulo: "Jogger", texto: "Jogger miliar con rayas verdes", estado: "En Stock", precio: "2500", promocion: false},
            {id: 11, img: "./img/photo-white-background/IMG-20211129-WA0065.png", alt: "Jogger beige clarito", titulo: "Jogger", texto: "Jogger beige clarito", estado: "En Stock", precio: "2500", promocion: false},
            {id: 12,img: "./img/photo-white-background/IMG-20211129-WA0066.png", alt: "Jogger negro", titulo: "Jogger", texto: "Jogger negro", estado: "En Stock", precio: "2500", promocion: true}
        ])
    }, [])
    //console.log(pantalones)
    
    //Agrega a la lista de bermudas las bermudas
    useEffect (() => {
        setBermudas([
        {id: 13, img: "./img/shorts-white-background/IMG-20211008-WA0002.png", alt: "Bermuda azul Hawaiana", titulo: "Bermuda", texto: "Bermuda azul Hawaiana", estado: "En Stock", precio: "2300", promocion: false},
        {id: 14, img: "./img/shorts-white-background/IMG-20211008-WA0003.png", alt: "Bermuda jogger amarilla con linea blanca", titulo: "Bermuda", texto: "Bermuda jogger amarilla con linea blanca", estado: "En Stock", precio: "2300", promocion: false},
        {id: 15, img: "./img/shorts-white-background/IMG-20211008-WA0004.png", alt: "Bermuda jogger beige", titulo: "Bermuda", texto: "Bermuda jogger beige", estado: "En Stock", precio: "2300", promocion: true},
        {id: 16, img: "./img/shorts-white-background/IMG-20211008-WA0006.png", alt: "Bermuda jogger azul", titulo: "Bermuda", texto: "Bermuda jogger azul", estado: "En Stock", precio: "2300", promocion: true},
        {id: 17, img: "./img/shorts-white-background/IMG-20211008-WA0007.png", alt: "Bermuda amarilla Hawaiana", titulo: "Bermuda", texto: "Bermuda amarilla Hawaiana", estado: "En Stock", precio: "2300", promocion: false},
        {id: 18, img: "./img/shorts-white-background/IMG-20211008-WA0009.png", alt: "Bermuda marron con bolsillo", titulo: "Bermuda", texto: "Bermuda marron con bolsillo", estado: "En Stock", precio: "2300"}
        ])
    },[])

    useEffect(() => {
        setProductos([...bermudas, ...pantalones])
    },[])


    return (
        <Context.Provider value={{pantalones, bermudas, productos, setProductos}}>
            {children}
        </Context.Provider>
    );
}


export default AppProvider;