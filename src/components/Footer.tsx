import React from "react";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
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

  return (
    <footer className="bg-[#0F172A] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-6 mb-14 sm:mb-16 md:mb-24">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center h-11 sm:h-12">
              <img
                src="/logos/step2impactlogo.png"
                alt="Step2Impact"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain scale-[2] sm:scale-[2.2] origin-center sm:origin-left brightness-[2]"
              />
            </div>
            <div>
              <p className="text-white/60 font-bold text-base sm:text-lg italic leading-relaxed">
                Empower. Enable. Impact.
              </p>
              <p className="text-xs sm:text-sm text-white/35 leading-relaxed max-w-xs mx-auto sm:mx-0 mt-3">
                Building a globally connected ecosystem focused on measurable transformation and sustainable growth.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="text-white/70 font-semibold uppercase tracking-wider text-[10px] sm:text-xs mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#B91C1C] font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="text-white/70 font-semibold uppercase tracking-wider text-[10px] sm:text-xs mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#B91C1C] font-medium text-xs sm:text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6 sm:space-y-7">
            <div className="text-center sm:text-left">
              <h4 className="text-white/70 font-semibold uppercase tracking-wider text-[10px] sm:text-xs mb-5">Connect</h4>
              <div className="space-y-3 inline-block sm:block text-left">
                <a
                  href="mailto:info@step2impactglobal.org"
                  className="flex items-center gap-2.5 sm:gap-3 text-white/40 hover:text-white transition-colors group"
                >
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-white/[0.06] rounded-lg flex items-center justify-center group-hover:bg-[#B91C1C] group-hover:text-white transition-all">
                    <Mail size={14} />
                  </div>
                  <span className="font-medium text-xs sm:text-sm break-all">info@step2impactglobal.org</span>
                </a>
                <a
                  href="https://www.step2impactglobal.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 text-white/40 hover:text-white transition-colors group"
                >
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-white/[0.06] rounded-lg flex items-center justify-center group-hover:bg-[#B91C1C] group-hover:text-white transition-all">
                    <Globe size={14} />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">www.step2impactglobal.org</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {[
                { icon: <FaLinkedin size={16} />, href: "#" },
                { icon: <FaInstagram size={16} />, href: "#" },
                { icon: <FaFacebook size={16} />, href: "#" },
                { icon: <FaYoutube size={16} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/35 hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C] transition-all duration-300"
                  aria-label={`Social Link ${idx}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-white/25 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-center md:text-left">
            &copy; {currentYear} Step2Impact Global Network. <br className="sm:hidden" /> All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-3 sm:w-4 bg-[#B91C1C] hidden md:block" />
            <span className="text-white/15 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-center">
              Global Reach &bull; Measurable Impact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
