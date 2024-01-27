import Hero from "../../components/layout/hero";

const AppsPage = () => {
    const heroProps = {
        title: "App Design",
        description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    };

    return (
        <div>
            <Hero {...heroProps} />
        </div>
    );
};

export default AppsPage;
