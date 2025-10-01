"use client";
import { Button } from "@/app/ui/Button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    // Add newsletter subscription logic here
  };

  const footerLinks = {
    resources: [
      { label: "Blog", href: "#" },
      { label: "Guide and Tutorials", href: "#" },
      { label: "Request API Access", href: "#" },
      { label: "Free Templates", href: "#" },
    ],
    quickMenu: [
      { label: "Contact Us", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Pricing", href: "#" },
    ],
    tools: [
      { label: "AI Article Writer", href: "#" },
      { label: "Paraphrasing Tool", href: "#" },
      { label: "Sentence Expander", href: "#" },
      { label: "Text Summarizer", href: "#" },
    ],
    socials: [
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Discord", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden py-12 md:py-16 px-4 md:px-6">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
      
      {/* Main Footer Container with Border */}
      <div className="relative max-w-[1400px] mx-auto border border-gray-800 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm">
        
        <div className="relative px-8 md:px-12 lg:px-16 py-12">
          {/* Top Section - Logo and Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Left Side - Logo and Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">
                  WriteBot
                </span>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-base font-bold">T</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    Power By
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Themetags LTD.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Link Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {/* Resources */}
              <div>
                <h3 className="text-base font-semibold text-white mb-5">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Menu */}
              <div>
                <h3 className="text-base font-semibold text-white mb-5">
                  Quick Menu
                </h3>
                <ul className="space-y-3">
                  {footerLinks.quickMenu.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-base font-semibold text-white mb-5">
                  Tools
                </h3>
                <ul className="space-y-3">
                  {footerLinks.tools.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-base font-semibold text-white mb-5">
                  Socials Links
                </h3>
                <ul className="space-y-3">
                  {footerLinks.socials.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8" />

          {/* Bottom Section - Copyright and Newsletter */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Copyright - Left */}
            <div className="text-sm text-gray-400 lg:order-1 order-2">
              Copyright @2023 Writebot
            </div>

            {/* Newsletter - Center/Right */}
            <div className="flex-1 lg:max-w-2xl w-full lg:order-2 order-1">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Subscribe Our Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border border-gray-700 text-white placeholder:text-yellow-600/80 flex-1 h-12 rounded-full px-6 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 px-8 h-12 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 text-white font-medium"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
