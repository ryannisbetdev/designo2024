const Card = (props) => {
    const { title, description, image } = props;
    return (
        <div className="card">
            <img className="card__img" src={image} alt={title} />
            <div className="card__text-container">
                <h2 className="card__heading heading">{title}</h2>
                <p className="card__text">{description}</p>
            </div>
        </div>
    );
};

export default Card;
