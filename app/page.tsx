"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xzzgqkqr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus("Message sent successfully!");
      form.reset();
    } catch (err) {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-slate-900 text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            ZedCore <span className="text-blue-300">Innovations</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-300 transition">
              About
            </a>
            <a href="#services" className="hover:text-blue-300 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-blue-300 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-300 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* HERO */}
      <section className="text-center py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]"></div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          ZedCore Innovations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Innovating Secure Digital Solutions in Software, Cybersecurity & AI
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 rounded-xl font-semibold"
        >
          Get In Touch
        </motion.a>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold mb-6"
        >
          About Us
        </motion.h2>
        <p className="text-base leading-7 text-gray-200">
          ZedCore Innovations is a Lusaka-based technology company founded by
          Pius Mwila Kabinda. We specialize in software engineering,
          cybersecurity, and artificial intelligence solutions. We build secure,
          scalable, and modern systems tailored to business needs.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Software Development", "Cybersecurity", "AI Solutions"].map(
            (service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black p-8 rounded-2xl shadow-lg"
              >
                <h3 className="font-bold text-xl mb-3">{service}</h3>
                <p>
                  Professional solutions tailored to your business needs using
                  modern technologies.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Inventory Management System",
            "Hand Gesture Recognition (AI)",
            "System Monitoring Script",
            "Web Security Testing",
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black p-8 rounded-2xl shadow-lg"
            >
              {project}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl text-black"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-xl text-black h-32"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 py-3 rounded-xl font-semibold"
          >
            Send Message
          </button>

          {status && <p className="text-center">{status}</p>}
        </form>

        <div className="text-center mt-8 text-gray-300">
          <p>Email: kabindapius@gmail.com</p>
          <p>Phone: +260 776 109 640</p>
          <p>Lusaka, Zambia</p>
        </div>
      </section>
    </div>
  );
}
