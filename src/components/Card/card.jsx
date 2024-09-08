import './Card.css';

const Card = ({ name, img, price, category, dues, href = '#', tag}) => {
    return(
        <article class="item">
        <a href={href}>
            <picture className="item__picture">
            <span className="item__picture--pill">{tag}</span>
            <img className="card-image" src={`/public/${img.front}`} alt={`${name} - Figura`} />
            </picture>
            <div className="item__info">
            <h3 className="item__info--title">{category}</h3>
            <h4 className="item__info--item">{name}</h4>
            <p className="item__info--price">$ {price} .-</p>
            </div>
        </a>
        </article>
    );
};

export default Card;
