import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SubscribeForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("formType", "subscribe");

    try {
      const res = await fetch("https://putusproduction.com/contact-form-handler.php", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("✅ Subscription successful!");
        e.currentTarget.reset();
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again later.");
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

        <h1 className="text-4xl font-bold mb-8">Subscribe</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" type="text" placeholder="Your Name" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <input name="email" type="email" placeholder="Your Email" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <button type="submit" className="px-8 py-4 bg-white text-[#0f172a] rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300">
            Subscribe
          </button>
        </form>

        {status && <p className="mt-4 text-lg">{status}</p>}
      </motion.div>
    </section>
  );
}
