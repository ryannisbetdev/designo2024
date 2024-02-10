import Hero from "../../components/layout/hero";
import Card from "../../components/cards/card";
import AppCard from "../../components/cards/app-card";
import WebCard from "../../components/cards/web-card";

import changeImage from "../../assets/graphic-design/image-change.jpg";
import boxedWaterImage from "../../assets/graphic-design/image-boxed-water.jpg";
import scienceImage from "../../assets/graphic-design/image-science.jpg";


const GraphicsPage = () => {
    const heroProps = {
        title: "Graphic Design",
        description: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
    },
    projects = [
        {
            title: "Tim Brown",
            description: "A book cover designed for Tim Brown’s new release, ‘Change’",
            image: changeImage
        },
        {
            title: "Boxed Water",
            description: "A simple packaging concept made for Boxed Water",
            image: boxedWaterImage
        },
        {
            title: "Science!",
            description: "A poster made in collaboration with the Federal Art Project",
            image: scienceImage
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
                <WebCard/>
                <AppCard/>
            </div>
        </div>
    );
};

export default GraphicsPage;
