import Locations from "../../components/layout/locations.jsx";
import './contact.scss';

const Contact= () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.form__input');
        inputs.forEach((input) => {
            const errorElement = input.nextElementSibling;
            if (input.value.trim() === '') {
                errorElement.classList.remove('hide');
            }
        });
    };

    const handleInputChange = (e) => {
        const input = e.target;
        const errorElement = input.nextElementSibling;
        if (input.value.trim() !== '') {
            errorElement.classList.add('hide');
        }
    };

    return (
        <>
        <div className="contact__container">
            <div className="contact__text-container">
                <h1 className="contact__heading heading">Contact Us</h1>
                <p className="contact__text">Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experience that's relatable to your users, drop us a line.</p>
            </div>

            <form action="" className="contact__form" onSubmit={handleFormSubmit}>
                <div className="contact__form-group">
                    <label htmlFor="name" className="form__label hide">Name</label>
                    <input type="text" id="name" className="form__input" placeholder="Name" onChange={handleInputChange} />
                    <p className="form__error hide">Can't be empty</p>
                </div>
                <div className="contact__form-group">
                    <label htmlFor="email" className="contact__label hide">Email</label>
                    <input type="email" id="email" className="form__input" placeholder="Email Address" onChange={handleInputChange} />
                    <p className="form__error hide">Can't be empty</p>
                </div>

                <div className="contact__form-group">
                    <label htmlFor="phone" className="contact__label hide">Phone</label>
                    <input type="text" id="phone" className="form__input" placeholder="Phone" onChange={handleInputChange} />
                    <p className="form__error hide">Can't be empty</p>
                </div>

                <div className="contact__form-group">
                    <label htmlFor="message" className="contact__label hide">Message</label>
                    <textarea name="message" id="message" className="form__input contact__textarea" placeholder="Your Message" onChange={handleInputChange}></textarea>
                    <p className="form__error hide">Can't be empty</p>
                </div>

                <button type="submit" className="contact__btn btn">Submit</button>
            </form>
        </div>

        <Locations />
        </>
    );
};

export default Contact;
