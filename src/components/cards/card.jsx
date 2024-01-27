const Card = (image, title, description) => {
    return (
        <div className="card">
            <img className="card__image"src={image} />
            <h2 className="card__heading heading">{title}</h2>
            <p className="card__text">{description}</p>
        </div>
    );
};

export default Card;
