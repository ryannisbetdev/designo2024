import CanadaImage from '../../assets/shared/desktop/illustration-canada.svg';
import AustraliaImage from '../../assets/shared/desktop/illustration-australia.svg';
import UKImage from '../../assets/shared/desktop/illustration-united-kingdom.svg';

import '../../styles/common.scss';

const Locations = () => {
    return (
        <div className="locations__container">
            <div className="locations__item">
                <img src={CanadaImage} alt="Canada" />
                <h2 className="locations__heading heading">Canada</h2>
                <button className="btn btn--dark">See Location</button>
            </div>

            <div className="locations__item">
                <img src={AustraliaImage} alt="Australia" />
                <h2 className="locations__heading heading">Australia</h2>
                <button className="btn btn--dark">See Location</button>
            </div>

            <div className="locations__item">
                <img src={UKImage} alt="United Kingdom" />
                <h2 className="locations__heading heading">United Kingdom</h2>
                <button className="btn btn--dark">See Location</button>
            </div>
        </div>

    );
};

export default Locations;