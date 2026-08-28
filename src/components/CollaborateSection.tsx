"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, Mail, Check, Copy, Sparkles, Send } from "lucide-react";

export default function CollaborateSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("UI/UX Design");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailAddress = "abhay@biharidesigner.com";
  const phoneNumber = "+91 7764032453";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#F8F5EE] relative overflow-hidden border-b border-foreground/10"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                Get In Touch
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 leading-[0.95]">
                HAVE SOMETHING TO BUILD?
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-foreground/85 mb-8">
                <p className="font-semibold text-xl text-foreground">
                  Let&apos;s talk about it.
                </p>
                <p>
                  Whether you need a website, a new brand, a better product or simply need help figuring out what is not working — let&apos;s start there.
                </p>
              </div>
            </div>

            {/* Direct Secondary Action Links */}
            <div className="space-y-4 pt-6 border-t border-foreground/15">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/50 block">
                Direct Channels
              </span>

              {/* Call Now CTA */}
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="group flex-1 flex items-center justify-between p-4 bg-card border-2 border-foreground hover:bg-foreground hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="CALL"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-terracotta group-hover:text-mithila" />
                    <span className="font-display text-sm font-bold uppercase tracking-wider">
                      CALL NOW &rarr;
                    </span>
                  </div>
                  <span className="text-xs font-semibold opacity-80 group-hover:opacity-100">{phoneNumber}</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  title="Copy phone number to clipboard"
                  className="p-4 bg-card border-2 border-foreground hover:bg-terracotta hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="COPY"
                >
                  {copiedPhone ? <Check size={18} className="text-leaf" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Email Me CTA with copy action */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="group flex-1 flex items-center justify-between p-4 bg-card border-2 border-foreground hover:bg-foreground hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="EMAIL"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-terracotta group-hover:text-mithila" />
                    <span className="font-display text-sm font-bold uppercase tracking-wider">
                      EMAIL ME &rarr;
                    </span>
                  </div>
                  <span className="text-xs font-semibold opacity-80 group-hover:opacity-100">{emailAddress}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-4 bg-card border-2 border-foreground hover:bg-terracotta hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="COPY"
                >
                  {copiedEmail ? <Check size={18} className="text-leaf" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Toast message if email or phone copied */}
              <AnimatePresence>
                {(copiedEmail || copiedPhone) && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-bold text-leaf flex items-center gap-1.5"
                  >
                    <Check size={14} />
                    <span>
                      {copiedPhone ? `Copied ${phoneNumber} to clipboard!` : `Copied ${emailAddress} to clipboard!`}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Interactive Collaboration Form */}
          <div className="lg:col-span-7 bg-card border-2 border-foreground p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] relative">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-foreground/10">
              <span className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                Start a Conversation
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-leaf bg-leaf/10 border border-leaf/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
                Available for Projects
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-mithila/20 text-terracotta border-2 border-foreground flex items-center justify-center mb-4">
                  <Sparkles size={28} />
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-foreground mb-2">
                  Message Received!
                </h3>
                <p className="text-base text-foreground/80 max-w-sm mb-6">
                  Thanks {formData.name || "friend"}. I&apos;ll review your requirements and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-terracotta underline decoration-2 underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Picker */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70 block mb-3">
                    What can I help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "UI/UX Design",
                      "Branding",
                      "Product Design",
                      "Package Design",
                      "Print Media",
                      "Social Media Creative",
                    ].map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 border transition-all ${
                          selectedService === service
                            ? "bg-foreground text-background border-foreground shadow-[2px_2px_0px_0px_rgba(193,91,61,1)]"
                            : "bg-background text-foreground border-foreground/30 hover:border-foreground"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="collaborate-name"
                      className="text-xs font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="collaborate-name"
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border-2 border-foreground p-3 text-sm font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="collaborate-email"
                      className="text-xs font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      id="collaborate-email"
                      type="email"
                      required
                      placeholder="e.g. anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border-2 border-foreground p-3 text-sm font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    />
                  </div>
                </div>

                {/* Project Message */}
                <div>
                  <label
                    htmlFor="collaborate-message"
                    className="text-xs font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                  >
                    Tell me about what you want to build
                  </label>
                  <textarea
                    id="collaborate-message"
                    rows={4}
                    placeholder="Describe your vision, goals, or what is currently not working..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border-2 border-foreground p-3 text-sm font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                  />
                </div>

                {/* Main CTA */}
                <button
                  type="submit"
                  className="w-full bg-terracotta text-background hover:bg-foreground transition-colors p-4 font-display text-sm md:text-base font-bold uppercase tracking-widest flex items-center justify-center gap-2 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="SUBMIT"
                >
                  <span>LET&apos;S COLLABORATE</span>
                  <ArrowUpRight size={18} />
                </button>

                <p className="text-[11px] text-center text-foreground/50 uppercase tracking-wider font-semibold">
                  Designing from Bihar &bull; Responding within 24 business hours
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
