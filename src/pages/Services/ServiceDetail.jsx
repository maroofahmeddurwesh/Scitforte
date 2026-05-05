import React, { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineCheck } from "react-icons/hi";
import { FaLaptopCode, FaBullhorn, FaReact, FaNodeJs, FaAws, FaPhp, FaLaravel } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

// Define all 10 services data here
const servicesData = {
  "search-engine-optimization": {
    title: "Search Engine Optimization",
    category: "Digital Marketing",
    image: "/seo_service.png",
    overview: "Elevate your digital presence and dominate search rankings with our advanced SEO strategies.",
    description: "Our comprehensive Search Engine Optimization services are designed to increase your organic visibility, drive highly targeted traffic, and boost your overall conversion rates. We utilize data-driven insights and technical expertise to ensure your brand stands out in competitive markets.",
    features: [
      "Comprehensive Technical SEO Audits",
      "Strategic Keyword Research & Mapping",
      "On-Page Optimization & Content Strategy",
      "High-Quality Link Building",
      "Local SEO & Google My Business Management"
    ],
    benefits: [
      { title: "Increased Traffic", desc: "Drive consistent organic traffic to your website without paying for ads." },
      { title: "Higher ROI", desc: "Target users actively searching for your specific products or services." },
      { title: "Brand Credibility", desc: "Top search rankings instantly establish your business as an industry leader." }
    ]
  },
  "content-marketing": {
    title: "Content Marketing",
    category: "Digital Marketing",
    image: "/content_marketing_new.png",
    overview: "Engage, educate, and convert your audience with compelling, high-quality content.",
    description: "We craft strategic content that speaks directly to your target audience's pain points and aspirations. From in-depth blog posts and authoritative whitepapers to engaging videos and infographics, our content marketing drives meaningful interactions and builds lasting brand loyalty.",
    features: [
      "Custom Content Strategy Development",
      "SEO-Optimized Blog Writing",
      "Engaging Video & Visual Content Creation",
      "Whitepapers & E-Books",
      "Content Distribution & Outreach"
    ],
    benefits: [
      { title: "Thought Leadership", desc: "Position your brand as an authority in your specific industry." },
      { title: "Audience Engagement", desc: "Keep your audience returning with valuable, relevant information." },
      { title: "Lead Generation", desc: "Capture high-quality leads through gated premium content." }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    category: "Digital Marketing",
    image: "/social_media_new.png",
    overview: "Amplify your brand voice and connect with your audience across all major social platforms.",
    description: "Our Social Media Marketing strategies are tailored to build vibrant communities around your brand. We handle everything from daily community management to highly targeted paid social campaigns that maximize your reach and drive measurable business results.",
    features: [
      "Social Media Strategy & Planning",
      "Engaging Content Creation & Curation",
      "Community Management & Interaction",
      "Targeted Paid Social Campaigns (FB, IG, LinkedIn)",
      "Performance Analytics & Reporting"
    ],
    benefits: [
      { title: "Brand Awareness", desc: "Dramatically expand your reach and visibility across social networks." },
      { title: "Direct Engagement", desc: "Communicate directly with your customers in real-time." },
      { title: "Customer Loyalty", desc: "Foster deep relationships and transform customers into brand advocates." }
    ]
  },
  "affiliate-marketing": {
    title: "Affiliate Marketing",
    category: "Digital Marketing",
    image: "/affiliate_marketing_new.png",
    overview: "Scale your sales exponentially through strategic, performance-based partnerships.",
    description: "We set up, manage, and optimize highly profitable affiliate programs. By leveraging a network of trusted partners, we help you reach new audiences and only pay for actual conversions, making it one of the most cost-effective marketing channels available.",
    features: [
      "Affiliate Program Setup & Integration",
      "Partner Recruitment & Onboarding",
      "Commission Structure Optimization",
      "Fraud Detection & Prevention",
      "Performance Tracking & Payout Management"
    ],
    benefits: [
      { title: "Low Risk", desc: "Pay only for successful sales or leads, ensuring positive ROI." },
      { title: "Rapid Scaling", desc: "Leverage other people's audiences to grow your business instantly." },
      { title: "Enhanced SEO", desc: "Gain valuable backlinks from high-quality affiliate websites." }
    ]
  },
  "mobile-marketing": {
    title: "Mobile Marketing",
    category: "Digital Marketing",
    image: "/mobile_marketing_new.png",
    overview: "Reach your customers wherever they are with highly targeted mobile marketing strategies.",
    description: "With mobile usage dominating the digital landscape, our Mobile Marketing services ensure your brand provides seamless, engaging experiences on all mobile devices. From App Store Optimization (ASO) to SMS campaigns, we maximize your mobile presence.",
    features: [
      "App Store Optimization (ASO)",
      "SMS & Push Notification Campaigns",
      "Mobile App Install Ads",
      "Location-Based Marketing",
      "Mobile-First Responsive Web Strategies"
    ],
    benefits: [
      { title: "Instant Reach", desc: "Deliver messages directly to your customers' pockets." },
      { title: "High Open Rates", desc: "SMS and push notifications boast significantly higher engagement than email." },
      { title: "Hyper-Targeting", desc: "Utilize precise location data for highly relevant marketing." }
    ]
  },
  "design-and-development": {
    title: "Design & Development",
    category: "IT Services",
    image: "/it_services_card.png",
    overview: "Creating stunning, user-centric interfaces backed by robust, scalable architectures.",
    description: "We bridge the gap between aesthetics and functionality. Our Design & Development teams work in unison to deliver digital products that look incredible and perform flawlessly. From wireframing to full-stack deployment, we handle the entire product lifecycle.",
    features: [
      "UI/UX Design & Prototyping",
      "Responsive Web Application Development",
      "Native & Cross-Platform Mobile Apps",
      "E-Commerce Solutions",
      "API Development & Integration"
    ],
    benefits: [
      { title: "Superior User Experience", desc: "Intuitive designs that keep users engaged and happy." },
      { title: "Future-Proof Tech", desc: "Built on modern, scalable frameworks like React and Node.js." },
      { title: "Increased Conversions", desc: "Frictionless user journeys designed specifically to maximize sales." }
    ]
  },
  "cloud-computing-services": {
    title: "Cloud Computing Services",
    category: "IT Services",
    image: "/cloud_service_new.png", 
    overview: "Modernize your infrastructure with secure, scalable, and highly available cloud solutions.",
    description: "Transform your business operations with our enterprise-grade Cloud Computing services. Whether you are migrating legacy systems or building cloud-native applications, we provide the expertise needed to ensure maximum uptime, security, and performance.",
    features: [
      "Cloud Migration & Strategy",
      "AWS / Azure / Google Cloud Architecture",
      "Serverless Application Development",
      "Cloud Security & Compliance Audits",
      "24/7 Cloud Monitoring & Optimization"
    ],
    benefits: [
      { title: "Cost Efficiency", desc: "Eliminate expensive on-premise hardware and pay only for what you use." },
      { title: "Infinite Scalability", desc: "Seamlessly scale your resources up or down based on real-time demand." },
      { title: "Disaster Recovery", desc: "Ensure business continuity with automated backups and failovers." }
    ]
  },
  "software-development": {
    title: "Software Development",
    category: "IT Services",
    image: "/software_dev_new.png",
    overview: "Custom software engineering tailored to solve your most complex business challenges.",
    description: "Our core strength lies in building bespoke software solutions that drive operational efficiency. We utilize agile methodologies to develop robust enterprise software, SaaS products, and internal tools that perfectly align with your unique business processes.",
    features: [
      "Custom Enterprise Software Development",
      "SaaS Product Engineering",
      "Legacy System Modernization",
      "Microservices Architecture",
      "Quality Assurance & Automated Testing"
    ],
    benefits: [
      { title: "Perfect Fit", desc: "Software designed exactly for your workflows, unlike generic off-the-shelf tools." },
      { title: "Competitive Advantage", desc: "Unique technological capabilities that set you apart from competitors." },
      { title: "Process Automation", desc: "Streamline operations and dramatically reduce manual workloads." }
    ]
  },
  "web-hosting": {
    title: "Web Hosting",
    category: "IT Services",
    image: "/services_bg.png",
    overview: "Lightning-fast, ultra-secure hosting solutions for businesses that demand reliability.",
    description: "Your digital presence requires a solid foundation. Our premium web hosting services guarantee 99.9% uptime, blazing-fast load speeds, and enterprise-level security protocols to ensure your website or application is always accessible and protected.",
    features: [
      "Dedicated Server Hosting",
      "Managed VPS & Cloud Hosting",
      "Advanced DDoS Protection",
      "Automated Daily Backups",
      "Free SSL Certificates & CDN Integration"
    ],
    benefits: [
      { title: "Maximum Uptime", desc: "Keep your business online 24/7/365 without interruptions." },
      { title: "Blazing Speed", desc: "Faster load times significantly improve both SEO and user experience." },
      { title: "Ironclad Security", desc: "Protect your sensitive data against modern cyber threats." }
    ]
  },
  "domain-registration": {
    title: "Domain Registration",
    category: "IT Services",
    image: "/products_bg.png",
    overview: "Secure your unique digital identity with our comprehensive domain management services.",
    description: "Your domain is your address on the internet; it needs to be memorable, relevant, and secure. We provide hassle-free domain registration, transfer, and management services, ensuring your brand's digital identity is protected and optimized.",
    features: [
      "Global TLD Registration (.com, .net, .io, etc.)",
      "Seamless Domain Transfers",
      "Domain Privacy Protection (WHOIS Masking)",
      "Advanced DNS Management",
      "Automated Renewal Reminders"
    ],
    benefits: [
      { title: "Brand Protection", desc: "Secure your brand name before competitors or squatters do." },
      { title: "Simplified Management", desc: "Manage all your domains and hosting from a single, intuitive dashboard." },
      { title: "Enhanced Privacy", desc: "Keep your personal contact information hidden from public databases." }
    ]
  }
};

const ServiceDetail = () => {
  const location = useLocation();
  // Extract ID from pathname (e.g. /service/search-engine-optimization)
  const pathParts = location.pathname.split('/');
  const serviceId = pathParts[pathParts.length - 1];
  
  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!service) {
    return (
      <div className="min-h-screen bg-obsidian-deeper flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-cobalt hover:underline">Return to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-obsidian-deeper min-h-screen relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deeper via-obsidian-deeper/80 to-obsidian-deeper/50" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="section-tag mb-6 uppercase tracking-widest text-cobalt"
          >
            {service.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white mt-4 mb-6 leading-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-titanium text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {service.overview}
          </motion.p>
        </div>
      </section>

      {/* CONTENT & FEATURES SECTION */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
                Transform Your <span className="gradient-text-cobalt">Business</span>
              </h2>
              <div className="cobalt-line mb-6" />
              <p className="text-titanium text-lg leading-relaxed mb-10">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">What We Deliver</h3>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cobalt/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-cobalt/10 flex items-center justify-center text-cobalt flex-shrink-0">
                      <HiOutlineCheck size={18} />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Side Image / Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden cobalt-glow-border p-1 lg:h-[600px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-xl shadow-glass"
                  onError={(e) => { e.target.src = "/about_bg.png" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-deeper/90 via-obsidian-deeper/40 to-transparent rounded-xl" />
                
                {/* Floating Info Box */}
                <div className="absolute bottom-10 left-10 right-10 bg-obsidian-dark/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
                  <h4 className="text-white font-bold text-lg mb-2">Ready to Start?</h4>
                  <p className="text-titanium text-sm mb-4">Partner with us for industry-leading {service.title.toLowerCase()} solutions.</p>
                  <Link to="/contact">
                    <button className="text-cobalt font-semibold text-sm hover:text-white transition-colors flex items-center gap-2">
                      Get a Free Consultation <HiArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BENEFITS CARDS */}
      <section className="section-padding bg-obsidian-dark/40 border-y border-cobalt/10 mt-10 relative">
        <div className="absolute inset-0 bg-hero-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="section-tag">The Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-4 mb-4">
              Key <span className="gradient-text-cobalt">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="liquid-glass rounded-2xl p-8 border border-white/5 hover:border-cobalt/30 transition-all duration-300 group"
              >
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent absolute top-4 right-6 pointer-events-none">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-cobalt transition-colors">{benefit.title}</h3>
                <p className="text-titanium leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-dark to-obsidian-deeper" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
            Let's Elevate Your <span className="gradient-text-cobalt">Business</span>
          </h2>
          <p className="text-titanium text-lg mb-10 max-w-2xl mx-auto">
            Discuss your {service.title} project with our experts and get a customized roadmap to success.
          </p>
          <Link to="/contact">
            <button className="btn-cobalt flex items-center gap-2 text-base px-8 py-3.5 shadow-cobalt-md mx-auto hover:scale-105 transition-transform">
              Contact Us Today <HiArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
