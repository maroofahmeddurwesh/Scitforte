import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { RiWindowFill, RiCheckboxCircleFill } from "react-icons/ri";
import { img22, img23, img24, img25, img26, img27, img28, img29, img30 } from "../../assets/images/ibs";

const features = [
  "Goal tracking and performance monitoring",
  "Real-time collaboration tools",
  "CRM and customer management",
  "Finance management and reporting",
  "Resource allocation and planning",
  "Meeting and MOM modules",
  "Profitability analysis dashboard",
  "Mobile access for on-the-go management",
];

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "80px",
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: <button className="slick-next"><HiArrowRight /></button>,
  prevArrow: <button className="slick-prev"><HiArrowLeft /></button>,
  responsive: [{ breakpoint: 768, settings: { centerPadding: "20px" } }],
};

const IntegratedBusinessSuite = () => {
  return (
    <div className="bg-obsidian-deeper">
      {/* HERO */}
      <section id="heading" className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/products_bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/60 via-obsidian-deeper/70 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-tag">
            <RiWindowFill size={14} /> Software Product
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Integrated <span className="gradient-text-cobalt">Business Suite</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-titanium text-lg max-w-3xl mx-auto leading-relaxed">
            Introducing our all-in-one Business Strategy and Collaboration Platform to enhance organizational efficiency.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* Description + Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="section-tag mb-4 inline-flex">Overview</span>
              <div className="cobalt-line" />
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">What is IBS?</h2>
              <p className="text-titanium leading-relaxed mb-8">
                It features goal tracking, real-time collaboration, CRM, finance management, and resource allocation. With integrated meeting and MOM modules, profitability analysis, and mobile access, the platform streamlines planning, execution, and communication while ensuring security and ease of use.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-titanium text-sm">
                    <RiCheckboxCircleFill size={16} className="text-cobalt flex-shrink-0" /> {f}
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
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Real-time Collab", val: "✓" }, { label: "Mobile Access", val: "✓" },
                    { label: "Finance Mgmt", val: "✓" }, { label: "CRM Module", val: "✓" },
                    { label: "Resource Planning", val: "✓" }, { label: "MOM Tracking", val: "✓" },
                  ].map((item) => (
                    <div key={item.label} className="bg-cobalt/5 border border-cobalt/15 rounded-xl p-4 text-center">
                      <div className="text-cobalt text-lg font-bold mb-1">{item.val}</div>
                      <div className="text-titanium text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Slider */}
      <section className="pb-20 bg-obsidian-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
          <div className="text-center mb-10">
            <span className="section-tag">Screenshots</span>
            <h2 className="text-2xl font-bold font-heading text-white mt-4">Product Gallery</h2>
          </div>
          <Slider {...sliderSettings}>
            {[img22, img23, img24, img25, img26, img27, img28, img29, img30].map((img, i) => (
              <div key={i} className="px-2">
                <div className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
                  <img src={img} alt={`IBS Screenshot ${i + 1}`} className="w-full rounded-xl object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default IntegratedBusinessSuite;