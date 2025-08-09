import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    mobile: "",
    budget: "1000",
    proposalOption: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Sending form data:", formData); // Debugging
      const res = await axios.post(`${API_URL}/contact/proposal`, formData);

      toast.success(res.data?.message || "Proposal sent successfully!");

      // Reset all fields correctly
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        mobile: "",
        budget: "1000",
        proposalOption: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting proposal:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Example field */}
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      {/* Add your other fields here */}

      <button
        type="submit"
        className="poppins-regular mt-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send your Inquiry →"}
      </button>
    </form>
  );
};

export default ProposalForm;
