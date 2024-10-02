import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { data } from "../../config/firebase.config";

import ItemList from "../../components/ItemList/itemList";
import Spinner from "../../components/Spinner/spinner";

const Store = () => {
    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        setError(''); 

        
        const itemsCollection = collection(data, 'items');
        const itemsQuery = category 
            ? query(itemsCollection, where('category', '==', category)) 
            : itemsCollection;

        
        getDocs(itemsQuery)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    setError("No se encontraron resultados");
                    setItems([]);
                } else {
                    setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                }
            })
            .catch(() => {
                setError("No se pudieron cargar los datos");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category]); 

    return (
        <main className="store">
            {loading ? (
                <Spinner />
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <aside className="store__aside">
                        <p>filtros</p>
                    </aside>
                    <ItemList className="store__items" items={items} />
                </>
            )}
        </main>
    );
};

export default Store;

