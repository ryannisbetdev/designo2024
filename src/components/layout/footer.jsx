import Logo from "../../assets/shared//logo-light.png";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__top">
                <h1 className="footer__heading heading">Let's talk about your project</h1>
                <p className="footer_text">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                <div className="footer__button">
                <a className="btn" href="/contact">Get in touch</a>
                </div>
            </section>

            <section className="footer__bottom">
                <div className="footer__bottom-section">
                    <img className="footer__logo" src={Logo} alt="Designo logo" />

                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item">
                            <a href="/company" className="footer__navigation-link">Our company</a>
                        </li>
                        <li className="footer__navigation-item">
                            <a href="/locations" className="footer__navigation-link">Locations</a>
                        </li>
                        <li className="footer__navigation-item">
                            <a href="/contact" className="footer__navigation-link">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__bottom-section">
                    <div className="footer__address">
                        <h3 className="footer_subheading">Designo Central Office</h3>
                        <p className="footer_text">3886 Wellington Street</p>
                        <p className="footer_text">Toronto, Ontario M9C 3J5</p>
                    </div>

                    <div className="footer__contact">
                        <h3 className="footer_subheading">Contact Us (Central Office)</h3>
                        <p className="footer_text">P : +1 253-863-8967</p>
                        <p className="footer_text">M : contact@designo.co</p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
