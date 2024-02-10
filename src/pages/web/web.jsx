import Hero from "../../components/layout/hero";
import Card from "../../components/cards/card";
import GraphicsCard from "../../components/cards/graphics-card";
import AppCard from "../../components/cards/app-card";

import expressImage from "../../assets/web-design/image-express.jpg";
import transferImage from "../../assets/web-design/image-transfer.jpg";
import photonImage from "../../assets/web-design/image-photon.jpg";
import builderImage from "../../assets/web-design/image-builder.jpg";
import blogrImage from "../../assets/web-design/image-blogr.jpg";
import campImage from "../../assets/web-design/image-camp.jpg";


const WebPage = () => {
    const heroProps = {
        title: "Web Design",
        description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    },
    projects = [
        {
            title: "Express",
            description: "A multi-carrier shipping website for ecommerce businesses",
            image: expressImage
        },
        {
            title: "Transfer",
            description: "Site for low-cost money transfers and sending money within seconds",
            image: transferImage
        },
        {
            title: "Photon",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects",
            image: photonImage
        },
        {
            title: "Builder",
            description: "Connects users with local contractors based on their location",
            image: builderImage
        },
        {
            title: "Blogr",
            description: "Blogr is a platform for creating an online blog or publication",
            image: blogrImage
        },
        {
            title: "Camp",
            description: "Get expert training in coding, data, design, and digital marketing",
            image: campImage
        }
    ];

    return (
        <div>
            <Hero {...heroProps} />

            <div className="card__container">
                {projects.map((project, index) => (
                    <div key={index}>
                         <Card {...project} />
                    </div>
                ))}
            </div>

            <div className="services services__container">
                <GraphicsCard/>
                <AppCard/>
            </div>
        </div>
    );
};

export default WebPage;
