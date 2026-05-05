import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaLaptopCode, FaBullhorn, FaCheckCircle, FaReact, FaNodeJs, FaAws, FaPhp, FaLaravel } from "react-icons/fa";
import { RiSearchLine, RiPencilRuler2Line, RiCodeSSlashLine, RiRocketLine } from "react-icons/ri";
import { SiDocker, SiFigma } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100, damping: 20 },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }
  })
};

const textLeftVariant = {
  hidden: { opacity: 0, x: -50, filter: "blur(20px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 1, type: "spring", bounce: 0.4 }
  }
};

const serviceCategories = [
  {
    title: "Digital Marketing",
    href: "/digitalMarketing",
    icon: <FaBullhorn size={32} />,
    description: "Data-driven marketing strategies to elevate your brand presence and maximize ROI across channels.",
    subServices: [
      "Search Engine Optimization",
      "Content Marketing",
      "Social Media Management",
      "PPC Advertising",
    ],
    color: "from-purple-600/20 to-pink-500/10",
    borderHover: "hover:border-purple-500/50",
    shadowHover: "hover:shadow-purple-500/20",
    image: "/digital_marketing_card.png"
  },
  {
    title: "IT Services",
    href: "/itServices",
    icon: <FaLaptopCode size={32} />,
    description: "Robust software development and cloud solutions to scale your business into the digital future.",
    subServices: [
      "Software Development",
      "Cloud Infrastructure",
      "Web & Mobile App Design",
      "Secure Web Hosting",
    ],
    color: "from-blue-600/20 to-cobalt/10",
    borderHover: "hover:border-blue-500/50",
    shadowHover: "hover:shadow-blue-500/20",
    image: "/it_services_card.png"
  }
];

const processSteps = [
  { id: "01", title: "Discovery", desc: "Understanding your goals and market landscape to form a strong foundation.", icon: <RiSearchLine size={24} /> },
  { id: "02", title: "Strategy", desc: "Crafting detailed strategic roadmaps tailored for maximum success.", icon: <RiPencilRuler2Line size={24} /> },
  { id: "03", title: "Execution", desc: "Building robust systems and deploying targeted campaigns using advanced tools.", icon: <RiCodeSSlashLine size={24} /> },
  { id: "04", title: "Delivery", desc: "Rigorous testing and continuous optimization for maximum ROI.", icon: <RiRocketLine size={24} /> },
];

const technologies = [
  { icon: <FaReact size={32} />, name: "React" },
  { icon: <FaNodeJs size={32} />, name: "Node.js" },
  { icon: <FaPhp size={32} />, name: "PHP" },
  { icon: <FaLaravel size={32} />, name: "Laravel" },
  { icon: <FaAws size={32} />, name: "AWS" },
  { icon: <SiDocker size={32} />, name: "Docker" },
  { icon: <SiFigma size={32} />, name: "Figma" },
];

const ServicesOverview = () => {
  return (
    <div className="bg-obsidian-deeper min-h-screen relative overflow-hidden">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/services_hero.png')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/80 via-obsidian-deeper/60 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span variants={fadeUp} className="section-tag mb-6">
              Our Services
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white mt-4 mb-6 leading-tight"
            >
              Empowering Your Business with <span className="gradient-text-cobalt">Next-Gen Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-titanium text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            >
              We offer comprehensive technology and marketing services tailored to accelerate your growth, streamline operations, and deliver exceptional user experiences worldwide.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-4">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-cobalt flex items-center gap-2 text-base shadow-cobalt-md mx-auto">
                  Start a Project <HiArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* ===================== PRIMARY SERVICES CARDS ===================== */}
      <section className="py-16 relative z-20 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-3xl font-bold font-heading text-white"
            >
              Core <span className="gradient-text-cobalt">Expertise</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {serviceCategories.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="h-full"
              >
                <Link to={service.href} className="block h-full outline-none">
                  <div className={`relative h-full rounded-2xl overflow-hidden border border-white/5 bg-obsidian-dark ${service.borderHover} ${service.shadowHover} transition-all duration-500 group flex flex-col`}>
                    
                    {/* Top Image Header */}
                    <div className="h-56 relative overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark via-obsidian-dark/40 to-transparent" />
                      

                    </div>

                    <div className="relative z-10 p-8 pt-4 flex-grow flex flex-col">
                      <h2 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-cobalt transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-titanium text-sm leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.subServices.map((sub, index) => (
                          <div key={index} className="flex items-center gap-3 text-titanium/90 text-sm group-hover:text-white transition-colors">
                            <FaCheckCircle size={14} className="text-cobalt/70 flex-shrink-0" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between">
                        <span className="text-cobalt font-semibold uppercase tracking-wider text-xs flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                          Explore {service.title} <HiArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR PROCESS ===================== */}
      <section className="section-padding bg-obsidian-dark/40 relative border-y border-cobalt/10 mt-10">
        <div className="absolute inset-0 bg-hero-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="section-tag">How We Work</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold font-heading text-white mt-4 mb-4">
              Our Proven <span className="gradient-text-cobalt">Process</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {i !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px border-t border-dashed border-cobalt/30" />
                )}
                
                <div className="liquid-glass rounded-2xl p-6 relative overflow-hidden h-full border border-white/5 hover:border-cobalt/30 transition-all duration-300 group">
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent absolute top-2 right-4 pointer-events-none">
                    {step.id}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mb-5 shadow-cobalt-sm group-hover:bg-cobalt group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">{step.title}</h3>
                  <p className="text-titanium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TECHNOLOGIES ===================== */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Technologies We Master
            </motion.h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center gap-3 text-titanium/50 hover:text-cobalt transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-glass group-hover:border-cobalt/30">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE OUR SERVICES ===================== */}
      <section className="section-padding relative overflow-hidden bg-obsidian-dark/30 border-t border-cobalt/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={textLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-tag mb-4">Value Proposition</span>
              <div className="cobalt-line" />
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight mb-6">
                Why Scitforte is the <br /> <span className="gradient-text-cobalt">Right Choice</span> for You
              </h2>
              <p className="text-titanium leading-relaxed mb-8 text-lg">
                We blend technical brilliance with strategic thinking. Partnering with Scitforte means gaining a dedicated team focused on driving your digital success through innovation and reliability.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Expert Team", desc: "Highly skilled professionals with years of industry experience." },
                  { title: "Custom Solutions", desc: "Strategies and software tailored uniquely for your goals." },
                  { title: "Scalable Tech", desc: "Future-proof architectures that grow with your business." },
                  { title: "24/7 Support", desc: "Dedicated maintenance and monitoring around the clock." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-cobalt/10 flex items-center justify-center text-cobalt mb-1">
                      <FaCheckCircle size={18} />
                    </div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-titanium text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, type: "spring" }}
              className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1 lg:h-[600px]"
            >
              <img
                src="/value_prop_bg.png"
                alt="Our Value"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => { e.target.src = "/about_bg.png" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-deeper/80 via-obsidian-deeper/40 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-dark to-obsidian-deeper" />
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            Ready to Accelerate Your <span className="gradient-text-cobalt">Growth?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} className="btn-cobalt flex items-center gap-2 text-base px-8 py-3.5 shadow-cobalt-md mx-auto">
                Consult With Us <HiArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesOverview;
