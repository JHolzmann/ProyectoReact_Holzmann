import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/itemDetail";
import { doc, getDoc } from "firebase/firestore"; 
import { data } from "../../config/firebase.config"; 

const Detail = () => {
    const { id } = useParams(); 
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true);
            try {
                const docRef = doc(data, "items", id); 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() }); 
                } else {
                    setError("El producto no existe");
                }
            } catch (err) {
                setError("Hubo un error al cargar los datos: " + err.message);
            } finally {
                setLoading(false); 
            }
        };

        fetchItem();
    }, [id]); 

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (error) {
        return <p>{error}</p>; 
    }

    return item ? <ItemDetail {...item} /> : null; 
};

export default Detail;
