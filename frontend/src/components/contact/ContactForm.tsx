import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/contact-form-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as Record<string, string>).toString(),
      });
      const result = await response.json();

      if (result.success) setStatus("✅ Message sent successfully!");
      else setStatus(`❌ ${result.error || "Failed to send message."}`);
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-8 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <Link to="/contact" className="text-gray-300 hover:text-white mb-8 inline-block transition-all duration-300">
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Your Phone" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-4 bg-gray-800 text-white rounded-lg h-32" />
          <button type="submit" className="px-8 py-4 bg-white text-[#0f172a] rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300">
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
      </motion.div>
    </section>
  );
}
