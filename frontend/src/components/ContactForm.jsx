import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    message: ""
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMsg(response.data.message);
      setErrorMsg("");
      setFormData({ name: "", email: "", college: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("Something went wrong. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

      {successMsg && <div className="text-green-600">{successMsg}</div>}
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="text"
        name="college"
        placeholder="Your College"
        value={formData.college}
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded h-24"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
