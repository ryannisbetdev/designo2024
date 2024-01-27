const Hero = (props) => {
    const { title, description } = props;

    return (
        <div className="hero">
            <h1 className="hero__heading heading">{title}</h1>
            <p className="hero__text">{description}</p>
        </div>
    );
};

export default Hero;