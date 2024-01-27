import Hero from "../../components/layout/hero";

const WebPage = () => {
    const heroProps = {
        title: "Web Design",
        description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    };

    return (
        <div>
            <Hero {...heroProps} />
        </div>
    );
};

export default WebPage;
