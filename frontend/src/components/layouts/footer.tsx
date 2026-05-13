"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import * as Tooltip from "@radix-ui/react-tooltip";
import { AnimatedNumber } from "../shared/ui/animatedNumber";
import { useVisitorCount } from "@/src/hooks/useVisitorCount";
import { MdOutlineDocumentScanner } from "react-icons/md";
import chiyaImage from "@/public/chiya.png";
import Image from "next/image";

import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaLinkedinIn } from "react-icons/fa";
import { Mail, Send, User, MessageSquare } from "lucide-react";

export const CTASection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const isMounted = useRef(true);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    // Debug: Log env vars (remove in production)
    console.log("EmailJS Config:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        ? "✓ Set"
        : "✗ Missing",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        ? "✓ Set"
        : "✗ Missing",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ? "✓ Set"
        : "✗ Missing",
    });

    const formData = new FormData(formRef.current);
    const user_name = formData.get("user_name") as string;
    const user_email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    try {
      // Admin email
      const adminResult = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      console.log("Admin email sent:", adminResult);

      // Auto reply
      const autoReplyResult = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
        {
          user_name,
          user_email,
          message,
          time: new Date().toLocaleString(), // Add timestamp variable
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      console.log("Auto-reply sent:", autoReplyResult);

      if (isMounted.current) {
        setStatus(
          "Message sent successfully 🚀 Check your inbox for confirmation.",
        );
        formRef.current.reset();
      }
    } catch (error: any) {
      console.error("EmailJS Error:", {
        text: error?.text,
        status: error?.status,
        message: error?.message,
      });

      if (isMounted.current) {
        setStatus(error?.text || "Failed to send message. Please try again.");
      }
    } finally {
      if (isMounted.current) setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-10 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="mt-5">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-fluid-xl font-bold text-primary">
            Interested in working together?
          </h2>
          <p className="text-secondary text-fluid-sm leading-relaxed">
            I’m always open to exciting projects, freelance opportunities,
            collaborations, or meaningful tech conversations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row flex-wrap py-5 gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/sudipneupane-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-xl border border-border bg-bg-page text-fluid-sm text-primary font-medium hover:border-purple-500 hover:text-purple-500 transition-all"
          >
            <FaLinkedinIn className="w-4 h-4 mr-2" />
            LinkedIn
          </a>

          <a
            href="/resume"
            className="inline-flex items-center justify-center px-5 py-2 rounded-xl border border-border bg-bg-page text-fluid-sm text-primary font-medium hover:border-purple-500 hover:text-purple-500 transition-all"
          >
            <MdOutlineDocumentScanner className="w-5 h-5 mr-2" />
            View Resume
          </a>
        </div>

        {/* Form */}
        <div className="w-full backdrop-blur-lg border border-border rounded-3xl shadow-xl p-5 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-fluid-lg font-semibold text-primary mb-2">
              Send Me a Message
            </h3>
            <p className="text-fluid-sm text-secondary">
              Fill out the form below and I’ll get back to you soon.
            </p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-fluid-xs text-secondary mb-2 block">
                Your Name
              </label>
              <div className="flex items-center rounded-xl border border-border px-4 py-3 focus-within:border-purple-500 transition">
                <User className="w-4 h-4 mr-3 text-secondary" />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-transparent outline-none text-fluid-sm text-primary placeholder:text-secondary"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-fluid-sm text-secondary mb-2 block">
                Your Email
              </label>
              <div className="flex items-center rounded-xl border border-border px-4 py-3 focus-within:border-purple-500 transition">
                <Mail className="w-4 h-4 mr-3 text-secondary" />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none text-fluid-sm text-primary placeholder:text-secondary"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-fluid-sm text-secondary mb-2 block">
                Project Details / Message
              </label>
              <div className="flex rounded-xl border border-border px-4 py-3 focus-within:border-purple-500 transition">
                <MessageSquare className="w-4 h-4 mr-3 mt-1 text-secondary" />
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full bg-transparent outline-none text-fluid-sm text-primary placeholder:text-secondary resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center border border-gray-300 rounded-xl bg-bg-page text-fluid-sm text-primary py-2 mt-3 font-semibold hover:border-purple-500 transition-all cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4 ml-2" />
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-fluid-sm text-secondary mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          sideOffset={6}
          className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md z-50"
        >
          {label}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const count = useVisitorCount();

  return (
    <footer className="mt-10 border-t border-gray-200">
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary">Sudip Neupane</h3>
            <p className="text-secondary text-fluid-sm ">
              Open to opportunities, Closed to bad
              <span>
                <Image
                  src={chiyaImage.src}
                  alt="Chiya"
                  width={60}
                  height={60}
                  className="inline-block animate-wave"
                />
              </span>
              tea/coffee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-flud-md font-semibold text-primary mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-fluid-xs">
              <li>
                <a
                  href="/resume"
                  className="text-secondary hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-secondary hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* social media links */}
          <div>
            <h4 className="text-fluid-md font-semibold text-primary mb-3">
              Connect with me
            </h4>
            <div className="flex items-center gap-4 mt-5">
              <SocialLink
                href="https://www.linkedin.com/in/sudipneupane-dev/"
                label="LinkedIn"
                icon={<FaLinkedin className="w-5 h-5 text-blue-500" />}
              />
              <SocialLink
                href="https://github.com/neupanesudip90"
                label="GitHub"
                icon={<FaGithub className="w-5 h-5 text-gray-500" />}
              />
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=neupanesudip90@gmail.com"
                label="Gmail"
                icon={<SiGmail className="w-5 h-5 text-red-500" />}
              />
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary">
            © {currentYear} hi@sudipneupane01.com.np
          </p>

          {count && (
            <p className="text-fluid-sm text-secondary">
              <span className="inline-block animate-wave ">👋</span> You are the{" "}
              <span className="font-bold text-primary">
                <AnimatedNumber value={count} />
              </span>{" "}
              th visitor!,thanks for stopping by!
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};
