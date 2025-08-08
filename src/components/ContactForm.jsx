import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // 💡 lock while submitting
  const [sentMail, setSentMail] = useState(false);         // ✅ prevent duplicate submit
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || sentMail) return; // 🚫 prevent duplicate call

    setIsSubmitting(true); // 🔒 Lock the form immediately

    try {
      await axios.post(`${API_URL}/contact`, formData);
      toast(
      <div>
        <strong>Hello {formData.name}.<br /> 🎉 Welcome to NS TechLabs!</strong>
        <div>Thanks for reaching out. Our team will respond shortly.</div>
      </div>,
      { position: 'top-right', autoClose: 4000, className: 'custom-toast', closeButton: true }
    );
      setSentMail(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
      setSentMail(false) // 🔓 Allow resubmission (if you want)
    }
  };



  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message*"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="button">
          <button type="submit" disabled={isSubmitting || sentMail}>
            {sentMail ? "Message Sent" : isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;