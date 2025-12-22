import React, { useState } from "react";
import { PhoneIcon, SealCheckIcon,  WhatsappLogoIcon } from "@phosphor-icons/react";
import Button from "../button/Button";

interface FormData {
    name: string;
        phone: string;
    city: string;
    date: string;
}

const Contact = () => {
    const initialData: FormData = {
        name: "",
        phone: "",
        city: "",
        date: "",
    };

    const [formData, setFormData] = useState<FormData>(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="booking">
            <div className="container">
                <div className="booking__wrapper">
                    <div className="booking__content">
                        <span className="booking__subtitle">BOOK NOW</span>
                        <h2 className="booking__title">
                            Book Your Hair Transplant Consultation in Kochi Today
                        </h2>
                        <p className="booking__desc">
                            Hair loss increases with time, early treatment gives better results.
                        </p>
                        <div className="booking__benefits">
                            <h4>What Do You Get?</h4>
                            <ul>
                                <li>
                                    <SealCheckIcon size={24} weight="fill" color="#22c55e" />
                                    <span>Free hair & scalp analysis</span>
                                </li>
                                <li>
                                    <SealCheckIcon size={24} weight="fill" color="#22c55e" />
                                    <span>One-to-one doctor consultation</span>
                                </li>
                                <li>
                                    <SealCheckIcon size={24} weight="fill" color="#22c55e" />
                                    <span>Personalized treatment plan</span>
                                </li>
                            </ul>
                        </div>
                        <div className="booking__buttons">
                            <Button href="tel:+917025250024">
                                <PhoneIcon size={20} weight="fill" />
                                Call Now
                            </Button>
                            <Button theme="chat" href="https://wa.me/917025250024">
                                <WhatsappLogoIcon size={20} weight="fill" />
                                WhatsApp Us
                            </Button>
                        </div>
                    </div>
                    <div className="booking__form-wrapper">
                        <form className="booking__form" onSubmit={handleSubmit}>
                            <div className="booking__field">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="booking__field">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="booking__field">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="booking__field">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <Button theme="outline" type="submit">Book Now</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
