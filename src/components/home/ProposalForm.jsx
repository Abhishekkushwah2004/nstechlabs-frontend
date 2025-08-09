import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProposalForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false); // 💡 lock while submitting
    const [sentMail, setSentMail] = useState(false);         // ✅ prevent duplicate submit
    const API_URL = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        mobile: '',
        budget: '1000',
        proposalOption: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting || sentMail) return; // 🚫 prevent duplicate call

        setIsSubmitting(true); // 🔒 Lock the form immediately

        try {

            await axios.post(`${API_URL}/contact/proposal`, formData);
            toast(
                <div>
                    <strong>Hello {formData.name}.<br /> 🎉 Welcome to NS TechLabs!</strong>
                    <div>Thanks for reaching out. Our team will respond shortly.</div>
                </div>,
                { position: 'top-right', autoClose: 4000, className: 'custom-toast', closeButton: true }
            );
            setSentMail(true);
            setFormData({ fullName: "", email: "", subject: '', mobile: "", message: "", budget: "", proposalOption: "" });

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!");
        } finally {
            setIsSubmitting(false);
            setSentMail(false) // 🔓 Allow resubmission (if you want)
        }

    }

    return (
        <section className="proposal-form-section py-5 proposal-form-wrapper">
            <div className="container">
                <h6 style={{ color: '#0F0F57', margin: '10px' }} className='h6_30'>Request a proposal</h6>
                <form onSubmit={handleSubmit} className="row g-3 proposal-form">
                    <div className="col-md-6 col-lg-6">
                        <input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            className="form-control"
                            placeholder="Full Name *"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <input
                            id="email"
                            name="email"
                            value={formData.email}
                            className="form-control"
                            placeholder="Email Address *"
                            onChange={handleChange}
                            required
                            type="email"
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            className="form-control"
                            onChange={handleChange}
                            placeholder="Subject *"
                            required
                        />
                    </div>

                    <div className="col-md-6 d-flex">
                        <div className="input-group">
                            <input
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                className="form-control"
                                placeholder="Mobile Number"
                                onChange={handleChange}
                                type="tel"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label d-block">Approx. budget: {formData.budget.toLocaleString()} USD</label>
                        <input
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            type="range"
                            min="100"
                            max="10000"
                            step="50"
                            className="form-range"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12">
                        <h3 style={{ color: '#0F0F57', margin: "10px" }}>What are you Looking for ?</h3>

                        <div className="row checks">
                            {[
                                "Web Development", "Web Design", "Ui/Ux Design",
                                "Frontend", "Backend", "DataBase Manage", "Hire Dedicated Developer", "Partnership Opportunities"
                            ].map((option, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="form-check">
                                        <input
                                            className='form-check-input'
                                            type="radio"
                                            name="proposalOption"
                                            id={`proposalOption${index}`}
                                            value={option}
                                            checked={formData.proposalOption === option}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor={`proposalOption${index}`}>
                                            {option}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            className="form-control"
                            onChange={handleChange}
                            placeholder="Your message *"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button
                            className="poppins-regular mt-3"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send your Inquiry →"}
                        </button>
                    </div>
                </form>

                <div className="text-center mt-5">
                    <h3 style={{ color: '#0F0F57', margin: "10px" }}>We Deliver</h3>
                    <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">
                        {[
                            { label: "Best Price", icon: "💰" },
                            { label: "Quality Service", icon: "🏅" },
                            { label: "Good Support", icon: "🎧" },
                            { label: "Satisfaction", icon: "👍" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProposalForm;
