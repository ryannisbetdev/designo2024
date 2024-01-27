import friendlyIllustration from '../../assets/home/desktop/illustration-friendly.svg';
import passionateIllustration from '../../assets/home/desktop/illustration-passionate.svg';
import resourcefulIllustration from '../../assets/home/desktop/illustration-resourceful.svg';
import heroImage from '../../assets/home/desktop/image-hero-phone.png';

import '../index/index.scss';

const IndexPage = () => {
    return (
        <div className="pageWrap pageWrap__homepage">
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__heading heading">Award-winning custom designs and digital branding solutions</h1>
                    <p className="hero__text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <div className="hero__button">
                        <button className="btn">Learn more</button>
                    </div>
                </div>

                <img className="hero__img" src={heroImage} alt="hero image" />
            </section>

            <section className="services">
                <div className="services__item services__item--web">
                    <h2 className="services__heading heading">Web Design</h2>
                    <a href="/" className="services__link">View projects</a>
                </div>

                <div className="services__item services__item--app">
                    <h2 className="services__heading heading">App Design</h2>
                    <a href="/" className="services__link">View projects</a>
                </div>

                <div className="services__item services__item--graphic">
                    <h2 className="services__heading heading">Graphic Design</h2>
                    <a href="/" className="services__link">View projects</a>
                </div>

            </section>

            <div className="about">
                <div className="about__section">
                    <img className="about__image" src={passionateIllustration} />
                    <div className="about__text--wrap">
                        <h2 className="about__heading">Passionate</h2>
                        <p className="about__text">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                </div>

                <div className="about__section">
                    <img className="about__image" src={resourcefulIllustration} />
                    <div className="about__text--wrap">
                        <h2 className="about__heading">Resourceful</h2>
                        <p className="about__text">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.</p>
                    </div>
                </div>

                <div className="about__section">
                    <img className="about__image" src={friendlyIllustration} />
                    <div className="about__text--wrap">
                        <h2 className="about__heading">Friendly</h2>
                        <p className="about__text">We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
