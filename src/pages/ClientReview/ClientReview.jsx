import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const ClientReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "review") {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleStarClick = (value) => {
    setRating(value);
    setRatingError(false);
  };

  const handleSubmit = (e) => {
    if (rating === 0) {
      e.preventDefault();
      setRatingError(true);
      return;
    }
    // Form submits naturally to Laravel backend
  };

  return (
    <div className="bg-obsidian-deeper min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="section-tag"
          >
            Feedback
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white mt-4 mb-4"
          >
            We Value Your <span className="gradient-text-cobalt">Review</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-titanium text-lg"
          >
            Your feedback helps us continuously improve and deliver exceptional results.
          </motion.p>
        </div>

        <div className="relative z-50 quantum-card bg-obsidian-dark/80 p-8 sm:p-12 rounded-2xl border border-cobalt/20 shadow-glass">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-titanium">Your review has been submitted and is pending approval.</p>
            </div>
          ) : (
            <form
              ref={formRef}
              action="/review"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6 relative z-50"
            >
              {/* Star Rating */}
              <div className="flex flex-col items-center mb-2">
                <p className="text-titanium text-sm mb-3 uppercase tracking-widest font-semibold">
                  Your Rating <span className="text-red-400">*</span>
                </p>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      style={{ cursor: "pointer", display: "inline-block" }}
                    >
                      <FaStar
                        size={36}
                        color={star <= (hover || rating) ? "#ffc107" : "#3d4451"}
                        style={{ filter: star <= (hover || rating) ? "drop-shadow(0 0 6px #ffc10788)" : "none", transition: "all 0.15s ease" }}
                      />
                    </span>
                  ))}
                </div>
                {/* Hidden input to submit rating value */}
                <input type="hidden" name="rating" value={rating} />
                {ratingError && (
                  <p className="text-red-400 text-sm mt-2">Please select a star rating before submitting.</p>
                )}
                {rating > 0 && (
                  <p className="text-yellow-400 text-sm mt-2 font-medium">
                    {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]} ({rating}/5)
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-titanium text-sm mb-2">Full Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    className="w-full bg-obsidian-deeper border border-cobalt/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-titanium text-sm mb-2">Company Name <span className="text-titanium/50">(Optional)</span></label>
                  <input
                    type="text"
                    name="company_name"
                    className="w-full bg-obsidian-deeper border border-cobalt/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors"
                    placeholder="Tech Innovations Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-titanium text-sm mb-2">Your Review <span className="text-red-400">*</span></label>
                <textarea
                  name="review_text"
                  required
                  rows="5"
                  className="w-full bg-obsidian-deeper border border-cobalt/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors resize-none"
                  placeholder="Tell us about your experience working with Scitforte..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-cobalt py-4 rounded-lg font-semibold text-lg hover:shadow-cobalt-md transition-all cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ClientReview;
