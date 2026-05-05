import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About Scitforte", href: "/about" },
      { name: "Our Affiliations", href: "/ourAffiliations" },
      { name: "Contact Us", href: "/contact" },
      { name: "Client Review", href: "/client-review" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Search Engine Optimization", href: "/service/search-engine-optimization" },
      { name: "Digital Marketing", href: "/digitalMarketing" },
      { name: "Software Development", href: "/service/software-development" },
      { name: "Cloud Computing", href: "/service/cloud-computing-services" },
    ],
  },
  products: {
    title: "Products",
    links: [
      { name: "Institute Management (IMS)", href: "/softwareProducts/ims" },
      { name: "Real Estate (REMS)", href: "/softwareProducts/rems" },
      { name: "Hospital Management (HMS)", href: "/softwareProducts/hms" },
      { name: "ESG Platform", href: "/softwareProducts/esg" },
      { name: "Integrated Business (IBS)", href: "/softwareProducts/ibs" },
      { name: "Enterprise Resource (ERP)", href: "/softwareProducts/erp" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-obsidian-deeper border-t border-cobalt/10 overflow-hidden">
      {/* Cobalt top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />

      {/* Background circuit pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0,207,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <img src="/new-logo.png" alt="Scitforte" className="h-10 w-auto object-contain mb-4" />
            <p className="text-titanium text-sm leading-relaxed mb-6 max-w-sm">
              At Scitforte, we craft purposeful software that drives meaningful impact. Pioneering tomorrow's solutions for businesses worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              {[
                { icon: <FaFacebook size={16} />, href: "https://www.facebook.com/Scitforte", label: "Facebook" },
                { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/company/scitforte/mycompany/", label: "LinkedIn" },
                { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/scitforte?igsh=Zmp3aW5yaDQxaG05", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-cobalt/20 text-titanium hover:text-cobalt hover:border-cobalt/50 hover:shadow-cobalt-sm transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.values(footerLinks).map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-cobalt inline-block" />
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="flex items-center gap-2 text-titanium text-sm hover:text-cobalt hover:translate-x-1 transition-all duration-200 group"
                      >
                        <HiArrowRight size={12} className="text-cobalt/30 group-hover:text-cobalt transition-colors flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-cobalt/10 pt-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 rounded-md bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt flex-shrink-0 mt-0.5">
              <FaMapMarkerAlt size={14} />
            </div>
            <p className="text-titanium text-xs leading-relaxed max-w-sm pt-1">
              Office #101, Building 91-C, 11th Jami Commercial Street, DHA Phase 7, Karachi
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt flex-shrink-0">
                <FaEnvelope size={14} />
              </div>
              <a href="mailto:info@scitforte.com" className="text-titanium text-xs hover:text-cobalt transition-colors">
                info@scitforte.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt flex-shrink-0">
                <FaPhone size={14} />
              </div>
              <a href="https://wa.me/qr/GPA5UDOGEXVUB1" target="_blank" rel="noopener noreferrer" className="text-titanium text-xs hover:text-cobalt transition-colors">
                +92 306 9771771
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cobalt/10 pt-8 pb-4 flex items-center justify-center text-center">
          <p className="text-titanium text-sm md:text-base font-medium">
            © 2025 Scitforte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
