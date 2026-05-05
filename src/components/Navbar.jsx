import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook, FaLinkedin, FaInstagram,
  FaBars, FaTimes, FaChevronDown,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const services = {
  digitalMarketing: {
    label: "Digital Marketing",
    href: "/digitalMarketing",
    items: [
      { name: "Search Engine Optimization", href: "/service/search-engine-optimization" },
      { name: "Content Marketing", href: "/service/content-marketing" },
      { name: "Social Media Marketing", href: "/service/social-media-marketing" },
      { name: "Affiliate Marketing", href: "/service/affiliate-marketing" },
      { name: "Mobile Marketing", href: "/service/mobile-marketing" },
    ],
  },
  itServices: {
    label: "IT Services",
    href: "/itServices",
    items: [
      { name: "Design & Development", href: "/service/design-and-development" },
      { name: "Cloud Computing Services", href: "/service/cloud-computing-services" },
      { name: "Software Development", href: "/service/software-development" },
      { name: "Web Hosting", href: "/service/web-hosting" },
      { name: "Domain Registration", href: "/service/domain-registration" },
    ],
  },
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/softwareProducts" },
  { name: "Our Affiliations", href: "/ourAffiliations" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-obsidian-deeper/95 backdrop-blur-xl border-b border-cobalt/10 shadow-glass"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/new-logo.png"
                alt="Scitforte Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/"
                className={`nav-link px-2 py-2 rounded-md text-base font-medium transition-colors ${isActive("/") ? "text-cobalt" : "text-white/80 hover:text-cobalt"}`}
              >
                Home
              </Link>
              <div className="w-1 h-1 rounded-full bg-cobalt/30" />
              <Link
                to="/about"
                className={`nav-link px-2 py-2 rounded-md text-base font-medium transition-colors ${isActive("/about") ? "text-cobalt" : "text-white/80 hover:text-cobalt"}`}
              >
                About
              </Link>
              <div className="w-1 h-1 rounded-full bg-cobalt/30" />

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef} onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <Link
                  to="/services"
                  className={`flex items-center gap-1.5 px-2 py-2 rounded-md text-base font-medium transition-colors ${location.pathname.includes("Services") || location.pathname.includes("Marketing") || location.pathname === "/services"
                      ? "text-cobalt" : "text-white/80 hover:text-cobalt"
                    }`}
                >
                  Services
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] liquid-glass-dark rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-cobalt/15"
                    >
                      {/* Cobalt top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt to-transparent rounded-t-2xl" />

                      <div className="grid grid-cols-2 gap-6">
                        {Object.values(services).map((cat) => (
                          <div key={cat.label}>
                            <Link
                              to={cat.href}
                              className="flex items-center gap-2 text-cobalt font-semibold text-sm uppercase tracking-widest mb-3 hover:text-cobalt-dim transition-colors"
                            >
                              <span className="w-4 h-px bg-cobalt inline-block" />
                              {cat.label}
                            </Link>
                            <ul className="space-y-2">
                              {cat.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="flex items-center gap-2 text-titanium text-sm hover:text-white hover:translate-x-1 transition-all duration-200 group"
                                  >
                                    <HiArrowRight size={12} className="text-cobalt/50 group-hover:text-cobalt transition-colors" />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-1 h-1 rounded-full bg-cobalt/30" />

              <Link
                to="/softwareProducts"
                className={`nav-link px-2 py-2 rounded-md text-base font-medium transition-colors ${isActive("/softwareProducts") ? "text-cobalt" : "text-white/80 hover:text-cobalt"}`}
              >
                Products
              </Link>
              <div className="w-1 h-1 rounded-full bg-cobalt/30" />
              <Link
                to="/ourAffiliations"
                className={`nav-link px-2 py-2 rounded-md text-base font-medium transition-colors ${isActive("/ourAffiliations") ? "text-cobalt" : "text-white/80 hover:text-cobalt"}`}
              >
                Affiliations
              </Link>
            </div>

            {/* Right Side: CTA */}
            <div className="hidden lg:flex items-center">
              <Link to="/contact">
                <button className="btn-cobalt text-sm py-3 px-6 shadow-cobalt-sm hover:shadow-cobalt-md">Get in Touch</button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white/80 hover:text-cobalt transition-colors p-2"
            >
              {isMobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm z-50 lg:hidden"
              style={{ background: "rgba(10, 18, 22, 0.98)", backdropFilter: "blur(20px)", borderRight: "1px solid rgba(0,207,255,0.15)" }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between p-5 border-b border-cobalt/10">
                <img src="/new-logo.png" alt="Scitforte" className="h-8 object-contain" />
                <button onClick={() => setIsMobileOpen(false)} className="text-white/60 hover:text-cobalt">
                  <FaTimes size={20} />
                </button>
              </div>

              <nav className="p-5 flex flex-col gap-1 overflow-y-auto h-full pb-24">
                {navLinks.map((link) => {
                  if (link.name === "Services") return null;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all ${isActive(link.href)
                          ? "bg-cobalt/10 text-cobalt border border-cobalt/20"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {link.name}
                      {isActive(link.href) && <HiArrowRight size={14} className="text-cobalt" />}
                    </Link>
                  );
                })}

                {/* Services Accordion */}
                <div>
                  <div className="flex items-center justify-between w-full rounded-xl text-white/70 hover:bg-white/5 transition-all pr-2">
                    <Link to="/services" onClick={() => setIsMobileOpen(false)} className="flex-1 px-4 py-3.5 font-medium hover:text-white">
                      Services
                    </Link>
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="p-3 hover:bg-white/10 rounded-lg">
                      <FaChevronDown size={12} className={`transition-transform ${mobileServicesOpen ? "rotate-180 text-cobalt" : ""}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-1 pb-2 flex flex-col gap-1">
                          {Object.values(services).map((cat) => (
                            <div key={cat.label} className="mb-2">
                              <Link
                                to={cat.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="text-cobalt text-xs uppercase tracking-widest font-semibold px-4 py-2 block"
                              >
                                {cat.label}
                              </Link>
                              {cat.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-4 px-4">
                  <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                    <button className="btn-cobalt w-full text-sm">Get in Touch</button>
                  </Link>
                  <div className="flex items-center justify-center gap-5 mt-6">
                    <a href="https://www.facebook.com/Scitforte" target="_blank" rel="noopener noreferrer"
                      className="text-white/40 hover:text-cobalt transition-colors"><FaFacebook size={18} /></a>
                    <a href="https://www.linkedin.com/company/scitforte/mycompany/" target="_blank" rel="noopener noreferrer"
                      className="text-white/40 hover:text-cobalt transition-colors"><FaLinkedin size={18} /></a>
                    <a href="https://www.instagram.com/scitforte?igsh=Zmp3aW5yaDQxaG05" target="_blank" rel="noopener noreferrer"
                      className="text-white/40 hover:text-cobalt transition-colors"><FaInstagram size={18} /></a>
                  </div>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
