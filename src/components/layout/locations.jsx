import CanadaImage from '../../assets/shared/illustration-canada.svg';
import AustraliaImage from '../../assets/shared/illustration-australia.svg';
import UKImage from '../../assets/shared/illustration-united-kingdom.svg';

import '../../styles/common.scss';

const Locations = () => {
    return (
        <div className="locations__container">
            <div className="locations__item">
                <img src={CanadaImage} alt="Canada" />
                <h2 className="locations__heading heading">Canada</h2>
                <a className="btn btn--dark" href="/locations">See Location</a>
            </div>

            <div className="locations__item">
                <img src={AustraliaImage} alt="Australia" />
                <h2 className="locations__heading heading">Australia</h2>
                <a className="btn btn--dark" href="/locations">See Location</a>
            </div>

            <div className="locations__item">
                <img src={UKImage} alt="United Kingdom" />
                <h2 className="locations__heading heading">United Kingdom</h2>
                <a className="btn btn--dark" href="/locations">See Location</a>
            </div>
        </div>

    );
};

export default Locations;