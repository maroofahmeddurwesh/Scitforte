import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const affiliations = [
  {
    name: "PASHA",
    full: "Pakistan Software Houses Association",
    src: new URL("../../assets/images/affiliations/pasha-logo-one.jpg", import.meta.url).href,
  },
  {
    name: "PSEB",
    full: "Pakistan Software Export Board",
    src: new URL("../../assets/images/affiliations/PSEB.png", import.meta.url).href,
  },
  {
    name: "CXO",
    full: "CXO Global Alliance",
    src: new URL("../../assets/images/affiliations/CXO.png", import.meta.url).href,
  },
];

const Affiliations = () => {
  return (
    <div id="affiliations" className="bg-obsidian-deeper">

      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/65 via-obsidian-deeper/75 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="section-tag"
            >
              Our Affiliations
            </motion.span>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6"
            >
              Trusted <span className="gradient-text-cobalt">Industry Partners</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } } }}
              className="text-titanium text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Scitforte is proud to be affiliated with some of the most prestigious industry
              organizations in Pakistan's technology sector.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* AFFILIATIONS GRID */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {affiliations.map((aff, i) => (
              <motion.div
                key={aff.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="quantum-card p-8 flex flex-col items-center text-center"
              >
                <div className="bg-white rounded-xl p-4 mb-6 w-32 h-24 flex items-center justify-center">
                  <img
                    src={aff.src}
                    alt={aff.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-white font-bold font-heading text-xl mb-1">{aff.name}</h3>
                <p className="text-titanium text-sm leading-relaxed">{aff.full}</p>
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-transparent via-cobalt to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="liquid-glass rounded-2xl p-10 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />
              <span className="section-tag mb-4">Our Commitment</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                Part of Pakistan's <span className="gradient-text-cobalt">Tech Ecosystem</span>
              </h2>
              <p className="text-titanium leading-relaxed mb-8">
                These affiliations reflect our commitment to maintaining the highest standards in
                software development and digital services. We actively participate in industry events,
                share knowledge, and contribute to the growth of Pakistan's technology sector.
              </p>
              <a href="/contact">
                <button className="btn-cobalt flex items-center gap-2 text-sm mx-auto">
                  Partner With Us <HiArrowRight size={16} />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Affiliations;
