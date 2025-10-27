// src/components/contact/SubscribeForm.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("formType", "subscribe"); // ✅ correct key for PHP

    try {
      const res = await fetch("https://putusproduction.com/contact-form-handler.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (data.success) {
        setStatus("success");
        if (e.currentTarget && typeof e.currentTarget.reset === "function") {
          e.currentTarget.reset();
        }
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-8 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <Link
          to="/contact"
          className="text-gray-300 hover:text-white mb-8 inline-block transition-all duration-300"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mb-8">Subscribe</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 text-white rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 text-white rounded-lg"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-4 bg-white text-[#0f172a] rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
          >
            {status === "loading" ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 mt-4">✅ Subscription successful!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4">❌ Something went wrong. Please try again.</p>
        )}
      </motion.div>
    </section>
  );
}
