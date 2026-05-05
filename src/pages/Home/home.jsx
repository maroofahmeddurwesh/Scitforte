import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight } from "react-icons/hi";
import { GrSystem } from "react-icons/gr";
import { FaHospitalAlt, FaBuilding, FaLeaf, FaQuoteLeft, FaCode, FaChartLine, FaPaintBrush, FaCloud } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { RiWindowFill, RiCheckboxCircleFill } from "react-icons/ri";

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100, damping: 20 },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(15px)" },
  visible: (i = 0) => ({
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }
  })
};

const imageVariant = {
  hidden: { opacity: 0, x: 100, filter: "blur(20px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 1, type: "spring", bounce: 0.4 }
  }
};

const textLeftVariant = {
  hidden: { opacity: 0, x: -100, filter: "blur(20px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 1, type: "spring", bounce: 0.4 }
  }
};

const techStack = [
  { name: "React", src: new URL("../../assets/images/technology/react.png", import.meta.url).href },
  { name: "NodeJS", src: new URL("../../assets/images/technology/node.png", import.meta.url).href },
  { name: "MySQL", src: new URL("../../assets/images/technology/mysql.png", import.meta.url).href },
  { name: "JavaScript", src: new URL("../../assets/images/technology/js.png", import.meta.url).href },
  { name: "PHP", src: new URL("../../assets/images/technology/php.png", import.meta.url).href },
  { name: "Laravel", src: new URL("../../assets/images/technology/laravel.png", import.meta.url).href },
];

const products = [
  { icon: <GrSystem size={28} />, name: "IMS", full: "Institute Management System", href: "/softwareProducts/ims", color: "from-blue-500/20 to-cobalt/10" },
  { icon: <BiSolidBuildingHouse size={28} />, name: "REMS", full: "Real Estate Management System", href: "/softwareProducts/rems", color: "from-purple-500/20 to-cobalt/10" },
  { icon: <FaHospitalAlt size={28} />, name: "HMS", full: "Hospital Management System", href: "/softwareProducts/hms", color: "from-emerald-500/20 to-cobalt/10" },
  { icon: <FaLeaf size={28} />, name: "ESG", full: "Environmental, Social & Governance", href: "/softwareProducts/esg", color: "from-green-500/20 to-cobalt/10" },
  { icon: <RiWindowFill size={28} />, name: "IBS", full: "Integrated Business Suite", href: "/softwareProducts/ibs", color: "from-orange-500/20 to-cobalt/10" },
  { icon: <FaBuildingUser size={28} />, name: "ERP", full: "Enterprise Resource Planning", href: "/softwareProducts/erp", color: "from-red-500/20 to-cobalt/10" },
];

const coreServices = [
  { icon: <FaCode size={24} />, name: "Web Development", desc: "Custom, scalable web applications tailored to your exact business needs.", href: "/service/software-development" },
  { icon: <FaChartLine size={24} />, name: "Digital Marketing", desc: "SEO, PPC, and content strategies to drive organic traffic and conversions.", href: "/service/search-engine-optimization" },
  { icon: <FaPaintBrush size={24} />, name: "UI/UX Design", desc: "User-centric design solutions that ensure seamless and engaging experiences.", href: "/service/design-and-development" },
  { icon: <FaCloud size={24} />, name: "Cloud Solutions", desc: "Secure and robust cloud architecture to modernize your enterprise.", href: "/service/cloud-computing-services" },
];

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "320+", label: "Projects Delivered" },
  { value: "20+", label: "Team Specialists" },
  { value: "99%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote: "Their team's expertise, professionalism, and commitment to delivering top-notch solutions are truly commendable. Awesome company!!",
    name: "Azaz Malik",
    title: "CEO",
    image: "https://scitforte.com/wp-content/uploads/2024/02/azaz-malik.jpg",
  },
  {
    quote: "From start to finish, their exceptional communication and responsiveness ensured our needs were not just met, but exceeded. Excellent team.",
    name: "M Asif Naseer Khara",
    title: "Chairman",
    image: "https://scitforte.com/wp-content/uploads/2024/02/yasir.jpeg",
  },
  {
    quote: "Working with Scitforte has been an absolute pleasure. You understand our aesthetic and direction so well. I love Scitforte.",
    name: "Yasir Khirmandi",
    title: "Founder",
    image: "https://scitforte.com/wp-content/uploads/2024/02/361087395_814857906880228_3326036032983550166_n-e1709024324739.jpg",
  },
  {
    quote: "A game changer for our operations. The custom software perfectly matched our workflows and drastically improved efficiency.",
    name: "Sarah Ahmed",
    title: "Operations Manager",
    image: "https://scitforte.com/wp-content/uploads/2024/02/azaz-malik.jpg",
  }
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const SectionRef = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { custom: i, animate: isInView ? "visible" : "hidden" })
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div id="home" className="bg-obsidian-deeper">

      {/* ===================== HERO ===================== */}
      <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/50 via-obsidian-deeper/40 to-obsidian-deeper" />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-hero-mesh" />
        {/* Circuit grid */}
        <div className="absolute inset-0 opacity-10 circuit-bg" />

        {/* Animated floating orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #00CFFF, transparent)" }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, #00CFFF, transparent)" }} 
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6"
            >
              <span className="gradient-text">Scitforte</span>
              <br />
              <span className="text-white">Pioneering Tomorrow's</span>
              <br />
              <span className="gradient-text-cobalt">Solutions</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="text-titanium text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              We revolutionize the digital landscape with cutting-edge software solutions
              that empower businesses and individuals alike. From enterprise software to
              digital marketing — we are your growth partner.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/softwareProducts">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-cobalt flex items-center gap-2 text-sm">
                  Explore Products <HiArrowRight size={16} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-glass flex items-center gap-2 text-sm">
                  Get In Touch <HiArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, type: "spring" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-titanium/40 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-cobalt/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ===================== CORE SERVICES (NEW) ===================== */}
      <section className="section-padding bg-obsidian-dark/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="section-tag">Core Expertise</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4 mb-4">
              Comprehensive <span className="gradient-text-cobalt">Digital Services</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-titanium max-w-2xl mx-auto text-lg">
              We deliver end-to-end solutions that elevate your brand's digital presence and operational efficiency.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, i) => (
              <motion.div
                key={service.name}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <Link to={service.href} className="block h-full outline-none">
                  <div className="liquid-glass rounded-2xl p-6 relative overflow-hidden group border border-cobalt/10 hover:border-cobalt/30 transition-all duration-300 flex flex-col h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cobalt/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mb-6 group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white mb-3">{service.name}</h3>
                    <p className="text-titanium text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                    <div className="text-cobalt text-xs font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-4 border-t border-cobalt/10">
                      Discover More <HiArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROMOTE ===================== */}
      <section id="promote" className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              variants={textLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-tag mb-4">Why Choose Us</span>
              <div className="cobalt-line" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Promote Your Business Through{" "}
                <span className="gradient-text-cobalt">Our Expertise</span>
              </h2>
              <p className="text-titanium leading-relaxed mb-8 text-lg">
                Our experienced team is ready to collaborate with you, bringing our innovative spirit,
                technical expertise, and unwavering commitment to excellence to your project. We align
                cutting-edge technology with your vision to create powerful, user-centric experiences.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Tailored solutions designed for your specific industry.",
                  "A proactive approach to solving complex technical challenges.",
                  "Transparent communication and dedicated project support.",
                  "Continuous innovation utilizing the latest tech stacks."
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-titanium text-sm"
                  >
                    <RiCheckboxCircleFill size={20} className="text-cobalt flex-shrink-0" /> 
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <motion.button whileHover={{ scale: 1.05 }} className="btn-cobalt flex items-center gap-2 text-sm">
                    Learn About Us <HiArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/itServices">
                  <motion.button whileHover={{ scale: 1.05 }} className="btn-glass text-sm">Our Services</motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1 min-h-[500px]">
                <img
                  src={new URL("../../assets/images/promote.png", import.meta.url).href}
                  alt="Business Promotion"
                  className="absolute inset-0 w-full h-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deeper/80 via-transparent to-transparent rounded-xl" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 liquid-glass rounded-xl p-4 shadow-cobalt-md border border-cobalt/20 backdrop-blur-md"
              >
                <div className="text-cobalt text-3xl font-bold font-heading">150%</div>
                <div className="text-white text-sm mt-0.5 font-medium">Growth Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-16 border-y border-cobalt/10 bg-obsidian-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="stat-card backdrop-blur-sm"
              >
                <div className="text-3xl sm:text-4xl font-bold font-heading gradient-text-cobalt mb-1">{s.value}</div>
                <div className="text-white font-medium text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS OVERVIEW ===================== */}
      <section id="products" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-tag">Software Products</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4 mb-4">
              We Help Businesses{" "}
              <span className="gradient-text-cobalt">Grow & Succeed</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-titanium max-w-2xl mx-auto text-lg">
              Our comprehensive suite of integrated software solutions empowers businesses to
              streamline operations and optimize performance.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="h-full"
              >
                <Link to={product.href} className="block h-full">
                  <div className={`quantum-card h-full flex flex-col p-6 bg-gradient-to-br ${product.color} border border-transparent hover:border-cobalt/30 transition-all duration-300`}>
                    <div className="flex items-start gap-4 flex-grow">
                      <div className="w-14 h-14 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt flex-shrink-0">
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold font-heading text-white">{product.name}</h3>
                          <HiArrowRight size={16} className="text-cobalt/50 group-hover:text-cobalt transition-colors" />
                        </div>
                        <p className="text-titanium text-sm leading-relaxed">{product.full}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cobalt animate-cobalt-pulse" />
                      <span className="text-cobalt text-xs font-semibold uppercase tracking-wider">Explore Solution</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-14"
          >
            <Link to="/softwareProducts">
              <motion.button whileHover={{ scale: 1.05 }} className="btn-glass flex items-center gap-2 mx-auto text-sm border border-cobalt/20 hover:bg-cobalt/10">
                View All Products <HiArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== TECH STACK MARQUEE ===================== */}
      <section className="py-16 border-y border-cobalt/10 overflow-hidden bg-obsidian-dark">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <motion.p 
            initial={{ opacity: 0, filter: "blur(5px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }}
            className="text-center text-xs text-titanium/50 uppercase tracking-widest font-semibold"
          >
            Scitforte Leverages Cutting-Edge Technology Stacks
          </motion.p>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white/5 border border-cobalt/10 rounded-xl px-8 py-4 hover:border-cobalt/30 hover:bg-cobalt/10 hover:shadow-cobalt-sm transition-all duration-300 flex-shrink-0 mx-3"
              >
                <img src={tech.src} alt={tech.name} className="h-10 w-auto object-contain filter brightness-90 hover:brightness-110 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS (NEW) ===================== */}
      <section id="testimonials" className="section-padding bg-obsidian-deeper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-tag">Client Reviews</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4 mb-4">
              Trusted by <span className="gradient-text-cobalt">Industry Leaders</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-titanium max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our global partners and clients have to say about our software solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <Slider {...sliderSettings}>
              {testimonials.map((t, i) => (
                <div key={i} className="px-3 py-4">
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="testimonial-card flex flex-col h-[280px] bg-obsidian-dark/80 backdrop-blur-sm border border-cobalt/10 hover:border-cobalt/30"
                  >
                    <FaQuoteLeft size={20} className="text-cobalt/40 mb-4" />
                    <p className="text-titanium italic text-sm leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-cobalt/20 border border-cobalt/30 flex items-center justify-center text-cobalt font-bold text-sm overflow-hidden">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.name}</p>
                        <p className="text-cobalt text-xs">{t.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-dark to-obsidian-deeper" />
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
          >
            Ready to <span className="gradient-text-cobalt">Transform</span> Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
            className="text-titanium text-lg mb-10 max-w-2xl mx-auto"
          >
            Schedule an appointment with us to discuss your goals. We translate your business into a global, digitally-oriented strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} className="btn-cobalt flex items-center gap-2 text-base px-8 py-3.5 shadow-cobalt-md">
                Connect With Us <HiArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/softwareProducts">
              <motion.button whileHover={{ scale: 1.05 }} className="btn-glass text-base px-8 py-3.5">
                Explore Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
