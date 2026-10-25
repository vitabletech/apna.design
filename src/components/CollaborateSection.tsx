"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, Mail, Check, Copy, Sparkles } from "lucide-react";
import { useAvatarAssistant } from "./avatar-assistant/AvatarAssistantProvider";

export default function CollaborateSection({ asH1 = false }: { asH1?: boolean } = {}) {
  const { showHint, returnToIdle } = useAvatarAssistant();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("UI/UX Design");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const emailAddress = "abhay@apna.design";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.contactNumber) {
      showHint({ mood: "concerned", message: "A few details are missing. Let’s complete them." }, e.currentTarget);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      showHint({ mood: "concerned", message: "Please enter a valid email address, such as hello@example.com." }, e.currentTarget.querySelector<HTMLElement>("#collaborate-email"));
      return;
    }
    
    // Format message for WhatsApp
    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const text = `*New Inquiry from apna.design*
*Name:* ${name}
*Email:* ${formData.email}
*Contact:* ${formData.contactNumber}
*Service Needed:* ${selectedService}

*Message:*
${formData.message || "No message provided."}`;

    const encodedText = encodeURIComponent(text);
    // The phone number must include the country code without '+' or spaces
    const whatsappUrl = `https://wa.me/917764032453?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    showHint({ mood: "thinking", message: "Preparing your private WhatsApp draft…" }, e.currentTarget);
    const opened = window.open(whatsappUrl, '_blank');
    if (opened) {
      setSubmitted(true);
      showHint({ mood: "encouraging", message: "Your WhatsApp draft is ready. Send it there to complete your enquiry.", duration: 6000 });
    } else {
      showHint({ mood: "concerned", message: "WhatsApp could not open. Please allow pop-ups and try again." });
    }
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

              {asH1 ? (
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 leading-[0.95]">
                  HAVE SOMETHING TO BUILD?
                </h1>
              ) : (
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 leading-[0.95]">
                  HAVE SOMETHING TO BUILD?
                </h2>
              )}

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
              <span className="text-sm font-bold uppercase tracking-widest text-foreground/50 block">
                Direct Channels
              </span>

              {/* Call Now CTA */}
              <div className="flex items-stretch gap-2 w-full">
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="group flex-1 min-w-0 flex items-center gap-3 p-3.5 sm:p-4 bg-card border-2 border-foreground hover:bg-foreground hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="CALL"
                >
                  <Phone size={20} className="text-terracotta group-hover:text-mithila shrink-0" />
                  <div className="flex flex-col min-w-0 text-left">
                    <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider">
                      CALL NOW &rarr;
                    </span>
                    <span className="text-sm sm:text-base font-semibold opacity-90 group-hover:opacity-100 truncate">
                      {phoneNumber}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Copy phone number to clipboard"
                  className="w-12 sm:w-14 shrink-0 flex items-center justify-center bg-card border-2 border-foreground hover:bg-terracotta hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="COPY"
                >
                  {copiedPhone ? <Check size={18} className="text-leaf" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Email Me CTA with copy action */}
              <div className="flex items-stretch gap-2 w-full">
                <a
                  href={`mailto:${emailAddress}`}
                  className="group flex-1 min-w-0 flex items-center gap-3 p-3.5 sm:p-4 bg-card border-2 border-foreground hover:bg-foreground hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="EMAIL"
                >
                  <Mail size={20} className="text-terracotta group-hover:text-mithila shrink-0" />
                  <div className="flex flex-col min-w-0 text-left">
                    <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider">
                      EMAIL ME &rarr;
                    </span>
                    <span className="text-sm sm:text-base font-semibold opacity-90 group-hover:opacity-100 truncate">
                      {emailAddress}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="w-12 sm:w-14 shrink-0 flex items-center justify-center bg-card border-2 border-foreground hover:bg-terracotta hover:text-background transition-colors shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
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
                    className="text-sm font-bold text-leaf flex items-center gap-1.5"
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
              <span className="font-display text-base font-bold uppercase tracking-widest text-foreground">
                Start a Conversation
              </span>
              <span className="text-[13px] font-bold uppercase tracking-wider text-leaf bg-leaf/10 border border-leaf/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
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
                  WhatsApp Draft Ready
                </h3>
                <p className="text-base text-foreground/80 max-w-sm mb-6">
                  Your details are ready in WhatsApp. Review them and tap send there to complete your enquiry.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: "", lastName: "", email: "", contactNumber: "", message: "" });
                  }}
                  className="text-sm font-bold uppercase tracking-widest text-terracotta underline decoration-2 underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onInvalid={(interaction) => showHint({ mood: "concerned", message: "A few details are missing. Let’s complete them." }, interaction.target as HTMLElement)}
                className="space-y-6"
              >
                {/* Service Picker */}
                <div>
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 block mb-3">
                    What can I help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "UI/UX Design",
                      "Product Design",
                      "Branding",
                      "Social Media Creative",
                      "Package Design",
                      "Print Media",
                    ].map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`text-sm font-bold uppercase tracking-wider px-3 py-1.5 border transition-all ${selectedService === service
                          ? "bg-foreground text-background border-foreground shadow-[2px_2px_0px_0px_rgba(193,91,61,1)]"
                          : "bg-background text-foreground border-foreground/30 hover:border-foreground"
                          }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="collaborate-first-name"
                      className="text-sm font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      id="collaborate-first-name"
                      type="text"
                      required
                      placeholder="e.g. Anand"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      onFocus={(interaction) => showHint({ mood: "attentive", message: "What should I call you?" }, interaction.currentTarget)}
                      onBlur={(interaction) => formData.firstName ? showHint({ mood: "encouraging", message: "Nice to meet you!", duration: 2200 }, interaction.currentTarget) : returnToIdle()}
                      className="w-full bg-background border-2 border-foreground p-3 text-base font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="collaborate-last-name"
                      className="text-sm font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="collaborate-last-name"
                      type="text"
                      placeholder="e.g. Kumar"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      onFocus={(interaction) => showHint({ mood: "attentive", message: "Your last name is optional." }, interaction.currentTarget)}
                      onBlur={() => returnToIdle()}
                      className="w-full bg-background border-2 border-foreground p-3 text-base font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    />
                  </div>
                </div>

                {/* Row 2: Email Id & Contact Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="collaborate-email"
                      className="text-sm font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                    >
                      Email Id *
                    </label>
                    <input
                      id="collaborate-email"
                      type="email"
                      required
                      placeholder="e.g. anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={(interaction) => showHint({ mood: "attentive", message: "Enter a valid email address so we can get back to you." }, interaction.currentTarget)}
                      onBlur={(interaction) => {
                        if (!formData.email) showHint({ mood: "concerned", message: "Please enter your email address." }, interaction.currentTarget);
                        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) showHint({ mood: "concerned", message: "Please enter a valid email address, such as hello@example.com." }, interaction.currentTarget);
                        else showHint({ mood: "encouraging", message: "That email looks good!", duration: 2500 }, interaction.currentTarget);
                      }}
                      className="w-full bg-background border-2 border-foreground p-3 text-base font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="collaborate-contact"
                      className="text-sm font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                    >
                      Contact Number *
                    </label>
                    <input
                      id="collaborate-contact"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      onFocus={(interaction) => showHint({ mood: "attentive", message: "Add a number where we can reach you." }, interaction.currentTarget)}
                      onBlur={(interaction) => formData.contactNumber ? showHint({ mood: "encouraging", message: "Looking good—you’re nearly set.", duration: 2200 }, interaction.currentTarget) : returnToIdle()}
                      className="w-full bg-background border-2 border-foreground p-3 text-base font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    />
                  </div>
                </div>

                {/* Project Message */}
                <div>
                  <label
                    htmlFor="collaborate-message"
                    className="text-sm font-bold uppercase tracking-widest text-foreground/70 block mb-2"
                  >
                    Tell me about what you want to build
                  </label>
                  <textarea
                    id="collaborate-message"
                    rows={4}
                    placeholder="Describe your vision, goals, or what is currently not working..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={(interaction) => showHint({ mood: "curious", message: "Tell us a little about your project." }, interaction.currentTarget)}
                    onBlur={(interaction) => formData.message ? showHint({ mood: "encouraging", message: "That gives us a helpful starting point!", duration: 2500 }, interaction.currentTarget) : returnToIdle()}
                    className="w-full bg-background border-2 border-foreground p-3 text-base font-medium text-foreground focus:outline-hidden focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                  />
                </div>

                {/* Main CTA */}
                <button
                  type="submit"
                  className="w-full bg-terracotta text-background hover:bg-foreground transition-colors p-4 font-display text-base md:text-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  data-cursor="SUBMIT"
                >
                  <span>LET&apos;S COLLABORATE</span>
                  <ArrowUpRight size={18} />
                </button>

                <p className="text-[13px] text-center text-foreground/50 uppercase tracking-wider font-semibold">
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
