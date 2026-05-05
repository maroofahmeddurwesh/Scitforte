import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    question: "What services does Scitforte provide?",
    answer: "We provide a wide range of digital services including Custom Software Development, Mobile App Development, UI/UX Design, Cloud Computing Solutions, and comprehensive Digital Marketing services (SEO, Social Media, Content Marketing)."
  },
  {
    question: "How do you ensure the quality of your software products?",
    answer: "Quality is our top priority. We employ rigorous automated and manual testing methodologies, continuous integration/continuous deployment (CI/CD) pipelines, and peer code reviews to ensure all deliverables are robust, secure, and highly performant."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer flexible post-launch maintenance and support plans. We ensure your software stays updated with the latest security patches, remains compatible with new OS updates, and scales seamlessly as your business grows."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary greatly depending on the scope and complexity. A standard corporate website might take 4-6 weeks, while a complex enterprise SaaS application could take 4-6 months. We provide detailed timelines during the initial consultation phase."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price contracts for projects with well-defined scopes, and dedicated team (time & materials) models for long-term projects requiring flexibility and continuous iteration."
  },
  {
    question: "Can you help migrate our legacy systems to the cloud?",
    answer: "Absolutely. Our cloud engineers specialize in migrating legacy on-premise infrastructure to modern, secure, and scalable cloud environments (AWS, Azure, Google Cloud) with zero downtime and no data loss."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-obsidian-deeper min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="section-tag"
          >
            Knowledge Base
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white mt-4 mb-4"
          >
            Frequently Asked <span className="gradient-text-cobalt">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-titanium text-lg max-w-2xl mx-auto"
          >
            Find brief answers to your short questions here. If you can't find what you're looking for, feel free to contact us.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`rounded-2xl border ${openIndex === index ? 'border-cobalt/40 bg-cobalt/5' : 'border-white/10 bg-obsidian-dark/40 hover:border-white/20'} overflow-hidden transition-colors duration-300`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`text-lg font-semibold pr-8 ${openIndex === index ? 'text-white' : 'text-titanium'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-cobalt text-white' : 'bg-white/5 text-titanium'}`}>
                  {openIndex === index ? <HiMinus /> : <HiPlus />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-titanium leading-relaxed border-t border-cobalt/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
