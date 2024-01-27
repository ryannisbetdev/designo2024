import Hero from "../../components/layout/hero";

const GraphicsPage = () => {
    const heroProps = {
        title: "Graphic Design",
        description: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
    };

    return (
        <div>
            <Hero {...heroProps} />
        </div>
    );
};

export default GraphicsPage;
