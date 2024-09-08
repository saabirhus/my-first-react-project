import React, {useState} from "react";
import './ContactUs.css';

const ContactUs = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form Submitted!: ", formData);

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return(
        <div className="contact-us-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
