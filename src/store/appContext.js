import { createContext, useState, useEffect} from "react";

export const Context = createContext(null)



const AppProvider = ({children}) => {
    const [productos, setProductos] = useState([])

    //Agrega a la lista de pantalones los pantalones
    //En cada componente poner un filter, segun el titulo
    useEffect (() => {
        setProductos([
            {id: 1, img: "../assets/img/photo-white-background/panta1.png", alt: "Jogger azul", categoria: "Jogger", texto: "Jogger azul", estado: "En Stock", precio: "2500", promocion: true},
            {id: 2, img: "../assets/img/photo-white-background/panta2.png", alt: "Jogger estilo militar gris", categoria: "Jogger", texto: "Jogger estilo militar gris", estado: "En Stock", precio: "2500", promocion: false},
            {id: 3, img: "../assets/img/photo-white-background/panta3.png", alt: "Jogger beige con bolsillo", categoria: "Jogger", texto: "Jogger beige con bolsillo", estado: "En Stock", precio: "2500", promocion: false},
            {id: 4, img: "../assets/img/photo-white-background/panta4.png", alt: "Jogger gris plata", categoria: "Jogger", texto: "Jogger gris plata", estado: "En Stock", precio: "2500", promocion: false},
            {id: 5, img: "../assets/img/photo-white-background/panta5.png", alt: "Jogger gris y negro", categoria: "Jogger", texto: "Jogger gris y negro", estado: "En Stock", precio: "2500", promocion: false},
            {id: 6, img: "../assets/img/photo-white-background/panta6.png", alt: "Jogger gris estilo jean", categoria: "Jogger", texto: "Jogger gris estilo jean", estado: "En Stock", precio: "2500", promocion: false},
            {id: 7, img: "../assets/img/photo-white-background/panta7.png", alt: "Jogger rojo estilo principe de gales", categoria: "Jogger", texto: "Jogger rojo estilo principe de gales", estado: "En Stock", precio: "2500", promocion: false},
            {id: 8, img: "../assets/img/photo-white-background/panta8.png", alt: "Jogger beige clarito", categoria: "Jogger", texto: "Jogger beige clarito", estado: "En Stock", precio: "2500", promocion: false},
            {id: 9, img: "../assets/img/photo-white-background/panta9.png", alt: "Jogger verde oscuro", categoria: "Jogger", texto: "Jogger verde oscuro", estado: "En Stock", precio: "2500", promocion: false},
            {id: 10, img: "../assets/img/photo-white-background/panta10.png", alt:"Jogger miliar con rayas verdes", categoria: "Jogger", texto: "Jogger miliar con rayas verdes", estado: "En Stock", precio: "2500", promocion: false},
            {id: 11, img: "../assets/img/photo-white-background/panta11.png", alt: "Jogger beige clarito", categoria: "Jogger", texto: "Jogger beige clarito", estado: "En Stock", precio: "2500", promocion: false},
            {id: 12,img: "../assets/img/photo-white-background/panta12.png", alt: "Jogger negro", categoria: "Jogger", texto: "Jogger negro", estado: "En Stock", precio: "2500", promocion: true},
            {id: 13, img: "../assets/img/shorts-white-background/short1.png", alt: "Bermuda azul Hawaiana", categoria: "Bermuda", texto: "Bermuda azul Hawaiana", estado: "En Stock", precio: "2300", promocion: false},
            {id: 14, img: "../assets/img/shorts-white-background/short2.png", alt: "Bermuda jogger amarilla con linea blanca", categoria: "Bermuda", texto: "Bermuda jogger amarilla con linea blanca", estado: "En Stock", precio: "2300", promocion: false},
            {id: 15, img: "../assets/img/shorts-white-background/short3.png", alt: "Bermuda jogger beige", categoria: "Bermuda", texto: "Bermuda jogger beige", estado: "En Stock", precio: "2300", promocion: true},
            {id: 16, img: "../assets/img/shorts-white-background/short4.png", alt: "Bermuda jogger azul", categoria: "Bermuda", texto: "Bermuda jogger azul", estado: "En Stock", precio: "2300", promocion: true},
            {id: 17, img: "../assets/img/shorts-white-background/short5.png", alt: "Bermuda amarilla Hawaiana", categoria: "Bermuda", texto: "Bermuda amarilla Hawaiana", estado: "En Stock", precio: "2300", promocion: false},
            {id: 18, img: "../assets/img/shorts-white-background/short6.png", alt: "Bermuda marron con bolsillo", categoria: "Bermuda", texto: "Bermuda marron con bolsillo", estado: "En Stock", precio: "2300"}
        ])
    },[])


    return (
        <Context.Provider value={{productos, setProductos}}>
            {children}
        </Context.Provider>
    );
}


export default AppProvider;