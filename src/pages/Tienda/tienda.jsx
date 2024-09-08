import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/itemList";

const Store = () => {
    const { id } = useParams();

    return (
    <>
        <aside>
        <p>filtros</p>
        </aside>
        <ItemList category={id} />
    </>
);
}

export default Store;