import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import { GrSystem } from "react-icons/gr";
import { FaHospitalAlt, FaLeaf } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { RiWindowFill, RiCheckboxCircleFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";

import img1 from "../../assets/images/rems/image1.png";
import img2 from "../../assets/images/meesaq/image24.png";
import img3 from "../../assets/images/ibs/image8.png";
import img4 from "../../assets/images/osprey/image21.png";
import img5 from "../../assets/images/livestock/image25.png";

const navItems = [
  { id: "institueBS", label: "IMS", icon: <GrSystem size={18} /> },
  { id: "REMS", label: "REMS", icon: <BiSolidBuildingHouse size={18} /> },
  { id: "HMS", label: "HMS", icon: <FaHospitalAlt size={18} /> },
  { id: "ESG", label: "ESG", icon: <FaLeaf size={18} /> },
  { id: "ERP", label: "ERP", icon: <FaBuildingUser size={18} /> },
  { id: "IBS", label: "IBS", icon: <RiWindowFill size={18} /> },
];

const productSections = [
  {
    id: "institueBS",
    title: "Institute Management System",
    short: "IMS",
    desc: "Enhance institutional efficiency and academic excellence with a comprehensive system that organizes and manages student records, faculty, and administration — creating a more cohesive and responsive educational experience.",
    bullets: [],
    img: img4,
    href: "/softwareProducts/ims",
    reverse: false,
  },
  {
    id: "REMS",
    title: "Real Estate Management System",
    short: "REMS",
    desc: "Streamline real estate operations and boost client engagement with a comprehensive system that organizes property management tasks — creating a more integrated and effective real estate management experience.",
    bullets: [],
    img: img1,
    href: "/softwareProducts/rems",
    reverse: true,
  },
  {
    id: "HMS",
    title: "Hospital Management System",
    short: "HMS",
    desc: "Optimize healthcare operations and improve patient care with a robust Hospital Management System that automates administrative tasks and streamlines patient management.",
    bullets: [
      "Centralized patient record management",
      "Automated appointment scheduling",
      "Efficient billing and invoicing",
      "Enhanced communication between departments",
      "Inventory and supply chain management",
    ],
    img: new URL("../../assets/images/products/IMS.jpg", import.meta.url).href,
    href: "/softwareProducts/hms",
    reverse: false,
    isUrl: true,
  },
  {
    id: "ESG",
    title: "Environment, Social and Governance",
    short: "ESG",
    desc: "Integrate sustainability into your business with a comprehensive ESG strategy that drives ethical practices, enhances corporate responsibility, and fosters long-term stakeholder trust.",
    bullets: [],
    img: img2,
    href: "/softwareProducts/esg",
    reverse: true,
  },
  {
    id: "ERP",
    title: "Enterprise Resource Planning",
    short: "ERP",
    desc: "Streamline business processes, integrate departments, and enhance overall efficiency through a comprehensive software solution that manages resources, finances, and operations seamlessly.",
    bullets: [],
    img: img5,
    href: "/softwareProducts/erp",
    reverse: false,
  },
  {
    id: "IBS",
    title: "Integrated Business Suite",
    short: "IBS",
    desc: "Maximize operational efficiency with an Integrated Business Suite that seamlessly connects your business processes, enhances data flow, and drives informed decision-making across all departments.",
    bullets: [
      "Unified data management",
      "Streamlined workflow automation",
      "Enhanced real-time reporting",
    ],
    img: img3,
    href: "/softwareProducts/ibs",
    reverse: true,
  },
];

const stats = [
  { end: 20, suffix: "+", label: "Team Members" },
  { end: 12, suffix: "+", label: "Years Experience" },
  { end: 150, suffix: "%", label: "Growth Rate" },
  { end: 320, suffix: "+", label: "Projects Done" },
];

const Products = () => {
  const [activeSection, setActiveSection] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <div id="products" className="bg-obsidian-deeper">

      {/* ===================== HERO ===================== */}
      <section
        id="heading"
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/products_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/55 via-obsidian-deeper/65 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="section-tag"
            >
              Software Products
            </motion.span>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6"
            >
              Scitforte{" "}
              <span className="gradient-text-cobalt">Software Products</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } } }}
              className="text-titanium text-lg max-w-3xl mx-auto leading-relaxed"
            >
              We offer innovative solutions with intuitive interfaces and robust backend systems
              to streamline operations and boost efficiency — empowering businesses to thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* ===================== STICKY PRODUCT NAV ===================== */}
      <section id="productsNav" className="sticky top-20 md:top-24 z-30">
        <div className="bg-obsidian-deeper/90 backdrop-blur-xl border-b border-cobalt/10 shadow-glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex flex-col items-center gap-1.5 px-5 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 flex-shrink-0 ${
                    activeSection === item.id
                      ? "text-cobalt border-cobalt"
                      : "text-titanium/70 border-transparent hover:text-cobalt hover:border-cobalt/40"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCT SECTIONS ===================== */}
      {productSections.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className="section-layout py-16 px-4"
          style={{ background: idx % 2 === 0 ? "rgba(15,26,31,0.5)" : "transparent" }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${product.reverse ? "lg:grid-flow-dense" : ""}`}>
              {/* Text */}
              <Fade direction={product.reverse ? "right" : "left"} triggerOnce>
                <div className={product.reverse ? "lg:col-start-2" : ""}>
                  <span className="section-tag mb-4 inline-flex">{product.short}</span>
                  <div className="cobalt-line" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-titanium leading-relaxed mb-6">{product.desc}</p>
                  {product.bullets.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {product.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-titanium text-sm">
                          <RiCheckboxCircleFill size={16} className="text-cobalt flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to={product.href}>
                    <button className="btn-cobalt flex items-center gap-2 text-sm">
                      Learn More <HiArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </Fade>

              {/* Image */}
              <Fade direction={product.reverse ? "left" : "right"} triggerOnce>
                <div className={product.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1"
                  >
                    <img
                      src={product.isUrl ? product.img : product.img}
                      alt={product.title}
                      className="w-full rounded-xl object-cover shadow-glass"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deeper/30 to-transparent rounded-xl pointer-events-none" />
                  </motion.div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      ))}

      {/* ===================== STATS + CTA ===================== */}
      <section ref={ref} className="section-padding bg-obsidian-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-tag mb-6">Our Impact</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-12">
            Numbers That <span className="gradient-text-cobalt">Speak For Us</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="text-3xl sm:text-4xl font-bold font-heading gradient-text-cobalt mb-1">
                  {inView ? <CountUp end={s.end} duration={2} suffix={s.suffix} /> : `0${s.suffix}`}
                </div>
                <div className="text-titanium text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
              Create Something <span className="gradient-text-cobalt">Remarkable</span>
            </h3>
            <p className="text-titanium mb-8 leading-relaxed">
              We are a software-based organization that translates your business into a global,
              digitally-oriented strategy. Schedule an appointment to discuss your goals and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-cobalt flex items-center gap-2 text-sm">
                  Connect With Us <HiArrowRight size={16} />
                </button>
              </Link>
              <Link to="/about">
                <button className="btn-glass text-sm">Learn About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;