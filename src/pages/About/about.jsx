import React from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImTarget } from "react-icons/im";
import { FaEye, FaHandshake, FaQuoteLeft, FaCheckCircle, FaLightbulb, FaRocket, FaShieldAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

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
  hidden: { opacity: 0, x: -100, filter: "blur(20px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 1, type: "spring", bounce: 0.4 }
  }
};

const imageRightVariant = {
  hidden: { opacity: 0, x: 100, filter: "blur(20px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 1, type: "spring", bounce: 0.4 }
  }
};

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
];

const values = [
  {
    icon: <ImTarget size={24} />,
    title: "Our Mission",
    desc: "To deliver exceptional software solutions that seamlessly align with our clients' visions, fostering growth and a competitive edge in the digital landscape.",
  },
  {
    icon: <FaEye size={24} />,
    title: "Our Vision",
    desc: "Empowering innovation with cutting-edge technology solutions that redefine boundaries and possibilities for businesses worldwide.",
  },
  {
    icon: <FaHandshake size={24} />,
    title: "Our Values",
    desc: "One-stop-shop for all your business needs — innovation, integrity, and excellence in every solution we deliver.",
  },
];

const reasons = [
  { icon: <FaLightbulb size={24} />, title: "Innovation First", desc: "We constantly explore new technologies to deliver future-proof solutions that keep you ahead of the curve." },
  { icon: <FaRocket size={24} />, title: "Agile Delivery", desc: "Our iterative approach ensures rapid development cycles and continuous feedback integration." },
  { icon: <FaShieldAlt size={24} />, title: "Robust Security", desc: "We embed security best practices into every layer of our software architecture to protect your data." },
  { icon: <FaCheckCircle size={24} />, title: "Unmatched Quality", desc: "Rigorous testing and QA processes guarantee a flawless, high-performance final product." },
];

const achievements = [
  { value: "100%", label: "Software Products", sub: "Comprehensive suite of business solutions" },
  { value: "99%", label: "Digital Marketing", sub: "Trust us to drive your digital success" },
  { value: "100%", label: "Web Development", sub: "Solutions for businesses of every size" },
  { value: "100%", label: "User Experience", sub: "Visually appealing, user-friendly designs" },
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

const About = () => {
  return (
    <div id="about" className="bg-obsidian-deeper">

      {/* ===================== HERO ===================== */}
      <section
        id="aboutHeading"
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deeper/70 via-obsidian-deeper/60 to-obsidian-deeper" />
        <div className="absolute inset-0 circuit-bg opacity-10" />

        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #00CFFF, transparent)" }} 
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span variants={fadeUp} className="section-tag">About Scitforte</motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white mt-4 mb-6 leading-tight"
            >
              We <span className="gradient-text-cobalt">Partner</span> With Firms to{" "}
              <span className="gradient-text">Bring Clarity</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-titanium text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We have led innovation and new product delivery in business startup services
              delivered online — building digital solutions that power real-world growth and transform industries globally.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-deeper to-transparent" />
      </section>

      {/* ===================== OUR STORY (NEW SECTION) ===================== */}
      <section className="section-padding relative overflow-hidden bg-obsidian-dark/50">
        <div className="absolute inset-0 bg-hero-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={imageRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <img
                  src={new URL("../../assets/images/about/about-story.jpg", import.meta.url).href}
                  alt="Scitforte Story"
                  className="w-full rounded-xl object-cover h-[400px] lg:h-[500px]"
                  onError={(e) => { e.target.src = "/about_bg.png"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-deeper/80 via-transparent to-transparent rounded-xl" />
              </div>
            </motion.div>

            <motion.div
              variants={textLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-1 lg:order-2"
            >
              <span className="section-tag mb-4">Our Journey</span>
              <div className="cobalt-line" />
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight mb-6">
                A Legacy of <span className="gradient-text-cobalt">Digital Excellence</span>
              </h2>
              <p className="text-titanium leading-relaxed mb-6 text-lg">
                Since our inception, Scitforte has been driven by a singular goal: to bridge the gap between complex business challenges and elegant, scalable technology solutions. 
              </p>
              <p className="text-titanium leading-relaxed mb-8">
                What started as a small team of passionate developers has grown into a global tech powerhouse. We believe that technology should serve people, not the other way around. By combining deep industry knowledge with technical mastery, we craft digital products that not only look stunning but drive measurable business impact and long-term success for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-cobalt pl-4">
                  <div className="text-2xl font-bold text-white mb-1">Global</div>
                  <div className="text-titanium text-sm">Client Base</div>
                </div>
                <div className="border-l-2 border-cobalt pl-4">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-titanium text-sm">Dedicated Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION / VISION / VALUES ===================== */}
      <section id="mission" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left: Text */}
            <motion.div
              variants={textLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-tag mb-6">Who We Are</span>
              <div className="space-y-8">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    custom={i}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt flex-shrink-0 shadow-cobalt-sm">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-heading text-lg mb-2">{v.title}</h3>
                      <p className="text-titanium text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex gap-4 mt-10"
              >
                <Link to="/contact">
                  <motion.button whileHover={{ scale: 1.05 }} className="btn-cobalt flex items-center gap-2 text-sm shadow-cobalt-md">
                    Work With Us <HiArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/softwareProducts">
                  <motion.button whileHover={{ scale: 1.05 }} className="btn-glass text-sm">
                    Our Products
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              variants={imageRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative lg:h-full min-h-[400px] lg:min-h-[600px] mt-10 lg:mt-0"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden cobalt-glow-border p-1">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  src={new URL("../../assets/images/backgroundAboutVideo.mp4", import.meta.url).href}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deeper/60 via-transparent to-transparent rounded-xl pointer-events-none" />
              </div>

              {/* Stats floating card */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 liquid-glass rounded-2xl p-6 shadow-cobalt-lg border border-cobalt/20 backdrop-blur-md"
              >
                <div className="text-cobalt text-4xl font-bold font-heading">12+</div>
                <div className="text-white font-medium text-sm mt-1">Years of Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US (NEW SECTION) ===================== */}
      <section className="section-padding bg-obsidian-dark/40 relative overflow-hidden border-y border-cobalt/10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cobalt/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="section-tag">Why Partner With Us</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4 mb-4">
              The Scitforte <span className="gradient-text-cobalt">Advantage</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-titanium max-w-2xl mx-auto text-lg">
              We go beyond writing code. We act as your strategic technology partners, ensuring every digital initiative contributes to your bottom line.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="liquid-glass rounded-2xl p-6 relative overflow-hidden border border-white/5 hover:border-cobalt/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-cobalt/10 border border-cobalt/20 flex items-center justify-center text-cobalt mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-3">{reason.title}</h3>
                <p className="text-titanium text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ACHIEVEMENTS ===================== */}
      <section id="achievement" className="section-padding bg-obsidian-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="section-tag">Our Achievements</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4 mb-4">
              We Build <span className="gradient-text-cobalt">Digital Brands</span> & Experiences
            </motion.h2>
            <motion.p variants={fadeUp} className="text-titanium max-w-xl mx-auto text-lg">
              We design, build and support websites and apps for clients worldwide. We make your business stand out.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="stat-card backdrop-blur-sm border border-cobalt/10 hover:border-cobalt/40"
              >
                <div className="text-4xl font-bold font-heading gradient-text-cobalt mb-3">{a.value}</div>
                <div className="text-white font-semibold text-base mb-2">{a.label}</div>
                <div className="text-titanium/70 text-xs leading-relaxed">{a.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section id="testimonials" className="section-padding bg-obsidian-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="section-tag">Client Reviews</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mt-4 mb-4">
              What Our Clients <span className="gradient-text-cobalt">Say</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-titanium max-w-xl mx-auto text-lg">
              We're obsessive about knowledge transfer and client satisfaction.
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
                    className="testimonial-card flex flex-col h-[280px] border border-cobalt/10 hover:border-cobalt/30"
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
            Ready to <span className="gradient-text-cobalt">Start Your Project?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
            className="text-titanium text-lg mb-10 max-w-2xl mx-auto"
          >
            Let’s discuss how we can bring your ideas to life with our cutting-edge technology and experienced team.
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
                Get In Touch <HiArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
