import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlSpeech } from "react-icons/sl";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaFacebookSquare, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const contactCards = [
  {
    icon: <SlSpeech size={28} />,
    title: "Quick Answers",
    desc: "Find brief answers to your short questions here. Our knowledge base has you covered.",
    cta: "Browse FAQ",
    href: "/faq",
    color: "from-blue-500/20 to-cobalt/10",
  },
  {
    icon: <PiPhoneCallFill size={28} />,
    title: "Let's Talk",
    desc: "Chat directly with a member of our specialist team on WhatsApp.",
    cta: "+92 306 9771771",
    href: "https://wa.me/qr/GPA5UDOGEXVUB1",
    color: "from-emerald-500/20 to-cobalt/10",
  },
  {
    icon: <FaFacebookSquare size={28} />,
    title: "We Are Social",
    desc: "Get involved in making the dream a reality. Connect with us on social media.",
    cta: "Follow Us",
    href: "https://www.facebook.com/Scitforte",
    color: "from-purple-500/20 to-cobalt/10",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First Name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone format";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      e.target.submit();
    }
  };

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'contact') {
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus(null), 5000);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div id="contact" className="bg-obsidian-deeper">

      {/* ===================== HERO ===================== */}
      <section
        id="heading"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/services_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/60 via-obsidian-deeper/70 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span variants={fadeUp} className="section-tag">Contact Us</motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6"
            >
              Get in <span className="gradient-text-cobalt">Touch</span> With Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-titanium text-lg max-w-2xl mx-auto leading-relaxed">
              We're here to answer any questions you may have and create an
              effective solution for your needs. Let's build something great together.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* ===================== CONTACT CARDS ===================== */}
      <section id="cards" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="h-full"
              >
                <a 
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full outline-none"
                >
                  <div className={`quantum-card bg-gradient-to-br ${card.color} p-6 h-full flex flex-col group`}>
                    <div className="w-12 h-12 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mb-4 group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-white font-bold font-heading text-lg mb-2">{card.title}</h3>
                    <p className="text-titanium text-sm leading-relaxed flex-grow mb-6">{card.desc}</p>
                    <div className="flex items-center gap-2 text-cobalt text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto pt-4 border-t border-cobalt/10">
                      {card.cta} <HiArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT FORM + MAP ===================== */}
      <section id="contactUS" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Left: Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag mb-6">Our Location</span>
              <div className="cobalt-line" />
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                We'd Love to <span className="gradient-text-cobalt">Hear From You!</span>
              </h2>
              <p className="text-titanium leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to explore the possibilities,
                we're here to assist you on your journey to innovation and success.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: <FaMapMarkerAlt size={14} />,
                    text: "Office #101, Building 91-C, 11th Jami Commercial Street, DHA Phase 7, Karachi.",
                  },
                  {
                    icon: <FaEnvelope size={14} />,
                    text: "info@scitforte.com",
                    href: "mailto:info@scitforte.com",
                  },
                  {
                    icon: <FaPhoneAlt size={14} />,
                    text: "+92 306 9771771",
                    href: "https://wa.me/qr/GPA5UDOGEXVUB1",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-titanium text-sm hover:text-cobalt transition-colors leading-relaxed mt-1.5">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-titanium text-sm leading-relaxed mt-1.5">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-cobalt/15 shadow-glass">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.284582344695!2d67.0646703143885!3d24.80716408408695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7c3e6b2f5d%3A0x6766e731c5643f6e!2s91%20C%2C%20Jami%20Commercial%20Street%2011%2C%20Phase%207%20Ext%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1693525160000!5m2!1sen!2sus"
                  width="100%"
                  height="280"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scitforte Location"
                />
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="liquid-glass rounded-2xl p-8 relative overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />

                <h3 className="text-2xl font-bold font-heading text-white mb-2">Send Us a Message</h3>
                <p className="text-titanium text-sm mb-8">We typically respond within 24 hours.</p>

                <form action={`${import.meta.env.VITE_API_URL}/contact`} method="POST" onSubmit={handleSubmit} className="space-y-5 relative z-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-titanium text-xs font-semibold uppercase tracking-widest mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John"
                        className={`quantum-input ${errors.first_name ? 'border-red-500/50 focus:border-red-500' : ''}`}
                      />
                      {errors.first_name && <span className="text-red-400 text-xs mt-1 block">{errors.first_name}</span>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-titanium text-xs font-semibold uppercase tracking-widest mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Doe"
                        className={`quantum-input ${errors.last_name ? 'border-red-500/50 focus:border-red-500' : ''}`}
                      />
                      {errors.last_name && <span className="text-red-400 text-xs mt-1 block">{errors.last_name}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-titanium text-xs font-semibold uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="text"
                      placeholder="john@company.com"
                      className={`quantum-input ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''}`}
                    />
                    {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-titanium text-xs font-semibold uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+92 300 0000000"
                      className={`quantum-input ${errors.phone ? 'border-red-500/50 focus:border-red-500' : ''}`}
                    />
                    {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-titanium text-xs font-semibold uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="How can we help?"
                      className={`quantum-input ${errors.subject ? 'border-red-500/50 focus:border-red-500' : ''}`}
                    />
                    {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject}</span>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-titanium text-xs font-semibold uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className={`quantum-input resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : ''}`}
                    />
                    {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>}
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl text-sm text-center">
                      Your message has been sent successfully! We'll be in touch soon.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cobalt w-full flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <HiArrowRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;