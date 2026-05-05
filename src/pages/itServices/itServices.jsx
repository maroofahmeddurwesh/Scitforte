import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { MdHttp, MdConnectedTv } from "react-icons/md";
import { SiStackshare } from "react-icons/si";
import { FaCloud, FaCode, FaMobile, FaDatabase, FaHeartbeat, FaRobot } from "react-icons/fa";

import webServiceImage from "../../assets/images/itServices/webService.jpg";
import databaseManagementImage from "../../assets/images/itServices/db.jpg";
import mobileDevelopmentImage from "../../assets/images/itServices/mobileDev.jpg";
import fintechImage from "../../assets/images/itServices/finance.jpg";
import healthTechImage from "../../assets/images/itServices/health.jpg";
import ets from "../../assets/images/itServices/ets.jpg";
import maintainence from "../../assets/images/itServices/maintainence.jpg";
import cloud from "../../assets/images/itServices/cloud.jpg";
import vr from "../../assets/images/itServices/vr.jpg";
import data from "../../assets/images/itServices/data.jpg";
import ecommerce from "../../assets/images/itServices/services3/ecommerce.jpg";
import da from "../../assets/images/itServices/services3/da.jpg";
import cyber from "../../assets/images/itServices/services3/cyber.jpg";
import digital from "../../assets/images/itServices/services3/digital.jpg";
import itImg from "../../assets/images/itServices/services3/it.jpg";

const stats = [
  { end: 20, suffix: "+", label: "Team Members" },
  { end: 12, suffix: "+", label: "Years Experience" },
  { end: 150, suffix: "%", label: "Growth Rate" },
  { end: 320, suffix: "+", label: "Projects Done" },
];

const InteractiveServiceSection = ({ id, title, intro, cards, defaultImg }) => {
  const [selected, setSelected] = useState(defaultImg);
  return (
    <section id={id} className="section-padding border-b border-cobalt/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="cobalt-line" />
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">{title}</h2>
          <p className="text-titanium max-w-2xl text-sm">{intro}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {cards.map((c) => (
              <div key={c.title} onClick={() => setSelected(c.image)}
                className={`quantum-card p-4 cursor-pointer transition-all duration-300 ${selected === c.image ? "border-cobalt/50 shadow-cobalt-sm" : ""}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-cobalt transition-all ${selected === c.image ? "bg-cobalt/20 border border-cobalt/40" : "bg-cobalt/8 border border-cobalt/10"}`}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm mb-1 transition-colors ${selected === c.image ? "text-cobalt" : "text-white"}`}>{c.title}</h3>
                    <p className="text-titanium text-xs leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-28">
            <motion.div key={selected} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
              <img src={selected} alt="Service preview" className="w-full rounded-xl object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ItServices = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const cardSet1 = [
    { title: "Web Services for any Business", description: "Tailored web solutions for a variety of businesses.", image: webServiceImage, icon: <CgWebsite size={16} /> },
    { title: "Database Management", description: "Efficient handling and optimization of databases.", image: databaseManagementImage, icon: <FaDatabase size={16} /> },
    { title: "Mobile Development", description: "Native and cross-platform mobile applications for iOS & Android.", image: mobileDevelopmentImage, icon: <FaMobile size={16} /> },
    { title: "Financial Technology (FinTech)", description: "Online payment solutions and digital wallets.", image: fintechImage, icon: <FaCode size={16} /> },
    { title: "HealthTech Services", description: "Telemedicine solutions and health information systems.", image: healthTechImage, icon: <FaHeartbeat size={16} /> },
  ];

  const cardSet2 = [
    { title: "Education Technology Services", description: "E-learning platforms and Learning Management Systems (LMS).", image: ets, icon: <FaCode size={16} /> },
    { title: "Maintenance Support", description: "Ongoing support to ensure software stays up-to-date.", image: maintainence, icon: <FaRobot size={16} /> },
    { title: "Cloud Services", description: "Cloud platform integration for scalability and efficiency.", image: cloud, icon: <FaCloud size={16} /> },
    { title: "Virtual & Augmented Reality", description: "VR/AR app development and simulation solutions.", image: vr, icon: <MdConnectedTv size={16} /> },
    { title: "Data Storage & Backup", description: "Cloud storage and data backup and recovery.", image: data, icon: <FaDatabase size={16} /> },
  ];

  const cardSet3 = [
    { title: "E-commerce Solutions", description: "Online store development and payment gateway integration.", image: ecommerce, icon: <CgWebsite size={16} /> },
    { title: "Data Analytics & BI", description: "Data analysis and business intelligence solutions.", image: da, icon: <FaDatabase size={16} /> },
    { title: "Cybersecurity Services", description: "Network security, penetration testing and security consulting.", image: cyber, icon: <FaCode size={16} /> },
    { title: "Digital Transformation", description: "Strategy consulting and digital technology implementation.", image: digital, icon: <FaRobot size={16} /> },
    { title: "Managed IT Services", description: "IT infrastructure management and helpdesk support.", image: itImg, icon: <MdHttp size={16} /> },
  ];

  const quickCards = [
    { icon: <CgWebsite size={22} />, title: "Domain Registration", desc: "Professional domain registration for your brand.", color: "from-blue-500/20 to-cobalt/10" },
    { icon: <MdHttp size={22} />, title: "Web Hosting", desc: "Shared, VPS, and dedicated server hosting.", color: "from-purple-500/20 to-cobalt/10" },
    { icon: <MdConnectedTv size={22} />, title: "Live Streaming", desc: "Live streaming and video-on-demand platforms.", color: "from-emerald-500/20 to-cobalt/10" },
    { icon: <SiStackshare size={22} />, title: "Blockchain Services", desc: "Blockchain development and cryptocurrency solutions.", color: "from-orange-500/20 to-cobalt/10" },
  ];

  return (
    <div id="itServices" className="bg-obsidian-deeper">
      {/* HERO */}
      <section id="headingItServices" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/services_bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/55 via-obsidian-deeper/65 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-tag">IT Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Scitforte <span className="gradient-text-cobalt">IT Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-titanium text-lg max-w-3xl mx-auto leading-relaxed">
            Customizable solutions for web development, mobile apps, digital marketing, and branding — ensuring your online success.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      <InteractiveServiceSection id="services1" title="Design, Development & Implementation" intro="Crafting tailored solutions across different industries for transformative results." cards={cardSet1} defaultImg={webServiceImage} />

      <section id="tools" className="section-padding bg-obsidian-dark border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={new URL("../../assets/images/itServices/tools.jpg", import.meta.url).href} alt="Tools" className="w-full rounded-xl" />
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div>
                <span className="section-tag mb-4 inline-flex">Collaboration</span>
                <div className="cobalt-line" />
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Collaboration & Communication Tools</h2>
                <p className="text-titanium leading-relaxed mb-6">Elevate customer engagement with a powerful system that organizes, automates, and synchronizes sales, marketing, and customer service.</p>
                <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Get Started <HiArrowRight size={16} /></button></Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <InteractiveServiceSection id="services2" title="Advanced Technology Services" intro="Explore Scitforte's comprehensive software suite for streamlined operations and accelerated growth." cards={cardSet2} defaultImg={ets} />

      <section id="cloudItService" className="section-padding bg-obsidian-dark border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div>
                <span className="section-tag mb-4 inline-flex">Cloud</span>
                <div className="cobalt-line" />
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Cloud Computing Services</h2>
                <p className="text-titanium leading-relaxed mb-6">Platform as a Service (PaaS) and Software as a Service (SaaS) — scalable and secure cloud infrastructure for your business.</p>
                <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Explore Cloud <HiArrowRight size={16} /></button></Link>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={cloud} alt="Cloud" className="w-full rounded-xl" />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <InteractiveServiceSection id="services3" title="Digital & Business Solutions" intro="Actionable insights and tools to make better and faster business decisions." cards={cardSet3} defaultImg={ecommerce} />

      <section id="itServicesCards" className="section-padding border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-tag">More Services</span>
            <h2 className="text-2xl font-bold font-heading text-white mt-4">Additional IT Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
                <div className={`quantum-card bg-gradient-to-br ${card.color} p-6 text-center h-full`}>
                  <div className="w-12 h-12 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mx-auto mb-4">{card.icon}</div>
                  <h3 className="text-white font-bold font-heading mb-2">{card.title}</h3>
                  <p className="text-titanium text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="softwareDevelopment" className="section-padding bg-obsidian-dark border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={new URL("../../assets/images/itServices/tools.jpg", import.meta.url).href} alt="Software Dev" className="w-full rounded-xl" />
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div>
                <span className="section-tag mb-4 inline-flex">Development</span>
                <div className="cobalt-line" />
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Software Development</h2>
                <p className="text-titanium leading-relaxed mb-4">End-to-end creation of bespoke software solutions that address unique business requirements:</p>
                <ul className="space-y-2 text-titanium mb-6">
                  {["Custom software development", "API development and integration", "Enterprise application solutions"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-cobalt flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Start a Project <HiArrowRight size={16} /></button></Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section id="itServicesFinalHeading" ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-tag mb-6">Our Impact</span>
          <h2 className="text-3xl font-bold font-heading text-white mb-12">We Help Startups <span className="gradient-text-cobalt">Launch & Succeed Faster</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="text-3xl font-bold font-heading gradient-text-cobalt mb-1">
                  {inView ? <CountUp end={s.end} duration={2} suffix={s.suffix} /> : `0${s.suffix}`}
                </div>
                <div className="text-titanium text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Connect With Us <HiArrowRight size={16} /></button></Link>
            <Link to="/softwareProducts"><button className="btn-glass text-sm">Our Products</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServices;