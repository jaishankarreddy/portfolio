import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2,
  Github,
  Linkedin,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

function InfoRow({ icon: Icon, label, value, href, copyValue }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue || value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };
  const Inner = (
    <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/[0.1] hover:border-orange-500/40 transition-all group">
      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
        <Icon className="w-4 h-4 text-white" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
          {label}
        </span>
        <span className="block text-sm font-semibold text-white truncate">{value}</span>
      </span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </span>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {Inner}
    </a>
  ) : (
    <button onClick={copy} className="block w-full text-left">
      {Inner}
    </button>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    emailjs
      .send(
        "service_qwfv9l2",
        "template_7wl187c",
        { name: formData.name, email: formData.email, message: formData.message },
        "GJuzyyVA7nGue0_fy"
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent — I'll get back to you soon!", { position: "top-center", autoClose: 3200 });
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setSending(false);
        toast.error("Failed to send. Please email me directly.", { position: "top-center", autoClose: 3200 });
      });
  };

  const inputCls =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-all";

  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06 — Contact"
          title="Let's Work"
          accent="Together"
          sub="Open to full-time roles, freelance revamps and collaborations."
        />

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-5 items-stretch">
          {/* info panel */}
          <motion.div
            initial={{ x: "-10vw", opacity: 0, filter: "blur(10px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 90, damping: 9, mass: 1 }}
            className="relative overflow-hidden rounded-3xl bg-gray-950 text-white p-6 sm:p-8 flex flex-col"
          >
            <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-orange-500/25 blur-[60px]" />
            <div className="absolute -bottom-32 -left-24 w-72 h-72 rounded-full bg-amber-500/15 blur-[60px]" />
            <div className="relative flex-1 flex flex-col">
              <span className="inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-green-500/15 text-green-300 border border-green-500/25 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available now
              </span>
              <h3 className="text-2xl font-extrabold mt-4 leading-tight">
                Have a project in mind?
                <span className="block text-orange-400">Let&apos;s talk.</span>
              </h3>
              <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">
                I usually reply within a day. Prefer email — or send the form and it lands straight in my inbox.
              </p>
              <div className="grid gap-3 mt-6">
                <InfoRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} copyValue={profile.email} />
                <InfoRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} copyValue={profile.phone} />
                <InfoRow icon={MapPin} label="Location" value={profile.location} copyValue={profile.location} />
              </div>
              <div className="flex items-center gap-2.5 mt-6">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.06] flex items-center justify-center text-gray-300 hover:text-white hover:border-orange-500/50 hover:-translate-y-0.5 transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.06] flex items-center justify-center text-gray-300 hover:text-white hover:border-orange-500/50 hover:-translate-y-0.5 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-gray-500 font-medium ml-1">Typically responds within 24h</span>
              </div>
            </div>
          </motion.div>

          {/* form panel */}
          <motion.div
            initial={{ x: "10vw", opacity: 0, filter: "blur(10px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 80, damping: 7, mass: 1 }}
            className="rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-900/[0.06] p-6 sm:p-8"
          >
            <h3 className="text-base font-bold text-gray-900">Send a message</h3>
            <p className="text-xs text-gray-500 mt-1">Fields marked * are required.</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1.5">Your name *</label>
                  <input id="name" name="name" type="text" required placeholder="John Carter"
                    value={formData.name} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="john@company.com"
                    value={formData.email} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1.5">Message *</label>
                <textarea id="message" name="message" required rows={5}
                  placeholder="Hi Jaishankar, we'd like to discuss a website revamp…"
                  value={formData.message} onChange={handleChange}
                  className={`${inputCls} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={sending}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm py-3.5 transition-all shadow-lg ${
                  sent
                    ? "bg-green-500 text-white shadow-green-500/30"
                    : "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30 hover:shadow-orange-500/40"
                } disabled:opacity-70`}
              >
                {sending ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                ) : sent ? (
                  <><Check className="w-4 h-4" /> Message sent!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                Or email directly at <a href={`mailto:${profile.email}`} className="text-orange-600 font-semibold hover:underline">{profile.email}</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
