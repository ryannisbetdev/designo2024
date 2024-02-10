import Hero from "../../components/layout/hero";
import Card from "../../components/cards/card";
import GraphicsCard from "../../components/cards/graphics-card";
import WebCard from "../../components/cards/web-card";

import airFilterImage from "../../assets/app-design/image-airfilter.jpg";
import eyecamImage from "../../assets/app-design/image-eyecam.jpg";
import faceitImage from "../../assets/app-design/image-faceit.jpg";
import todoImage from "../../assets/app-design/image-todo.jpg";
import loopstudiosImage from "../../assets/app-design/image-loopstudios.jpg";

const AppsPage = () => {
    const heroProps = {
        title: "App Design",
        description: "App Design is our specialty. We design mobile and web apps that delight your users and grow your business."
    },
    projects = [
        {
            title: "Airfilter",
            description: "Solving the problem of poor indoor air quality by filtering the air",
            image: airFilterImage
        },
        {
            title: "Eyecam",
            description: "Product that lets you edit your favorite photos and videos at any time",
            image: eyecamImage
        },
        {
            title: "Faceit",
            description: "Get to meet your favorite internet superstar with the faceit app",
            image: faceitImage
        },
        {
            title: "Todo",
            description: "A todo app that features cloud sync with light and dark mode",
            image: todoImage
        },
        {
            title: "Loopstudios",
            description: "A VR experience app made for Loopstudios",
            image: loopstudiosImage
        }
    ];

    return (
        <>
            <Hero {...heroProps} />

            <div className="card__container">
                {projects.map((project, index) => (
                    <div key={index}>
                         <Card {...project} />
                    </div>
                ))}
            </div>

            <div className="services services__container">
                <WebCard/>
                <GraphicsCard/>
            </div>
        </>
    );
};

export default AppsPage;
