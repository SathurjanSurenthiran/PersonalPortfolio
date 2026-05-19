import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name.",
      });
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your message.",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon 🚀",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 6000);
    }, 1500);
  };

  const socialLinks = [
   {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: SOCIAL_LINKS.github,
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: SOCIAL_LINKS.facebook,
    },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:bg-black/10 transition-all duration-300 resize-none dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-white/30 dark:focus:bg-white/8";

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-slate-50 text-gray-900 dark:bg-black dark:text-white overflow-hidden scroll-mt-24"
    >
      <RadialGradientBackground variant="contact" />

      {/* Floating Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <MessageSquare className="w-4 h-4 text-purple-400" />

              <span className="text-sm font-medium text-purple-300">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </p>
          </div>
        </FadeIn>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 pb-12">

          {/* LEFT SIDE - FORM */}
          <FadeIn delay={100}>
            <div className="bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:border-purple-500/20 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-purple-400" />
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block mb-1.5 text-sm font-medium text-gray-600 dark:text-white/60"
                  >
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sathurjan"
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block mb-1.5 text-sm font-medium text-gray-600 dark:text-white/60"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block mb-1.5 text-sm font-medium text-gray-600 dark:text-white/60"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={inputClass}
                  />
                </div>

                {status.message && (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl text-sm border ${
                      status.type === "success"
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-red-500/10 border-red-500/20 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}

                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full px-6 py-3.5
                            bg-gradient-to-r from-purple-600 to-blue-600
                            hover:from-purple-500 hover:to-blue-500
                            disabled:opacity-60 disabled:cursor-not-allowed
                            rounded-2xl font-semibold text-white
                            hover:shadow-lg hover:shadow-purple-500/30
                            hover:-translate-y-0.5 hover:scale-[1.01]
                            active:scale-[0.99]
                            transition-all duration-300
                            flex items-center justify-center gap-2
                            group overflow-hidden"
                >
                  
                  <span
                    className="absolute inset-0 -translate-x-full
                              group-hover:translate-x-full
                              bg-gradient-to-r from-transparent via-white/20 to-transparent
                              skew-x-12 transition-transform duration-700"
                  ></span>

                  {loading ? (
                    <>
                      <span className="relative z-10 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="relative z-10">Sending…</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn delay={200}>
            <div className="flex flex-col gap-6 h-full">

              <div className="bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:border-purple-500/20 transition-all duration-500 flex-1">
                <h3 className="text-2xl font-semibold mb-3">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Connect
                  </span>
                </h3>

                <p className="text-gray-600 dark:text-white/60 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 mb-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-white/40 uppercase tracking-wider mb-0.5">
                      Email
                    </p>

                    <span className="text-gray-900 dark:text-white group-hover:text-purple-300 transition-colors duration-300 font-medium">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-white/40 uppercase tracking-wider mb-0.5">
                      Location
                    </p>

                    <span className="text-gray-900 dark:text-white font-medium">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:border-purple-500/20 transition-all duration-500">
                <p className="text-sm text-gray-500 dark:text-white/40 uppercase tracking-wider mb-5">
                  Find me online
                </p>

                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="relative flex items-center justify-center gap-2 flex-1
                                 px-4 py-3.5 rounded-2xl
                                 bg-black/5 border border-black/10
                                 text-gray-600
                                 dark:bg-white/5 dark:border-white/10
                                 dark:text-white/70
                                 transition-all duration-300
                                 hover:text-gray-900 dark:hover:text-white
                                 hover:scale-110
                                 hover:-translate-y-1
                                 hover:border-primary
                                 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                                 group overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 animate-pulse" />

                      <Icon className="relative w-5 h-5 z-10" />

                      <span className="relative text-sm font-medium hidden sm:block z-10">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
