// src/components/Contact.jsx
import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjykrqdv";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const links = [
    {
      label: "Email",
      value: "imanukarangaire@gmail.com",
      href: "mailto:imanukarangaire@gmail.com",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      label: "LinkedIn",
      value: "in/anukarangaire",
      href: "https://www.linkedin.com/in/anukarangaire",
      icon: <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />,
    },
    {
      label: "GitHub",
      value: "anukarangaire",
      href: "https://github.com/anukarangaire",
      icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950 py-24 px-5">
      {/* Ambient glow accents */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-400/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-yellow-400 text-sm font-semibold tracking-wide mb-3">
            Got something in mind?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's build something,<br className="hidden sm:block" /> or just say hi
          </h2>
          <p className="text-blue-100/60 text-sm max-w-md mx-auto">
            Whether it's a project idea, a question, or a college inquiry — I read every message.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-6 items-start">
          {/* Left: contact links as a vertical stack of glowing pills */}
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-400/60 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4.5 h-4.5 text-slate-900" fill={link.label === "LinkedIn" || link.label === "GitHub" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    {link.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[11px] uppercase tracking-wide">{link.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
                    {link.value}
                  </p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Right: form card */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400/40 via-white/10 to-blue-400/30">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl bg-slate-900/90 backdrop-blur-sm p-7 space-y-4"
            >
              {status === "sent" ? (
                <div className="py-10 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <p className="text-white font-semibold">Message sent</p>
                  <p className="text-white/50 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-yellow-400 text-sm font-medium mt-2 hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/15 pb-2.5 text-white placeholder-white/30 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/15 pb-2.5 text-white placeholder-white/30 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/15 pb-2.5 text-white placeholder-white/30 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs">Something went wrong — try again, or email me directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-yellow-400/30 disabled:opacity-50 transition-all duration-300"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;