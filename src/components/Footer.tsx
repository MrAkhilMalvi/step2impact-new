import React from "react";
import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Who We Are", href: "#about" },
    { name: "Our Offerings", href: "#offerings" },
    { name: "Impact Philosophy", href: "#impact" },
    { name: "Our Leadership", href: "#leadership" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="relative bg-[#F8FAFC] bg-no-repeat bg-cover bg-left-bottom text-slate-800 pt-16 pb-8 border-t border-slate-100 overflow-hidden"
      style={{ backgroundImage: "url('/images/footer-bg-2.jpg')" }}
    >
      {/* Decorative left corner background gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-100/30 to-transparent pointer-events-none transform -skew-x-12 origin-top-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Adapts the 5 columns cleanly on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand/Logo Column */}
          <div className="md:col-span-6 lg:col-span-3 space-y-5">
            <div className="flex items-center h-12">
              <img
                src="/logos/step2impactlogo.png"
                alt="Step2Impact"
                className="h-8 md:h-9 w-auto object-contain origin-left scale-[3.5]"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Building a globally connected ecosystem focused on measurable transformation and sustainable growth.
            </p>
            
            {/* Social Icons matching image styling */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: <FaFacebook size={14} />, href: "#" },
                { icon: <FaLinkedin size={14} />, href: "#" },
                { icon: <FaInstagram size={14} />, href: "#" },
                { icon: <FaYoutube size={14} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded bg-[#EBF0F5] hover:bg-[#1A2530] hover:text-white flex items-center justify-center text-slate-600 transition-all duration-200"
                  aria-label={`Social Link ${idx}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links Column */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-5">
            <h4 className="text-base font-bold text-[#1A2530]">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-[#1A2530] font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-5">
            <h4 className="text-base font-bold text-[#1A2530]">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-[#1A2530] font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-6 lg:col-span-2 space-y-5">
            <h4 className="text-base font-bold text-[#1A2530]">Office Information</h4>
            <div className="space-y-4">
              {/* Call */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Call Us 24/7</span>
                  <span className="text-xs font-bold text-[#1A2530] block mt-0.5">(+256) 2145.2156</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Work with us</span>
                  <span className="text-xs font-bold text-[#1A2530] block mt-0.5 break-all">info@step2impactglobal.org</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Our Location</span>
                  <span className="text-xs font-bold text-[#1A2530] block mt-0.5 leading-tight">
                    XYZ Hilton Street, 125<br />Town United State
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#1A2530]">Get Updates</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Sign up for our latest news & articles. We won't give you spam mails.
            </p>

            {/* Input Form matching the design */}
            <div className="relative flex items-center w-full mt-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full pl-4 pr-14 py-3 bg-white/85 border border-[#E2E8F0] rounded text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
              />
              <button
                type="button"
                className="absolute right-1 top-1 bottom-1 px-3.5 bg-[#1A2530] hover:bg-slate-800 text-white rounded flex items-center justify-center transition-colors duration-150"
                aria-label="Subscribe"
              >
                <Send size={12} className="transform rotate-45" />
              </button>
            </div>

            <p className="text-[11px] text-slate-400">
              Note: We do not publish your email
            </p>
          </div>

        </div>

        {/* Bottom Divider Line */}
        <hr className="border-slate-200/60 my-6" />

        {/* Copyright and Back to Top Row */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-center">
            <p className="text-xs text-slate-500 font-medium tracking-wide">
              &copy; {currentYear} Step2Impact Global Network. All rights reserved.
            </p>
          </div>
          
          {/* Scroll Up Button */}
          <button
            onClick={scrollToTop}
            className="md:absolute right-0 bottom-[-4px] w-9 h-9 border border-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:border-slate-400 hover:shadow-sm transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;