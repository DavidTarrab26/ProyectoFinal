import { useContext, useState } from 'react';
import Context from '../../store/appContext'
import { useParams } from 'react-router-dom'

const Detalle = () => {
    const { id } = useParams();
    const { productos } = useContext(Context);
    const [ prodADetallar, setProdADetallar] = useState({});

    //Si encuntra un producto con ese id lo devuelve
    setProdADetallar(productos.find((produc) => produc.id === id))

    return (
        <>
            <h1>{prodADetallar.texto}</h1>
        </>
    );
}
 
export default Detalle;