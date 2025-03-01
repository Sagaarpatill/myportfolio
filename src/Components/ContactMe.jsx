import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Failed to send email:", err);
          setError(true);
          setSuccess(false);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#cfed63] py-20 px-4 sm:px-0"
    >
      <h1 className="uppercase text-[10vw] sm:text-[8vw] leading-[9vw] sm:leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-semibold text-gray-800 mb-8 sm:mb-10">
        Contact
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-[90%] sm:max-w-[50%]">
        <form className="flex flex-col space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="text-green-600 text-center">Message sent successfully!</p>}
          {error && <p className="text-red-600 text-center">Failed to send message. Try again later.</p>}
        </form>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
        <a href="https://www.linkedin.com/in/sagar-patil-b2a0b0223/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl sm:text-3xl hover:scale-110 transition">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Sagaarpatill" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-2xl sm:text-3xl hover:scale-110 transition">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://leetcode.com/u/Sagar1904/" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-2xl sm:text-3xl hover:scale-110 transition">
          <i className="fas fa-code"></i>
        </a>
      </div>

      {/* Gmail and Phone Number (Smaller on Mobile) */}
      <div className="mt-8 sm:mt-10 text-center">
        <p className="text-base sm:text-xl font-semibold text-gray-800">
          📩 Email:{" "}
          <a href="mailto:sagarmpatil1904@gmail.com" className="text-blue-600 underline">
            sagarmpatil1904@gmail.com
          </a>
        </p>
        <p className="text-base sm:text-xl font-semibold text-gray-800">
          📞 Phone:{" "}
          <a href="tel:+919653427215" className="text-blue-600 underline">
            +91 96534 27215
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactMe;
