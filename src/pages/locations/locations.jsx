import './locations.scss';

import Canada from '../../assets/locations/image-map-canada.png';
import Australia from '../../assets/locations/image-map-australia.png';
import UK from '../../assets/locations/image-map-united-kingdom.png';

const Locations = () => {
    return (
        <>
            <div className="locations__section canada">
                <div className="locations__textWrap">
                    <h2 className="locations__heading">Canada</h2>
                    <div className="locations__text address">
                        <p className="locations__subheading">Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>

                    <div className="locations__text contact">
                        <p className="locations__subheading">Contact</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact:designo.co</p>
                     </div>
                </div>

                <img src={Canada} alt="Map of Canada" className="locations__img" />

            </div>

            <div className="locations__section australia ">
                <div className="locations__textWrap">
                    <h2 className="locations__heading">Australia</h2>
                    <div className="locations__text address">
                        <p className="locations__subheading">Designo AU Office</p>
                        <p>19 Balonne Street</p>
                        <p>New South Wales 2443</p>
                    </div>

                    <div className="locations__text contact">
                        <p className="locations__subheading">Contact</p>
                        <p>P : (02) 6720 9092</p>
                        <p>M : contact:designo.au</p>
                     </div>
                </div>

                <img src={Australia} alt="Map of Australia" className="locations__img" />
            </div>

            <div className="locations__section uk">
                <div className="locations__textWrap">
                    <h2 className="locations__heading">United Kingdom</h2>
                    <div className="locations__text address">
                        <p className="locations__subheading">Designo UK Office</p>
                        <p>13 Colorado Way</p>
                        <p>Rhyd-y-fro SA8 9GA</p>
                    </div>

                    <div className="locations__text contact">
                        <p className="locations__subheading">Contact</p>
                        <p>P : 078 3115 1400</p>
                        <p>M : contact:designo.uk</p>
                     </div>
                </div>

                <img src={UK} alt="Map of the United Kingdom" className="locations__img" />

            </div>
        </>
    )
}

export default Locations;