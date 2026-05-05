import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaSearch, FaBullhorn, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { MdTrendingUp, MdAnalytics, MdEmail, MdEvent } from "react-icons/md";

import cloud from "../../assets/images/itServices/cloud.jpg";
import databaseManagementImage from "../../assets/images/itServices/db.jpg";
import data from "../../assets/images/itServices/data.jpg";
import webServiceImage from "../../assets/images/itServices/webService.jpg";
import ets from "../../assets/images/itServices/ets.jpg";
import ets2 from "../../assets/images/itServices/ets2.jpg";
import maintainence from "../../assets/images/itServices/maintainence.jpg";
import vr from "../../assets/images/itServices/vr.jpg";

const stats = [
  { end: 20, suffix: "+", label: "Team Members" },
  { end: 12, suffix: "+", label: "Years Experience" },
  { end: 150, suffix: "%", label: "Growth Rate" },
  { end: 320, suffix: "+", label: "Projects Done" },
];

const topCards = [
  { icon: <FaSearch size={22} />, title: "Search Engine Marketing", desc: "Manages Google Ads and Bing Ads for targeted ad campaigns, including Remarketing.", color: "from-blue-500/20 to-cobalt/10" },
  { icon: <FaBullhorn size={22} />, title: "Social Media Marketing", desc: "Develops content strategy, executes social media advertising, and analyzes performance.", color: "from-purple-500/20 to-cobalt/10" },
  { icon: <MdTrendingUp size={22} />, title: "Content Marketing", desc: "Content Strategy, Blogging, Infographics, and Video Marketing for effective brand messaging.", color: "from-emerald-500/20 to-cobalt/10" },
  { icon: <FaEnvelope size={22} />, title: "Email Marketing", desc: "Runs email campaigns, automates processes, and creates newsletters with A/B testing.", color: "from-orange-500/20 to-cobalt/10" },
];

const DigitalMarketing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [selectedSet1, setSelectedSet1] = useState(data);
  const cardSet1 = [
    { title: "Search Engine Optimization", description: "Enhances website visibility with On-Page SEO, Off-Page SEO, Keyword Research, and SEO Audits.", image: data, icon: <FaSearch size={14} /> },
    { title: "Influencer Marketing", description: "Identifying influencers, developing campaign strategy, and managing outreach for impactful collaboration.", image: databaseManagementImage, icon: <FaBullhorn size={14} /> },
    { title: "Online Public Relations", description: "Manages Online Reputation, Crisis Management, and Brand Perception monitoring.", image: cloud, icon: <MdTrendingUp size={14} /> },
    { title: "Conversion Rate Optimization", description: "A/B Testing, User Experience (UX) optimization, and Landing Page Optimization.", image: webServiceImage, icon: <MdAnalytics size={14} /> },
  ];

  const [selectedSet2, setSelectedSet2] = useState(ets);
  const cardSet2 = [
    { title: "Web Design & Development", description: "Responsive Web Design, E-commerce Development, and Landing Page Optimization.", image: ets2, icon: <MdTrendingUp size={14} /> },
    { title: "Analytics and Data Analysis", description: "Google Analytics data interpretation, reporting, and marketing insights.", image: ets, icon: <MdAnalytics size={14} /> },
    { title: "Chatbot Development", description: "Chatbot Strategy, Development, Integration, and ongoing Maintenance & Optimization.", image: maintainence, icon: <MdEmail size={14} /> },
    { title: "Virtual Events & Webinars", description: "Event Planning, Promotion, Webinar Hosting, and Post-Event Analysis.", image: vr, icon: <MdEvent size={14} /> },
  ];

  return (
    <div id="digitalMarketing" className="bg-obsidian-deeper">

      {/* HERO */}
      <section id="headingDigitalMarketing" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/services_bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/55 via-obsidian-deeper/65 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-tag">Digital Marketing</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Scitforte <span className="gradient-text-cobalt">Digital Marketing</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-titanium text-lg max-w-3xl mx-auto leading-relaxed">
            We facilitate organizations to bring their ideas to reality by using descriptive technologies and powerful digital marketing strategies.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* Top Cards */}
      <section id="dmCards" className="section-padding border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-tag">Core Services</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-4">Our Digital Marketing Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
                <div className={`quantum-card bg-gradient-to-br ${card.color} p-6 h-full`}>
                  <div className="w-11 h-11 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mb-4">{card.icon}</div>
                  <h3 className="text-white font-bold font-heading mb-2 text-sm">{card.title}</h3>
                  <p className="text-titanium text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Interactive */}
      <section id="dmServices1" className="section-padding border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="cobalt-line" />
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">Collect Everything in One Place</h2>
            <p className="text-titanium max-w-2xl text-sm">We build Prototypes and proof of concepts, create MVPs to validate ideas, and develop complete end-to-end systems.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              {cardSet1.map((c) => (
                <div key={c.title} onClick={() => setSelectedSet1(c.image)}
                  className={`quantum-card p-4 cursor-pointer transition-all duration-300 ${selectedSet1 === c.image ? "border-cobalt/50 shadow-cobalt-sm" : ""}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-cobalt ${selectedSet1 === c.image ? "bg-cobalt/20 border border-cobalt/40" : "bg-cobalt/8 border border-cobalt/10"}`}>{c.icon}</div>
                    <div>
                      <h3 className={`font-semibold text-sm mb-1 ${selectedSet1 === c.image ? "text-cobalt" : "text-white"}`}>{c.title}</h3>
                      <p className="text-titanium text-xs leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sticky top-28">
              <motion.div key={selectedSet1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={selectedSet1} alt="Service" className="w-full rounded-xl object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Marketing Feature */}
      <section id="mobileMarketing" className="section-padding bg-obsidian-dark border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={new URL("../../assets/images/digitalMarketing/mobileMarketing.jpg", import.meta.url).href} alt="Mobile Marketing" className="w-full rounded-xl object-cover" />
                <div className="absolute top-4 right-4 w-16 h-16 rounded-xl overflow-hidden border border-cobalt/30">
                  <img src={new URL("../../assets/images/digitalMarketing/it-service-3.png", import.meta.url).href} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div>
                <span className="section-tag mb-4 inline-flex"><FaMobileAlt size={12} /> Mobile Marketing</span>
                <div className="cobalt-line" />
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Mobile Marketing</h2>
                <p className="text-titanium leading-relaxed mb-6">Engages in Mobile App Advertising, SMS Marketing, and Location-Based Marketing to reach users on mobile devices with pinpoint precision.</p>
                <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Get Started <HiArrowRight size={16} /></button></Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Second Interactive Section */}
      <section id="dmServices2" className="section-padding border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="cobalt-line" />
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">Trust Us to Drive Your Digital Success</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              {cardSet2.map((c) => (
                <div key={c.title} onClick={() => setSelectedSet2(c.image)}
                  className={`quantum-card p-4 cursor-pointer transition-all duration-300 ${selectedSet2 === c.image ? "border-cobalt/50 shadow-cobalt-sm" : ""}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-cobalt ${selectedSet2 === c.image ? "bg-cobalt/20 border border-cobalt/40" : "bg-cobalt/8 border border-cobalt/10"}`}>{c.icon}</div>
                    <div>
                      <h3 className={`font-semibold text-sm mb-1 ${selectedSet2 === c.image ? "text-cobalt" : "text-white"}`}>{c.title}</h3>
                      <p className="text-titanium text-xs leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sticky top-28">
              <motion.div key={selectedSet2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={selectedSet2} alt="Service" className="w-full rounded-xl object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate + Local SEO */}
      <section id="affiliateMarketing" className="section-padding bg-obsidian-dark border-b border-cobalt/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img src={new URL("../../assets/images/digitalMarketing/mobileMarketing.jpg", import.meta.url).href} alt="Affiliate Marketing" className="w-full rounded-xl object-cover" />
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div>
                <span className="section-tag mb-4 inline-flex">Affiliate & SEO</span>
                <div className="cobalt-line" />
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Affiliate Marketing & Local SEO</h2>
                <p className="text-titanium leading-relaxed mb-3">Encompasses Program Setup, Affiliate Recruitment, and Performance Tracking to drive sales through partnerships.</p>
                <p className="text-titanium leading-relaxed mb-6">Focuses on Local Search Optimization, Google My Business Management, and Local Citations to boost visibility in specific geographical areas.</p>
                <Link to="/contact"><button className="btn-cobalt flex items-center gap-2 text-sm">Grow With Us <HiArrowRight size={16} /></button></Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Stats CTA */}
      <section id="localSEO" ref={ref} className="section-padding relative overflow-hidden">
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
            <Link to="/itServices"><button className="btn-glass text-sm">IT Services</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
