import './item.css';
import Counter from '../Counter/counter';
import { Link } from "react-router-dom";

const Item = ({ name, img, price, category, href = '#', tag, stock }) => {
    return (
        <article className="item">
            <link to={`/detalle/${id}`}>
                <picture className="item__picture">
                    <span className="item__picture--pill">{tag}</span>
                    <img className="card-image" src={`/public/${img.front}`} alt={`${name} - Semilla`} />
                </picture>
                <div className="item__info">
                    <h3 className="item__info--title">{category}</h3>
                    <h4 className="item__info--item">{name}</h4>
                    <p className="item__info--price">$ {price} .-</p>
                </div>
            </link>
            {/* Agrega el componente Counter debajo de la información del producto */}
            <Counter initial={1} stock={stock} onAdd={(count) => console.log(`${count} ${name} agregados al carrito`)} />
        </article>
    );
};

export default Item;

