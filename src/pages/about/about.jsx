import HeroImg from '../../assets/about/desktop/image-about-hero.jpg';
import ValuesImg from '../../assets/about/desktop/image-world-class-talent.jpg';
import RealDealImg from '../../assets/about/desktop/image-real-deal.jpg';
import Locations from '../../components/layout/locations';
import Hero from '../../components/layout/hero';
import './about.scss';

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs__hero aboutUs__section">
                <img src={HeroImg} alt="About Us" className="aboutUs__img"/>
                <Hero title="About Us" description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences." />
            </div>

            <div className="aboutUs__section">
                <img src={ValuesImg} alt="World Class Talent" className="aboutUs__img" />
                <div className="aboutUs__section--text">
                    <h2 className="aboutUs__heading heading">World-class talent</h2>
                    <p className="aboutUs__text">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <p className="aboutUs__text">Our team is multi-disciplined and fully equipped to solve problems and achieve client goals.</p>
                </div>
            </div>

            <Locations />

            <div className="aboutUs__section realDeal">
                <img src={RealDealImg} alt="The Real Deal" className="aboutUs__img" />
                <div className="aboutUs__section--text">
                    <h2 className="aboutUs__heading heading">The real deal</h2>
                    <p className="aboutUs__text">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p className="aboutUs__text">We are visual storytellers in making, building brands that represent our clients and resonate with their audiences. We’re about telling stories that stand out.</p>
                </div>  
            </div>
        </>
    );
};

export default AboutUs;
