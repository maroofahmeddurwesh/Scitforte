import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight } from "react-icons/hi";
import { FaHospitalAlt, FaHeartbeat, FaUserMd, FaPrescriptionBottleAlt } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdBiotech, MdInventory2 } from "react-icons/md";

const features = [
  "Centralized patient record management",
  "Automated appointment scheduling",
  "Efficient billing and invoicing",
  "Enhanced inter-departmental communication",
  "Inventory and supply chain management",
  "Emergency and ICU management",
  "Laboratory and radiology integration",
  "Pharmacy management module",
];

const modules = [
  { icon: <FaUserMd size={18} />, name: "Patient Management", color: "from-blue-500/20 to-cobalt/10" },
  { icon: <FaHeartbeat size={18} />, name: "Emergency Care", color: "from-red-500/20 to-cobalt/10" },
  { icon: <FaPrescriptionBottleAlt size={18} />, name: "Pharmacy", color: "from-emerald-500/20 to-cobalt/10" },
  { icon: <MdBiotech size={18} />, name: "Laboratory", color: "from-purple-500/20 to-cobalt/10" },
  { icon: <MdInventory2 size={18} />, name: "Inventory", color: "from-orange-500/20 to-cobalt/10" },
  { icon: <FaHospitalAlt size={18} />, name: "OPD/IPD", color: "from-cyan-500/20 to-cobalt/10" },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "80px",
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [{ breakpoint: 768, settings: { centerPadding: "20px" } }],
};

const HospitalManagementSystem = () => {
  return (
    <div className="bg-obsidian-deeper">
      {/* HERO */}
      <section id="heading" className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/products_bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/60 via-obsidian-deeper/70 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-tag">
            <FaHospitalAlt size={12} /> Software Product
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6">
            SmartCare <span className="gradient-text-cobalt">HMIS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-titanium text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive healthcare solution designed by ScitForte to modernize hospital operations and enhance patient care.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-tag">Modules</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-4">Complete Hospital Ecosystem</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {modules.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
                <div className={`quantum-card bg-gradient-to-br ${m.color} p-4 text-center`}>
                  <div className="w-10 h-10 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mx-auto mb-3">{m.icon}</div>
                  <p className="text-white text-xs font-semibold">{m.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description + Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="section-tag mb-4 inline-flex">Overview</span>
              <div className="cobalt-line" />
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">What is SmartCare HMIS?</h2>
              <p className="text-titanium leading-relaxed mb-6">
                SmartCare HMIS (Hospital Management Information System) is a comprehensive healthcare solution designed by ScitForte to modernize hospital operations and enhance patient care. It automates administrative tasks and streamlines patient management across all hospital departments.
              </p>
              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-titanium text-sm">
                    <RiCheckboxCircleFill size={15} className="text-cobalt flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Request Demo <HiArrowRight size={16} /></button></Link>
                <Link to="/softwareProducts"><button className="btn-glass text-sm">All Products</button></Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="liquid-glass rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />
                <h3 className="text-white font-bold font-heading mb-4">Key Benefits</h3>
                {[
                  { label: "Reduces Manual Work", pct: 80 },
                  { label: "Improves Patient Care", pct: 95 },
                  { label: "Operational Efficiency", pct: 85 },
                  { label: "Cost Reduction", pct: 70 },
                ].map((b) => (
                  <div key={b.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-titanium">{b.label}</span>
                      <span className="text-cobalt font-semibold">{b.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-cobalt to-cobalt-dim rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots note - HMS has no images, show placeholder */}
      <section className="pb-20 bg-obsidian-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 text-center">
          <span className="section-tag mb-4 inline-flex">Coming Soon</span>
          <h2 className="text-2xl font-bold font-heading text-white mb-4">Product Screenshots</h2>
          <p className="text-titanium mb-8">Detailed screenshots and demo coming soon. Request a live demo to see SmartCare HMIS in action.</p>
          <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm mx-auto">Request Live Demo <HiArrowRight size={16} /></button></Link>
        </div>
      </section>
    </div>
  );
};

export default HospitalManagementSystem;
